import type { Metadata } from "next";
import localFont from "next/font/local";
import "./css/globals.css";

const poppins = localFont({
  src: "./fonts/Poppins/Poppins-Regular.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CodeHersHK",
  description: "Empowering young girls in tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}`}>
        {children}
      </body>
    </html>
  );
}
