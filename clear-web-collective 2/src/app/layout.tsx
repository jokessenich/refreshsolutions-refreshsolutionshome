import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clear Web Collective — Modern Websites for Growing Businesses",
  description:
    "We rebuild outdated websites into clean, modern, high-converting sites. Simple process. Beautiful results. Starting at $3,000.",
  openGraph: {
    title: "Clear Web Collective — Modern Websites for Growing Businesses",
    description:
      "We rebuild outdated websites into clean, modern, high-converting sites. Simple process. Beautiful results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300;1,9..40,400&family=DM+Serif+Display&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body text-[17px] leading-[1.7]">{children}</body>
    </html>
  );
}
