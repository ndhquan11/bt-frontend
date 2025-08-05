import React from 'react'

interface PasswordStrengthIndicatorProps {
  password: string
}

interface PasswordStrength {
  score: number
  label: string
  color: string
  suggestions: string[]
}

export function PasswordStrengthIndicator({ password }: PasswordStrengthIndicatorProps) {
  const getPasswordStrength = (password: string): PasswordStrength => {
    if (!password) {
      return { score: 0, label: '', color: '', suggestions: [] }
    }

    let score = 0
    const suggestions: string[] = []

    // Length check
    if (password.length >= 8) {
      score += 1
    } else {
      suggestions.push('Sử dụng ít nhất 8 ký tự')
    }

    // Lowercase check
    if (/[a-z]/.test(password)) {
      score += 1
    } else {
      suggestions.push('Thêm chữ cái thường')
    }

    // Uppercase check
    if (/[A-Z]/.test(password)) {
      score += 1
    } else {
      suggestions.push('Thêm chữ cái hoa')
    }

    // Number check
    if (/\d/.test(password)) {
      score += 1
    } else {
      suggestions.push('Thêm số')
    }

    // Special character check
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      score += 1
    } else {
      suggestions.push('Thêm ký tự đặc biệt (!@#$%^&*)')
    }

    const strengthLevels = [
      { label: 'Rất yếu', color: 'bg-red-500' },
      { label: 'Yếu', color: 'bg-red-400' },
      { label: 'Trung bình', color: 'bg-yellow-500' },
      { label: 'Mạnh', color: 'bg-blue-500' },
      { label: 'Rất mạnh', color: 'bg-green-500' },
    ]

    return {
      score,
      ...strengthLevels[Math.min(score, 4)],
      suggestions,
    }
  }

  const strength = getPasswordStrength(password)

  if (!password) return null

  return (
    <div className="mt-2 space-y-2">
      <div className="flex items-center gap-2">
        <div className="flex-1 bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-300 ${strength.color}`}
            style={{ width: `${(strength.score / 5) * 100}%` }}
          />
        </div>
        <span className="text-sm font-medium text-gray-600">{strength.label}</span>
      </div>

      {strength.suggestions.length > 0 && (
        <div className="text-xs text-gray-500">
          <p className="mb-1">Để tăng độ bảo mật:</p>
          <ul className="list-disc list-inside space-y-0.5">
            {strength.suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
