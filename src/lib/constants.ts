export const APP_CONFIG = {
  name: 'Badminton Teamup',
  description: 'Ứng dụng tổ chức đội bóng và trận đấu cầu lông',
  version: '1.0.0',
} as const

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000',
  timeout: 30000,
} as const

export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  dashboard: '/teams', // redirect to teams as default dashboard
  teams: '/teams',
  matches: '/matches',
  profile: '/profile',
} as const

export const STORAGE_KEYS = {
  authToken: 'auth_token',
  user: 'user_data',
  theme: 'theme',
} as const

export const VALIDATION = {
  email: {
    minLength: 5,
    maxLength: 255,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
  password: {
    minLength: 8,
    maxLength: 255,
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
  },
  name: {
    minLength: 2,
    maxLength: 100,
  },
  phone: {
    pattern: /^[0-9]{10,11}$/,
  },
} as const

export const PAGINATION = {
  defaultPageSize: 10,
  maxPageSize: 100,
} as const
