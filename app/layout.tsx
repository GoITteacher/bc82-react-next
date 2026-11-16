import AppHeader from "@/components/AppHeader/AppHeader";

import "./globals.css";
import styles from "./layout.module.css";
import TanStackProvider from "@/components/TanStackProvider";
import { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";

export const metadata: Metadata = {
  title: "Rozetka",
  description:
    "Browse curated categories, inspect detailed descriptions, and learn how TanStack Query keeps everything snappy.",
};

const montserratFont = Montserrat({
  variable: "--montserrat-font",
  subsets: ["cyrillic", "latin"],
  weight: ["500", "600", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserratFont.variable}>
        <TanStackProvider>
          <div className={styles.shell}>
            <AppHeader />
            <main className={styles.content}>{children}</main>
          </div>
        </TanStackProvider>
      </body>
    </html>
  );
}
