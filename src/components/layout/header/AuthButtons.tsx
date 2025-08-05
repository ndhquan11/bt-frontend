import Link from "next/link"
import { ROUTES } from "@/lib/constants"

export function AuthButtons() {
  return (
    <div className="flex items-center space-x-3">
      <Link
        href={ROUTES.login}
        className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium"
      >
        Đăng nhập
      </Link>
      <Link
        href={ROUTES.register}
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
      >
        Đăng ký
      </Link>
    </div>
  )
}
