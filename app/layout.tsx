import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "What Did I Actually Agree To?",
  description:
    "An interactive consent learning experience that helps people understand modern data permissions through exploration."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
