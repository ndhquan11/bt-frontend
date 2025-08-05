import { useState, useEffect } from 'react'
import { User, AuthResponse, LoginCredentials, RegisterData } from '@/types'
import { apiClient } from '@/lib/api'
import { STORAGE_KEYS } from '@/lib/constants'

interface UseAuthReturn {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (credentials: LoginCredentials) => Promise<void>
  register: (data: RegisterData) => Promise<void>
  logout: () => void
  refreshUser: () => Promise<void>
}

export function useAuth(): UseAuthReturn {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const isAuthenticated = !!user

  // Initialize auth state
  useEffect(() => {
    const initAuth = async () => {
      try {
        const token = localStorage.getItem(STORAGE_KEYS.authToken)
        const userData = localStorage.getItem(STORAGE_KEYS.user)

        if (token && userData) {
          setUser(JSON.parse(userData))
          // Optionally verify token with server
          try {
            await refreshUser()
          } catch {
            // If refresh fails, clear stored data
            logout()
          }
        }
      } catch (error) {
        console.error('Auth initialization failed:', error)
        logout()
      } finally {
        setIsLoading(false)
      }
    }

    initAuth()
  }, []) // eslint-disable-next-line react-hooks/exhaustive-deps

  const login = async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true)
      const response = await apiClient.post<AuthResponse>('/auth/login', credentials)

      // Backend trả về access_token thay vì token
      const token = response.access_token || response.token

      localStorage.setItem(STORAGE_KEYS.authToken, token)
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(response.user))
      setUser(response.user)
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (data: RegisterData) => {
    try {
      setIsLoading(true)
      const response = await apiClient.post<AuthResponse>('/auth/register', data)

      // Backend trả về access_token thay vì token
      const token = response.access_token || response.token

      localStorage.setItem(STORAGE_KEYS.authToken, token)
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(response.user))
      setUser(response.user)
    } catch (error) {
      console.error('Registration failed:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem(STORAGE_KEYS.authToken)
    localStorage.removeItem(STORAGE_KEYS.user)
    setUser(null)
  }

  const refreshUser = async () => {
    try {
      const response = await apiClient.get<User>('/auth/me')
      setUser(response)
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(response))
    } catch (error) {
      console.error('Failed to refresh user:', error)
      logout()
      throw error
    }
  }

  return {
    user,
    isLoading,
    isAuthenticated,
    login,
    register,
    logout,
    refreshUser,
  }
}
