export function cn(...inputs: string[]) {
  return inputs.filter(Boolean).join(' ')
}

export function formatDate(date: Date | string) {
  return new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}

export function formatDateTime(date: Date | string) {
  return new Intl.DateTimeFormat("vi-VN", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(date))
}

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}
