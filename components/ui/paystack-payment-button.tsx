import React, { useEffect, useMemo, useState } from "react";
import { Button } from "./button";
import type { PaystackPaymentType } from "@/lib/payments/paystack-config";
import { getPaystackPaymentTypeConfig, toKobo } from "@/lib/payments/paystack-config";

type CustomerDetails = {
  name?: string;
  email?: string;
  phone?: string;
};

export type PaystackPaymentButtonProps = {
  paymentType: PaystackPaymentType;
  customer?: CustomerDetails;
  /**
   * When false, the component will not render name/phone inputs and relies on `customer` props.
   * Useful when the page already collects those fields.
   */
  collectCustomerDetails?: boolean;
  className?: string;
};

function formatNGN(amountNGN: number) {
  try {
    return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amountNGN);
  } catch {
    return `NGN ${amountNGN}`;
  }
}

export const PaystackPaymentButton: React.FC<PaystackPaymentButtonProps> = ({
  paymentType,
  customer,
  collectCustomerDetails = true,
  className,
}) => {
  const config = getPaystackPaymentTypeConfig(paymentType);
  const amountLabel = useMemo(() => formatNGN(config.amountNGN), [config.amountNGN]);

  const [name, setName] = useState(customer?.name ?? "");
  const [email, setEmail] = useState(customer?.email ?? "");
  const [phone, setPhone] = useState(customer?.phone ?? "");

  // Keep local input state in sync with the `customer` prop (needed for pages like `Contact`).
  useEffect(() => {
    setName(customer?.name ?? "");
    setEmail(customer?.email ?? "");
    setPhone(customer?.phone ?? "");
  }, [customer?.name, customer?.email, customer?.phone]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canPay = email.trim().length > 3;

  const handlePay = async () => {
    setError(null);
    if (!canPay) {
      setError("Please enter your email address to continue.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentType,
          customer: {
            name: collectCustomerDetails ? name.trim() : customer?.name?.trim() ?? "",
            email: email.trim(),
            phone: collectCustomerDetails ? phone.trim() : customer?.phone?.trim() ?? "",
          },
        }),
      });

      const payload = (await res.json()) as
        | { authorization_url: string; access_code?: string; reference: string }
        | { error: string };

      if (!res.ok) {
        const message = "error" in payload ? payload.error : "Failed to initialize payment.";
        setError(message);
        return;
      }

      if ("authorization_url" in payload && payload.authorization_url) {
        // Hosted checkout redirect.
        window.location.assign(payload.authorization_url);
        return;
      }

      setError("Paystack did not return a checkout URL. Please try again.");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to start Paystack checkout.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="text-left">
            <div className="text-xs font-black uppercase tracking-widest text-red-700">Pay</div>
            <div className="text-lg font-bold text-slate-900">{config.label}</div>
            <div className="text-sm text-slate-600 mt-1">{amountLabel}</div>
            <div className="text-xs text-slate-500 mt-1">{config.description}</div>
          </div>
        </div>
      </div>

      {collectCustomerDetails ? (
        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <label className="block text-xs font-black uppercase text-slate-500 tracking-widest mb-2">
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
              placeholder="John Doe"
              type="text"
              autoComplete="name"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-black uppercase text-slate-500 tracking-widest mb-2">
              Email Address
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
              placeholder="john@example.com"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-xs font-black uppercase text-slate-500 tracking-widest mb-2">
              Phone Number
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent transition-all"
              placeholder="+234 ..."
              type="tel"
              autoComplete="tel"
            />
          </div>
        </div>
      ) : null}

      {!canPay ? (
        <div className="mt-3 text-xs font-bold text-slate-500">Enter your email to enable checkout.</div>
      ) : null}

      {error ? <div className="mt-3 text-sm font-bold text-red-700">{error}</div> : null}

      <div className="mt-4">
        <Button
          onClick={handlePay}
          disabled={loading || !canPay}
          className="w-full"
          variant="default"
        >
          {loading ? (
            "Redirecting to Paystack..."
          ) : (
            `Pay ${amountLabel} Now`
          )}
        </Button>
      </div>
    </div>
  );
};

export function getPaystackPaymentAmountKobo(paymentType: PaystackPaymentType): number {
  const config = getPaystackPaymentTypeConfig(paymentType);
  return toKobo(config.amountNGN);
}

