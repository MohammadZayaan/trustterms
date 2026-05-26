import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustTerms",
  description:
    "Analyze Terms & Conditions and Privacy Policies instantly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}