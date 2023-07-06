import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Prateek's Portfolio",
  description:
    "Prateek Agrawal's personal website, which currently serves as his portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito_sans.className}`}>{children}</body>
    </html>
  );
}
