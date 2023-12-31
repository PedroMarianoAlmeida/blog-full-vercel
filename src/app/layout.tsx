import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";

import TopMenu from "@/components/TopMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vercel Blog",
  description: "Blog using full Vercel stack",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <main className="mx-auto max-w-5xl text-2xl">
            <TopMenu />
            {children}
          </main>
        </SessionProvider>
      </body>
    </html>
  );
}
