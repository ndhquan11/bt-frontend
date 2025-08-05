"use client"
import { useState, useRef, useEffect } from "react"

interface DropdownProps {
  trigger: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function Dropdown({ trigger, children, className = "" }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50">
          {children}
        </div>
      )}
    </div>
  )
}

interface DropdownItemProps {
  onClick?: () => void
  children: React.ReactNode
  className?: string
  variant?: "default" | "danger"
}

export function DropdownItem({
  onClick,
  children,
  className = "",
  variant = "default"
}: DropdownItemProps) {
  const baseStyles = "w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center space-x-2"
  const variantStyles = {
    default: "text-gray-700 hover:text-gray-900",
    danger: "text-red-600 hover:text-red-700 hover:bg-red-50"
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  )
}

interface DropdownDividerProps {
  className?: string
}

export function DropdownDivider({ className = "" }: DropdownDividerProps) {
  return <div className={`border-t border-gray-200 my-1 ${className}`} />
}
