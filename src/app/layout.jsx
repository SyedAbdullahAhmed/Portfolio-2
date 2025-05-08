import { JetBrains_Mono, Fira_Code, Poppins } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/ui/loading';

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['300','400', '500', '600', '700'],
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Abdullah | Software Engineer",
  description: "Portfolio website showcasing innovative software solutions and projects",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/favicon.svg",
        href: "/favicon.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/favicon.svg",
        href: "/favicon.svg",
      }
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
    other: {
      rel: "apple-touch-icon",
      url: "/favicon.svg",
    },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="preconnect" 
          href="https://fonts.googleapis.com" 
          crossOrigin="anonymous"
        />
        <link 
          rel="dns-prefetch" 
          href="https://fonts.googleapis.com"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon.svg"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/favicon-16x16.svg"
          sizes="16x16"
        />
        <meta name="theme-color" content="#18181B" />
      </head>
      <body
        className={`${jetbrainsMono.variable} ${firaCode.variable} ${poppins.variable} antialiased`}
      >
        <Suspense fallback={<LoadingSpinner />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
