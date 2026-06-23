import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jayanth R | Portfolio",
  description: "Portfolio website for Jayanth R, AI and ML Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
