import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { store } from "@/app/store";
// import { Provider } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumen",
  description: "Healthcare app for the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
