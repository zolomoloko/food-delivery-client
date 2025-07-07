
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import FoodCartContextProvider, { FoodCartContext } from "@/providers/FoodCart";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Food delivery",
  description: "Zolo's food delivery app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interFont.variable} antialiased`}>
        <FoodCartContextProvider>
          <main>{children}</main>
        </FoodCartContextProvider>
        <Toaster />
      </body>
    </html>
  );
}
