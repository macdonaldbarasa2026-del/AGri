const kes = new Intl.NumberFormat("en-KE", {
  style: "currency",
  currency: "KES",
  maximumFractionDigits: 0,
});

export function formatKes(amount: number): string {
  return kes.format(amount);
}

export function formatPhone(msisdn: string): string {
  const digits = msisdn.replace(/\D/g, "");
  if (digits.startsWith("254") && digits.length === 12) {
    return `+254 ${digits.slice(3, 6)} ${digits.slice(6, 9)} ${digits.slice(9)}`;
  }
  return msisdn;
}
