import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google"
import { NuqsAdapter } from 'nuqs/adapters/next/app'
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";


const inter = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "CoDoc",
  description: "A collaborative document editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NuqsAdapter>
          <ConvexClientProvider>
            {children}
            <Toaster/>
          </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
