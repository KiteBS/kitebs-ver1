import "./globals.css";
import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const font = Oswald({ subsets: ["latin"], weight: ["400"] });

export const runtime = "edge";

export const metadata: Metadata = {
  title: "Fly with Kite",
  description: "Amazing Savings on Your Fingers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <Providers>
        <html lang="en">
          <body className={font.className}>
            {children}
            <Analytics />
          </body>
          <Toaster />
        </html>
      </Providers>
    </ClerkProvider>
  );
}
