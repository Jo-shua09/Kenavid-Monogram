export const WHATSAPP_NUMBER = "2348034593315";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const waMessages = {
  general:
    "Hello Kenavid Monogram, I would like to make an inquiry about your services.",
  production:
    "Hello Kenavid Monogram, I would like to request a quote for custom embroidery production.",
  training:
    "Hello Kenavid Monogram, I am interested in enrolling in the Machine Operation Training. Please provide more details.",
  bulk:
    "Hello Kenavid Monogram, I would like to discuss a bulk order for custom monogramming.",
  digitization:
    "Hello Kenavid Monogram, I would like to have my logo professionally digitized for embroidery.",
};
