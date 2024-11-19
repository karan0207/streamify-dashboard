import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/global/sidebar";
import Header from "@/components/global/header";
import { ThemeProvider } from "next-themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap", // Ensures text visibility during font load
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Streamify Dashboard",
  description: "Your one-stop analytics platform for music streaming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* Header and Sidebar could be conditionally rendered based on layout needs */}
          <Header />
          <div className="flex h-screen border-collapse overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
