import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Astudylab Practice",
  description: "A progressive workspace for real frontend practice.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
