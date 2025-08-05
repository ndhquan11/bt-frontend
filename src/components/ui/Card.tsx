import type { ReactNode } from "react"

interface CardProps {
  children: ReactNode
  className?: string
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      {children}
    </div>
  )
}

export function CardHeader({ children, className = "" }: CardProps) {
  return <div className={`flex flex-col space-y-2 p-8 pb-4 ${className}`}>{children}</div>
}

export function CardTitle({ children, className = "" }: CardProps) {
  return <h3 className={`text-2xl font-bold text-gray-900 ${className}`}>{children}</h3>
}

export function CardDescription({ children, className = "" }: CardProps) {
  return <p className={`text-gray-600 ${className}`}>{children}</p>
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`px-8 pb-8 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = "" }: CardProps) {
  return <div className={`flex items-center px-8 pb-8 ${className}`}>{children}</div>
}
