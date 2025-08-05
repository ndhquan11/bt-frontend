import type { ReactNode } from "react"
import "../globals.css"

interface AuthLayoutProps {
  children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">{children}</div>
}
