import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Mann Gaadi",
  description: "Register for the ride of your life",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-black">{children}</body>
    </html>
  );
}
