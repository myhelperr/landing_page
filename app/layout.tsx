import type { Metadata, Viewport } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const nunito_sans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Helperr - On-Demand Task Hailing",
  description:
    "Helperr is an on-demand task-hailing platform that connects people who need immediate help with nearby helpers ready to lend a hand. From quick roadside assistance to heavy lifting, snow clearing to furniture assembly, Helperr makes getting help as easy as calling a ride. Post your task, get matched instantly, and live your life while we handle the boring stuff.",
  metadataBase: new URL("https://myhelperr.com"),
  keywords: [
    "Helperr",
    "task hailing",
    "on-demand help",
    "local services",
    "Helperr",
    "task help",
    "on-demand assistance",
    "instant help",
    "local helpers",
    "task marketplace",
    "assistance",
    "extra hand",
  ],
  authors: [{ name: "Helperr", url: "https://myhelperr.com" }],
  creator: "Helperr",
  referrer: "origin-when-cross-origin",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://myhelperr.com/",
    siteName: "Helperr - On-Demand Task Hailing",
    title: "Helperr - On-Demand Task Hailing",
    description:
      "Helperr is an on-demand task-hailing platform that connects people who need immediate help with nearby helpers ready to lend a hand.",
    images: [
      {
        url: "https://res.cloudinary.com/dpesanzkk/image/upload/v1756018917/helperr-logo_rxpu6q.png",
        width: 1200,
        height: 630,
        alt: "Helperr - On-Demand Task Hailing",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#666600",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito_sans.variable} antialiased max-w-[90rem] mx-auto`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
