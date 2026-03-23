export type PaystackPaymentType =
  | "FULL_SECURITY_BOOKING"
  | "CONSULTATION_FEE"
  | "DEPOSIT"
  | "GPS_TRACKER_PURCHASE"
  | "ALARM_SYSTEM_PURCHASE";

export type PaystackPaymentTypeConfig = {
  key: PaystackPaymentType;
  label: string;
  description: string;
  /**
   * Amount in NGN (whole naira). Backend converts to kobo.
   * Update these business values when you have your final pricing.
   */
  amountNGN: number;
  currency: "NGN";
  /**
   * Metadata fields added to Paystack transaction.
   */
  productOrServiceName: string;
  /**
   * Optional: where this payment button is shown in the frontend.
   */
  routeContext: {
    path: string;
    pageLabel: string;
  };
};

export const PAYSTACK_PAYMENT_TYPES: Record<PaystackPaymentType, PaystackPaymentTypeConfig> = {
  FULL_SECURITY_BOOKING: {
    key: "FULL_SECURITY_BOOKING",
    label: "Full Security Service Booking",
    description: "Book full security coverage with an initial Paystack payment.",
    // Placeholder pricing (NGN). Replace with your actual business amounts.
    amountNGN: 500000,
    currency: "NGN",
    productOrServiceName: "Full Security Service Booking",
    routeContext: { path: "/services", pageLabel: "Services" },
  },
  CONSULTATION_FEE: {
    key: "CONSULTATION_FEE",
    label: "Consultation Fee",
    description: "Pay for a security consultation and risk assessment session.",
    // Placeholder pricing (NGN). Replace with your actual business amounts.
    amountNGN: 50000,
    currency: "NGN",
    productOrServiceName: "Security Consultation Fee",
    routeContext: { path: "/services", pageLabel: "Services" },
  },
  DEPOSIT: {
    key: "DEPOSIT",
    label: "Deposit",
    description: "Pay a deposit to confirm your request and reserve resources.",
    // Placeholder pricing (NGN). Replace with your actual business amounts.
    amountNGN: 200000,
    currency: "NGN",
    productOrServiceName: "Security Service Deposit",
    routeContext: { path: "/contact", pageLabel: "Contact" },
  },
  GPS_TRACKER_PURCHASE: {
    key: "GPS_TRACKER_PURCHASE",
    label: "GPS Tracker Purchase",
    description: "Purchase the GPS tracker product via Paystack checkout.",
    // Placeholder pricing (NGN). Replace with your actual business amounts.
    amountNGN: 150000,
    currency: "NGN",
    productOrServiceName: "2-in-1 GPS Tracker",
    routeContext: { path: "/products", pageLabel: "Products" },
  },
  ALARM_SYSTEM_PURCHASE: {
    key: "ALARM_SYSTEM_PURCHASE",
    label: "Alarm System Purchase",
    description: "Purchase the alarm system product via Paystack checkout.",
    // Placeholder pricing (NGN). Replace with your actual business amounts.
    amountNGN: 120000,
    currency: "NGN",
    productOrServiceName: "2-in-1 Car Alarm System",
    routeContext: { path: "/products", pageLabel: "Products" },
  },
};

export function toKobo(amountNGN: number): number {
  // Paystack amounts are in kobo (integer).
  return Math.round(amountNGN * 100);
}

export function isPaystackPaymentType(value: unknown): value is PaystackPaymentType {
  if (typeof value !== "string") return false;
  return value in PAYSTACK_PAYMENT_TYPES;
}

export function getPaystackPaymentTypeConfig(
  paymentType: PaystackPaymentType
): PaystackPaymentTypeConfig {
  return PAYSTACK_PAYMENT_TYPES[paymentType];
}

