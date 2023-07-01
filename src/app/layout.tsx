import "./globals.css";
import { Work_Sans } from "next/font/google";

const font = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "POLABROS",
  description:
    "Two wild and crazy Polacek brothers building web apps together.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body className="bg-[darkblue]">{children}</body>
    </html>
  );
}
