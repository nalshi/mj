import { Footer } from '@/components/Blocks/Footer';
import { Navbar } from "@/components/navbar";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  applicationName: "نالش",
  title: {
    default: "نالش | منصة إنشاء متجر إلكتروني وإدارته",
    template: "%s | نالش",
  },
  description:
    "أنشئ متجرك الإلكتروني مع نالش عبر واجهة خفيفة وسريعة الاستخدام. أضف المنتجات، نظّم الأقسام، خصّص تصميم المتجر، وتابع الطلبات من لوحة واحدة.",
  keywords: [
    "إنشاء متجر إلكتروني",
    "منصة متاجر إلكترونية",
    "إدارة متجر إلكتروني",
    "إدارة المنتجات والطلبات",
    "منصة متجر إلكتروني خفيفة وسريعة الاستخدام",
    "نالش",
    "Nalsh",
  ],
  creator: "نالش",
  icons: {
    icon: "/nalsh-mark-light.svg",
  },
  openGraph: {
    type: "website",
    locale: "ar_YE",
    siteName: "نالش",
    title: "نالش | منصة إنشاء متجر إلكتروني وإدارته",
    description:
      "أنشئ متجرك الإلكتروني مع نالش عبر واجهة خفيفة وسريعة الاستخدام، وأدر المنتجات والأقسام والطلبات من لوحة واحدة.",
  },
  twitter: {
    card: "summary",
    title: "نالش | منصة إنشاء متجر إلكتروني وإدارته",
    description:
      "أنشئ متجرك الإلكتروني مع نالش عبر واجهة خفيفة وسريعة الاستخدام، وأدر المنتجات والأقسام والطلبات من لوحة واحدة.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cn("font-sans", cairo.variable)}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
