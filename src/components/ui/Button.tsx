import type { ReactNode, ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg"
  children: ReactNode
}

export function Button({ className = "", variant = "default", size = "default", children, ...props }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95"

  const variantClasses = {
    default:
      "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl focus-visible:ring-blue-500",
    destructive:
      "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg hover:from-red-700 hover:to-red-800 hover:shadow-xl focus-visible:ring-red-500",
    outline:
      "border-2 border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-50 hover:border-gray-300 focus-visible:ring-gray-500",
    secondary: "bg-gray-100 text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:ring-gray-500",
    ghost: "text-gray-700 hover:bg-gray-100 hover:text-gray-900",
    link: "text-blue-600 underline-offset-4 hover:underline hover:text-blue-700",
  }

  const sizeClasses = {
    default: "h-11 px-6 py-3",
    sm: "h-9 px-4 py-2 text-xs",
    lg: "h-12 px-8 py-3 text-base",
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
