import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "CEIBO Argentina",
  description:
    "Cambalache y guerra cognitiva. No streaming, televisión sin guita.",
  openGraph: {
    type: "website",
    url: "https://ceiboargentina.net",
    title: "CEIBO Argentina",
    description:
      "Cambalache y guerra cognitiva. No streaming, televisión sin guita.",
    images:
      "https://yt3.googleusercontent.com/FThA9lPhGGGjsklxafiR-nvkBt24-QEKpD7s6mZ9yjREqLaq2MLRa7GCCxO2rHnkkhOzGm9JdoA=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
  },
  twitter: {
    card: "summary_large_image",
    title: "CEIBO Argentina",
    description:
      "Cambalache y guerra cognitiva. No streaming, televisión sin guita.",
    images:
      "https://yt3.googleusercontent.com/FThA9lPhGGGjsklxafiR-nvkBt24-QEKpD7s6mZ9yjREqLaq2MLRa7GCCxO2rHnkkhOzGm9JdoA=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ overflowX: "hidden" }}
      >
        {children}
      </body>
    </html>
  );
}
