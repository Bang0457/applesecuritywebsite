import { randomBytes } from "crypto";
import {
  getPaystackPaymentTypeConfig,
  isPaystackPaymentType,
  toKobo,
  type PaystackPaymentType,
} from "../../lib/payments/paystack-config";

type InitializeRequestBody = {
  paymentType: PaystackPaymentType;
  customer?: {
    name?: string;
    email?: string;
    phone?: string;
  };
};

function getBaseUrl() {
  // Vite public base URL for callback URLs.
  const baseUrl = process.env.VITE_PUBLIC_SITE_URL || process.env.PUBLIC_SITE_URL;
  if (!baseUrl) return null;
  return baseUrl.replace(/\/$/, "");
}

function safeString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== "POST") return new Response("Method Not Allowed", { status: 405 });

  const secretKey = process.env.PAYSTACK_SECRET_KEY;
  if (!secretKey) return new Response("PAYSTACK_SECRET_KEY is not configured", { status: 500 });

  const baseUrl = getBaseUrl();
  if (!baseUrl) return new Response("VITE_PUBLIC_SITE_URL is not configured", { status: 500 });

  let body: InitializeRequestBody | null = null;
  try {
    body = (await req.json()) as InitializeRequestBody;
  } catch {
    return new Response("Invalid JSON body", { status: 400 });
  }

  const paymentType = body?.paymentType;
  if (!isPaystackPaymentType(paymentType)) {
    return new Response("Invalid paymentType", { status: 400 });
  }

  const customerEmail = safeString(body?.customer?.email);
  if (!customerEmail) return new Response("Customer email is required", { status: 400 });

  const customerName = safeString(body?.customer?.name);
  const customerPhone = safeString(body?.customer?.phone);

  const config = getPaystackPaymentTypeConfig(paymentType);
  const amount = toKobo(config.amountNGN);

  // Reference must be unique.
  const reference = `PS_${paymentType}_${Date.now()}_${randomBytes(6).toString("hex")}`;
  const callbackUrl = `${baseUrl}/#/payment/success`;

  // We include product + paymentType in Paystack metadata for later server-side verification.
  const metadata = {
    paymentType,
    customerName,
    customerEmail,
    customerPhone,
    productOrServiceName: config.productOrServiceName,
    internalReference: reference,
  };

  const paystackRes = await fetch("https://api.paystack.co/transaction/initialize", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: customerEmail,
      amount,
      reference,
      callback_url: callbackUrl,
      currency: config.currency,
      metadata,
    }),
  });

  const paystackJson = await paystackRes.json().catch(() => null);
  if (!paystackRes.ok || !paystackJson?.data) {
    return new Response(
      JSON.stringify({
        error: paystackJson?.message ?? "Failed to initialize Paystack transaction",
      }),
      { status: 502, headers: { "Content-Type": "application/json" } }
    );
  }

  return new Response(
    JSON.stringify({
      authorization_url: paystackJson.data.authorization_url,
      access_code: paystackJson.data.access_code,
      reference: paystackJson.data.reference,
    }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}

