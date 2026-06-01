import type { Metadata } from "next";
import localFont from "next/font/local";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import { AppShell } from "@/components/layout";
import { ThemeProvider } from "@/components/theme";
import { ThemeScript } from "./theme-script";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const sans = localFont({
  src: [
    {
      path: "../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/satoshi/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});

const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? "https://donaldedinam.me"),
  title: {
    template: "%s | Donald Edinam",
    default: "Donald Edinam | Frontend Engineer",
  },
  description: "A frontend engineer who treats interfaces as systems, not screens. Focused on design systems, architecture, and longevity.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Donald Edinam",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@0xLynuxx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ThemeScript />
        <Analytics />
      </head>
      <body
        className={`${sans.variable} ${serif.variable} ${mono.variable} antialiased`}
      >
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
