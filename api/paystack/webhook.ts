import { createHmac, timingSafeEqual } from "crypto";
import { getPaystackPaymentTypeConfig, isPaystackPaymentType, toKobo } from "../../lib/payments/paystack-config";
import { isReferenceProcessed, markReferenceProcessed } from "../../lib/payments/paystack-process-store";

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  const webhookSecret = process.env.PAYSTACK_WEBHOOK_SECRET;
  if (!webhookSecret) return new Response("PAYSTACK_WEBHOOK_SECRET is not configured", { status: 500 });

  const signature = req.headers.get("x-paystack-signature") || "";
  if (!signature) return new Response("Missing x-paystack-signature header", { status: 400 });

  // Raw body is required for Paystack signature verification.
  const rawBody = await req.text();
  const expectedSignature = createHmac("sha512", webhookSecret).update(rawBody).digest("hex");

  try {
    const sigBuf = Buffer.from(signature, "hex");
    const expBuf = Buffer.from(expectedSignature, "hex");
    if (sigBuf.length !== expBuf.length || !timingSafeEqual(sigBuf, expBuf)) {
      return new Response("Invalid webhook signature", { status: 401 });
    }
  } catch {
    // If signature isn't hex for some reason, treat as invalid.
    return new Response("Invalid webhook signature", { status: 401 });
  }

  let payload: any = null;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return new Response("Invalid JSON payload", { status: 400 });
  }

  const eventType = payload?.event;
  const data = payload?.data;
  const reference: string = data?.reference;
  const txStatus: string = data?.status;
  const paymentTypeRaw: unknown = data?.metadata?.paymentType;

  const isSuccessEvent =
    typeof eventType === "string" && eventType.endsWith(".success") && typeof txStatus === "string" && txStatus === "success";

  if (!reference || !isSuccessEvent) {
    // Acknowledge even for non-success events.
    return new Response("OK", { status: 200 });
  }

  if (!isPaystackPaymentType(paymentTypeRaw)) {
    // Unknown/unsupported payment types should not be processed.
    return new Response("OK", { status: 200 });
  }

  const paymentType = paymentTypeRaw;
  const config = getPaystackPaymentTypeConfig(paymentType);
  const expectedAmountKobo = toKobo(config.amountNGN);
  const receivedAmountKobo = Number(data?.amount);

  if (receivedAmountKobo !== expectedAmountKobo) {
    // Amount mismatch: do not treat as successful for this payment type.
    return new Response("OK", { status: 200 });
  }

  if (await isReferenceProcessed(reference)) {
    return new Response("OK", { status: 200 });
  }
  await markReferenceProcessed(reference);

  // Optional persistence layer can be added later.
  // For now we log a production-safe summary.
  const metadata = data?.metadata ?? {};
  const customerEmail = typeof metadata?.customerEmail === "string" ? metadata.customerEmail : "";

  console.log("[paystack:webhook] Success processed", {
    reference,
    paymentType,
    amountKobo: receivedAmountKobo,
    customerEmail,
  });

  return new Response("OK", { status: 200 });
}

