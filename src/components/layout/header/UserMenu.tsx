import { Dropdown, DropdownItem, DropdownDivider } from "@/components/ui/Dropdown"
import { ROUTES } from "@/lib/constants"

interface UserMenuProps {
  user: { name?: string; email?: string } | null;
  logout: () => void;
}

export function UserMenu({ user, logout }: UserMenuProps) {
  return (
    <Dropdown
      trigger={
        <div className="flex items-center space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg px-3 py-2 transition-all duration-200">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-sm font-semibold">
              {user?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div className="hidden sm:flex flex-col items-start">
            <span className="text-gray-700 font-medium text-sm">
              {user?.name}
            </span>
            <span className="text-gray-500 text-xs">
              {user?.email}
            </span>
          </div>
          <svg
            className="w-4 h-4 text-gray-400 transition-transform duration-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      }
    >
      <DropdownItem onClick={() => window.location.href = ROUTES.profile}>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <span>Hồ sơ cá nhân</span>
      </DropdownItem>
      <DropdownDivider />
      <DropdownItem onClick={logout} variant="danger">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
        </svg>
        <span>Đăng xuất</span>
      </DropdownItem>
    </Dropdown>
  )
}
