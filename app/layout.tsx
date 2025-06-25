import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // Primary metadata
  title: {
    default: "Muhammad Fadhilah Mulyana — Software Engineer",
    template: "%s | Muhammad Fadhilah Mulyana"
  },
  description: "Portfolio of Muhammad Fadhilah Mulyana, Software Engineer specializing in React, Next.js, and modern web architectures.",

  // Canonical URL
  alternates: {
    canonical: "https://fadilnatakusumah.com",
  },

  // Viewport & charset
  viewport: { width: 'device-width', initialScale: 1 },
  // charset: 'utf-8',

  // Icons & manifest
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",

  // Theme color for browser UI
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],

  // SEO keywords
  keywords: [
    "Fadil Natakusumah",
    "Software Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Portfolio",
    "JavaScript",
    "TypeScript"
  ],

  // Author and publisher
  authors: [
    { name: "Muhammad Fadhilah Mulyana", url: "https://fadilnatakusumah.com" }
  ],
  publisher: "Muhammad Fadhilah Mulyana",

  // Open Graph for rich link previews
  openGraph: {
    title: "Muhammad Fadhilah Mulyana — Software Engineer",
    description: "Explore projects, resume, and contact information of Muhammad Fadhilah Mulyana, a Software Engineer.",
    url: "https://fadilnatakusumah.com",
    siteName: "Muhammad Fadhilah Mulyana - Portfolio",
    images: [
      {
        url: "https://fadilnatakusumah.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Fadhilah Mulyana - Portfolio"
      }
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Fadhilah Mulyana — Software Engineer",
    description: "Portfolio of Muhammad Fadhilah Mulyana: React, Next.js & modern web architecture.",
    // creator: "@your_twitter_handle",
    images: ["https://fadilnatakusumah.com/twitter-image.jpg"]
  },

  // Robots directives (for pages that inherit this layout)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};



// export const metadata: Metadata = {
//   title: "Muhammad Fadhilah Mulyana",
//   description: "Portfolio of Muhammad Fadhilah Mulyana, Software Engineer specializing in React, Next.js, and modern web architectures.",
//   alternates: {
//     canonical: "https://fadilnatakusumah.com/"
//   },
//   openGraph: {
//     type: 'website',
//     url: 'https://fadilnatakusumah.com/',
//     title: 'Muhammad Fadhilah Mulyana',
//     description: 'Portfolio of Muhammad Fadhilah Mulyana, Software Engineer specializing in React, Next.js, and modern web architectures.',
//     images: [
//       {
//         url: 'https://fadilnatakusumah.com/images/meta-tags.png',
//         width: 1200,
//         height: 630,
//         alt: 'Preview image for Muhammad Fadhilah Mulyana'
//       }
//     ]
//   },
//   twitter: {
//     card: 'summary_large_image',
//     // url: 'https://fadilnatakusumah.com/',
//     title: 'Muhammad Fadhilah Mulyana',
//     description: 'Portfolio of Muhammad Fadhilah Mulyana, Software Engineer specializing in React, Next.js, and modern web architectures.',
//     images: ['https://fadilnatakusumah.com/images/meta-tags.png']
//   }
// }
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
