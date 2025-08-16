import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blink Press – Fast & Reliable News Updates",
  description:
    "Get the latest breaking news, in-depth analysis, and trending stories from around the world – all in one place, fast and reliable.",
  openGraph: {
    type: "website",
    url: "https://blinkpress.com",
    siteName: "Blink Press",
    title: "Blink Press – Fast & Reliable News Updates",
    description:
      "Get the latest breaking news, in-depth analysis, and trending stories from around the world – all in one place, fast and reliable.",
    images: [
      {
        url: "https://ucarecdn.com/838b47fb-1c23-4b7b-8d8a-4950600f1708/-/preview/1000x666/",
        width: 1200,
        height: 630,
        alt: "Blink Press Open Graph Image",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="py-20 sm:py-25 min-h-screen w-full  max-w-7xl mx-auto px-3 sm:px-5 relative">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
