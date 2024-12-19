import type { Metadata } from "next";
import "./css/globals.css";
import "./fonts/fontfaces.css";

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
      <body>
        {children}
      </body>
    </html>
  );
}
