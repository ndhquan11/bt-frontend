import Link from "next/link"
import { ROUTES } from "@/lib/constants"

export function NavLinks() {
  return (
    <nav className="hidden md:flex items-center space-x-1">
      <Link
        href={ROUTES.teams}
        className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
      >
        Đội nhóm
      </Link>
      <Link
        href={ROUTES.matches}
        className="px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium"
      >
        Trận đấu
      </Link>
    </nav>
  )
}
