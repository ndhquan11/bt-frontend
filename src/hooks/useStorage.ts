import { useState } from 'react'

interface UseLocalStorageReturn<T> {
  value: T | null
  setValue: (value: T | null) => void
  removeValue: () => void
}

export function useLocalStorage<T>(key: string, defaultValue?: T): UseLocalStorageReturn<T> {
  const [value, setValue] = useState<T | null>(() => {
    if (typeof window === 'undefined') {
      return defaultValue || null
    }

    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue || null
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return defaultValue || null
    }
  })

  const setStoredValue = (newValue: T | null) => {
    try {
      setValue(newValue)
      if (newValue === null) {
        localStorage.removeItem(key)
      } else {
        localStorage.setItem(key, JSON.stringify(newValue))
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  const removeValue = () => {
    try {
      setValue(null)
      localStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  }

  return {
    value,
    setValue: setStoredValue,
    removeValue,
  }
}

export function useSessionStorage<T>(key: string, defaultValue?: T): UseLocalStorageReturn<T> {
  const [value, setValue] = useState<T | null>(() => {
    if (typeof window === 'undefined') {
      return defaultValue || null
    }

    try {
      const item = sessionStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue || null
    } catch (error) {
      console.error(`Error reading sessionStorage key "${key}":`, error)
      return defaultValue || null
    }
  })

  const setStoredValue = (newValue: T | null) => {
    try {
      setValue(newValue)
      if (newValue === null) {
        sessionStorage.removeItem(key)
      } else {
        sessionStorage.setItem(key, JSON.stringify(newValue))
      }
    } catch (error) {
      console.error(`Error setting sessionStorage key "${key}":`, error)
    }
  }

  const removeValue = () => {
    try {
      setValue(null)
      sessionStorage.removeItem(key)
    } catch (error) {
      console.error(`Error removing sessionStorage key "${key}":`, error)
    }
  }

  return {
    value,
    setValue: setStoredValue,
    removeValue,
  }
}
