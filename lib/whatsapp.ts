// Single source of truth for WhatsApp deep links.
export const WHATSAPP_NUMBER = "971549988811";

/**
 * Build a wa.me link with a pre-typed message.
 * @param message  the user-facing pre-typed text
 * @param ref      optional attribution (a page/project URL) appended on its own
 *                 line so the receiving agent sees where the lead came from
 * @param number   optional override; non-digits are stripped. Defaults to the company number.
 */
export function waHref(message: string, ref?: string, number?: string): string {
  const text = ref ? `${message}\n\n🔗 ${ref}` : message;
  const to = (number || WHATSAPP_NUMBER).replace(/[^0-9]/g, "") || WHATSAPP_NUMBER;
  return `https://wa.me/${to}?text=${encodeURIComponent(text)}`;
}
