import { getPaystackPaymentTypeConfig, isPaystackPaymentType, toKobo, type PaystackPaymentType } from "../../lib/payments/paystack-config";
import { isReferenceProcessed } from "../../lib/payments/paystack-process-store";

function safeString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) return new Response("PAYSTACK_SECRET_KEY is not configured", { status: 500 });

  let body: { reference?: string } | null = null;
  try {
    body = (await req.json()) as { reference?: string };
  } catch {
    return new Response("Invalid JSON body", { status: 400 });
  }

  const reference = safeString(body?.reference);
  if (!reference) return new Response("reference is required", { status: 400 });

  const paystackRes = await fetch("https://api.paystack.co/transaction/verify", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ reference }),
  });

  const paystackJson = await paystackRes.json().catch(() => null);
  if (!paystackRes.ok || !paystackJson?.data) {
    return new Response(
      JSON.stringify({ ok: false, error: paystackJson?.message ?? "Failed to verify transaction" }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  const tx = paystackJson.data as {
    status: string;
    reference: string;
    amount: number;
    currency?: string;
    metadata?: Record<string, unknown>;
  };

  const paymentTypeRaw = tx.metadata?.paymentType;
  if (!isPaystackPaymentType(paymentTypeRaw)) {
    return new Response(JSON.stringify({ ok: false, error: "Invalid paymentType in transaction metadata" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const paymentType: PaystackPaymentType = paymentTypeRaw;
  const config = getPaystackPaymentTypeConfig(paymentType);
  const expectedAmountKobo = toKobo(config.amountNGN);

  const amountMatches = Number(tx.amount) === expectedAmountKobo;
  const statusIsSuccess = tx.status === "success";

  if (!amountMatches) {
    return new Response(
      JSON.stringify({ ok: false, error: "Payment amount mismatch" }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  // Webhook is treated as the final source of truth.
  const webhookConfirmed = statusIsSuccess && (await isReferenceProcessed(reference));

  return new Response(
    JSON.stringify({
      ok: true,
      reference: safeString(tx.reference) || reference,
      status: webhookConfirmed ? "success" : "pending",
      paymentType,
      amountKobo: expectedAmountKobo,
      customerEmail: safeString(tx.metadata?.customerEmail),
      customerName: safeString(tx.metadata?.customerName),
      customerPhone: safeString(tx.metadata?.customerPhone),
      currency: tx.currency,
      success: webhookConfirmed,
      webhookConfirmed,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

