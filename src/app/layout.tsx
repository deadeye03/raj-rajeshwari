import Providers from "@/components/progress-bar-provider";
import Footer from "@/section/Footer";
import Navbar from "@/section/Navbar";
import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

export const metadata: Metadata = {
  title: "Raj Rajeswari",
  description: "Raj Rajeswari Royal cloth collection",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`} suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main className="">

            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
