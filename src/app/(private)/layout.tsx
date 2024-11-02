"use client";

import localFont from "next/font/local";
import "../globals.css";
import { useRouter } from "next/navigation";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <button type="button" onClick={() => router.push('/admit-card')}>Admit Card Page</button>
        <button type="button" onClick={() => router.push('/dashboard')}>Dashboard Page</button>
        <button type="button" onClick={() => router.push('/login')}>Login Page</button>
        {children}
      </body>
    </html>
  );
}
