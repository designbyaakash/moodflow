import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import './globals.css'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ConvexClientProvider } from "@/components/providers/convex-provider";


const inter = Inter({subsets:['latin']})

export const metadata: Metadata = {
  title: 'MoodFlow',
  description: 'Where Technology Meets Health',
  icons: {
    icon: [
      {
        media: "(prefer-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
    ]
  }
}

export default function RootLayout({
  children,
}:{
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="MoodFlow-Theme-2"
          >
            <Toaster position="bottom-center" />
            {children}
          </ThemeProvider>
          </ConvexClientProvider>

      </body>

    </html>
  )
}