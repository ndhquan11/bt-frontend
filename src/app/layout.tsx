import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Badminton Teamup - Ứng dụng tổ chức đội bóng và trận đấu cầu lông",
  description: "Tham gia và tổ chức các đội cầu lông, tìm kiếm trận đấu và kết nối với cộng đồng người chơi cầu lông",
  keywords: ["cầu lông", "badminton", "đội nhóm", "trận đấu", "thể thao"],
  authors: [{ name: "Badminton Teamup Team" }],
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>{children}</body>
    </html>
  )
}
