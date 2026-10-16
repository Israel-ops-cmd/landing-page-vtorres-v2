import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "V Torres Construtora e Engenharia | Construção e reforma em Natal - RN",
  description:
    "Construtora em Natal - RN para prefeituras, empresas e famílias. Obras e reformas com orçamento fechado, prazo no contrato e engenheiro do início ao fim. Peça seu orçamento no WhatsApp.",
  keywords: [
    "construtora em Natal",
    "construtora Natal RN",
    "obras públicas RN",
    "reforma em Natal",
    "V Torres Construtora",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "V Torres Construtora e Engenharia | Natal - RN",
    description: "Sua obra pronta no prazo, sem surpresa no orçamento. Construção e reforma em Natal e no interior do RN.",
    siteName: "V Torres Construtora",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
