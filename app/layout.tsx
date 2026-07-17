import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VALESO - B2B сотрудничество",
  description:
    "Двуязычный адаптивный сайт сотрудничества VALESO для оптовых клиентов, магазинов, дилеров и профессиональных партнеров.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
