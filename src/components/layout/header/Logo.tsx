import Link from "next/link"
import { ROUTES } from "@/lib/constants"

export function Logo() {
  return (
    <Link href={ROUTES.home} className="flex items-center space-x-3 group">
      <img
        src="/favicon.ico"
        alt="Badminton Teamup Logo"
        className="w-8 h-8 rounded-lg shadow"
        style={{ imageRendering: 'auto' }}
      />
      <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-blue-800 transition-all duration-200">
        Badminton Teamup
      </span>
    </Link>
  )
}
