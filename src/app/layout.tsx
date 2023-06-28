import "./globals.css";

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
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
