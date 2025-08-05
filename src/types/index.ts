export interface User {
  id: string
  email: string
  name: string
  role: UserRole
  avatar?: string
  phone?: string
  createdAt: Date
  updatedAt: Date
}

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
  MODERATOR = 'moderator'
}

export interface Team {
  id: string
  name: string
  description?: string
  avatar?: string
  members: TeamMember[]
  ownerId: string
  createdAt: Date
  updatedAt: Date
}

export interface TeamMember {
  id: string
  userId: string
  teamId: string
  role: TeamMemberRole
  joinedAt: Date
  user: User
}

export enum TeamMemberRole {
  OWNER = 'owner',
  ADMIN = 'admin',
  MEMBER = 'member'
}

export interface Match {
  id: string
  title: string
  description?: string
  date: Date
  location: string
  maxPlayers: number
  currentPlayers: number
  teamId: string
  creatorId: string
  status: MatchStatus
  players: MatchPlayer[]
  team: Team
  creator: User
  createdAt: Date
  updatedAt: Date
}

export interface MatchPlayer {
  id: string
  userId: string
  matchId: string
  joinedAt: Date
  user: User
}

export enum MatchStatus {
  UPCOMING = 'upcoming',
  ONGOING = 'ongoing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name: string
  phone?: string
}

export interface AuthResponse {
  user: User
  token?: string  // For backward compatibility
  access_token?: string  // Backend returns this
}
