import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

type VerifyResponse =
  | {
      ok: true;
      reference: string;
      status: "success" | string;
      success: boolean;
      paymentType: string;
      amountKobo: number;
      customerEmail?: string;
      customerName?: string;
      customerPhone?: string;
      webhookConfirmed?: boolean;
    }
  | {
      ok: false;
      error: string;
    };

function formatNGNFromKobo(amountKobo: number) {
  const amountNGN = amountKobo / 100;
  try {
    return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amountNGN);
  } catch {
    return `NGN ${amountNGN}`;
  }
}

const PaymentSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const reference = searchParams.get("reference") ?? "";

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifyResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!reference) return;
    let cancelled = false;
    let attempts = 0;
    const maxAttempts = 10;
    let latestResult: VerifyResponse | null = null;

    const verifyOnce = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/paystack/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ reference }),
        });

        const payload = (await res.json()) as VerifyResponse;
        if (cancelled) return;

        if (!res.ok || !payload || payload.ok === false) {
          latestResult = {
            ok: false,
            error:
              payload && "error" in payload
                ? (payload as any).error
                : "Payment verification failed.",
          };
          setResult(latestResult);
          return;
        }

        latestResult = payload;
        setResult(payload);
      } catch (e) {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : "Failed to verify payment.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    const run = async () => {
      while (!cancelled && attempts < maxAttempts) {
        attempts += 1;
        await verifyOnce();
        if (!cancelled) {
          if (latestResult && latestResult.ok && latestResult.success) return;
        }

        // Wait briefly before polling again.
        await new Promise((r) => setTimeout(r, 3000));
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [reference]);

  const showSuccess = result && result.ok && result.success;

  return (
    <div className="flex flex-col">
      <div className="bg-slate-900 py-20 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase tracking-wide">
            Payment Result
          </h1>
          <p className="text-slate-400 mt-4">
            {reference ? `Reference: ${reference}` : "Missing reference in callback."}
          </p>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-slate-700 font-bold">
              Verifying payment with Paystack...
            </div>
          ) : null}

          {error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-800 font-bold">
              {error}
            </div>
          ) : null}

          {result && result.ok ? (
            <div
              className={
                showSuccess
                  ? "bg-green-50 border border-green-200 rounded-xl p-6 text-green-900"
                  : "bg-slate-50 border border-slate-200 rounded-xl p-6 text-slate-800"
              }
            >
              <h2 className="text-2xl font-extrabold">
                {showSuccess ? "Payment successful" : "Payment pending"}
              </h2>
              <p className="mt-2 font-bold">
                Amount: {formatNGNFromKobo(result.amountKobo)}
              </p>
              <p className="mt-2 text-sm text-slate-600">
                Payment Type: {result.paymentType}
              </p>
              {result.success && result.webhookConfirmed === false ? (
                <p className="mt-3 text-sm text-slate-600">
                  Note: Paystack confirms payment, but webhook finalization may still be in progress.
                </p>
              ) : null}
              {result.customerEmail ? (
                <p className="mt-1 text-sm text-slate-600">
                  Customer Email: {result.customerEmail}
                </p>
              ) : null}
            </div>
          ) : null}

          {result && !result.ok ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-red-800 font-bold">
              {result.error}
            </div>
          ) : null}

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded font-bold text-center">
              Go to Services
            </Link>
            <Link to="/contact" className="bg-white border border-slate-200 hover:border-slate-300 text-slate-900 px-8 py-4 rounded font-bold text-center">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentSuccess;

