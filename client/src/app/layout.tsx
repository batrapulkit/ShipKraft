import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: "Shipkraft | Ship your AI app. For real.",
  description: "Turn any AI-generated React Native / Expo app into a real installable APK plus a shareable browser phone emulator link in minutes.",
  keywords: "ai, apps, react native, expo, apk, emulator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
