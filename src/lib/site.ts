export const WHATSAPP_NUMBER = "5584987970076";
export const WHATSAPP_DISPLAY = "(84) 98797-0076";
export const INSTAGRAM_URL = "https://www.instagram.com/v.torresconstrutora";
export const ADDRESS = "Rua Olinto Meira, 1018, Alecrim, Natal/RN, CEP 59030-180";
export const MAPS_QUERY = encodeURIComponent("Rua Olinto Meira, 1018, Alecrim, Natal, RN, 59030-180");

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const DEFAULT_MESSAGE = "Olá, vim pelo site da V Torres e quero pedir um orçamento.";
