export function buildWhatsappLink(whatsappNumber: string, message?: string) {
  const base = `https://wa.me/${whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}