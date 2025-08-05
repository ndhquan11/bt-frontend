"use client"
import Link from "next/link"
import { useAuth } from "@/hooks/useAuth"
import { ROUTES } from "@/lib/constants"

export function Header() {
  const { user, logout, isAuthenticated } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
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
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <div className="hidden sm:flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-semibold">{user?.name?.charAt(0).toUpperCase()}</span>
                  </div>
                  <span className="text-gray-700 font-medium">Xin chào, {user?.name}</span>
                </div>
                <Link
                  href={ROUTES.dashboard}
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium"
                >
                  Dashboard
                </Link>
                <button
                  onClick={logout}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  Đăng xuất
                </button>
              </div>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
