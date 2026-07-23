import type { Metadata } from "next";
import { headers } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteNav } from "../components/SiteChrome";
import { GlobalBackground } from "../components/GlobalBackground";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "mark7technologies.com";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const metadataBase = new URL(`${protocol}://${host}`);
  const title = "Mark7 Technologies — Software for Esports & Business Communication";
  const description = "Mark7 Technologies builds focused, purpose-built software products for esports broadcast automation and WhatsApp AI business communications.";

  return {
    metadataBase,
    title,
    description,
    icons: { 
      icon: "/favicon.png", 
      shortcut: "/favicon.png",
      apple: "/favicon.png"
    },
    openGraph: {
      title,
      description,
      type: "website",
      siteName: "Mark7 Technologies",
      images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Mark7 Technologies — Software for Esports & Business Communication" }],
    },
    twitter: { card: "summary_large_image", title, description, images: ["/og.png"] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GlobalBackground />
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
