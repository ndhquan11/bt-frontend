"use client"
import { useAuth } from "@/hooks/useAuth"
import { Logo, NavLinks, UserMenu, AuthButtons } from "./header/index"

export function Header() {
  const { user, logout, isAuthenticated } = useAuth()

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Logo />
            <NavLinks />
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <UserMenu user={user} logout={logout} />
            ) : (
              <AuthButtons />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
