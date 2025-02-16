import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Lora } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "700"], // สามารถเพิ่มน้ำหนักที่ต้องการได้
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"], // สามารถเพิ่มน้ำหนักที่ต้องการได้
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
