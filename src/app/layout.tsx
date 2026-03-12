import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ReactQueryProvider } from "@/services/react-query-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: "Codelap",
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.className}`}>
      <body
        className="bg-gray-50 flex h-screen items-center justify-center"
        suppressHydrationWarning={true}
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
