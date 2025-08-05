# Badminton Teamup Frontend

A Next.js 15 application with App Router for managing badminton teams and matches.

## 🏗️ Project Architecture

The project is built following Next.js App Router architecture with best practices:

### 📁 Folder Structure

```
src/
├── app/                    # App Router (Next.js 13+)
│   ├── (auth)/            # Route group for authentication
│   │   ├── login/         # Login page
│   │   ├── register/      # Register page  
│   │   └── layout.tsx     # Dedicated layout for auth
│   ├── dashboard/         # User dashboard
│   ├── teams/             # Team management
│   ├── matches/           # Match management
│   ├── api/               # API routes (optional)
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── ui/                # Basic UI components
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Card.tsx
│   └── layout/            # Layout components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── MainLayout.tsx
├── hooks/                 # Custom React hooks
│   ├── useAuth.ts         # Authentication logic
│   └── useStorage.ts      # Local/Session storage
├── lib/                   # Utilities & configurations
│   ├── api.ts             # API client
│   ├── constants.ts       # App constants
│   └── utils.ts           # Utility functions
├── store/                 # State management (future)
└── types/                 # TypeScript type definitions
    └── index.ts
```

## 🚀 Main Features

### 1. **App Router (Next.js 15)**
- Server Components by default
- Nested layouts
- Route groups with `(auth)`
- File-based routing

### 2. **Authentication System**
- `useAuth` hook for state management
- JWT token storage
- Protected routes (middleware to be added)
- Login/Register with validation

### 3. **UI Components**
- Component-based design
- Tailwind CSS styling
- Responsive design
- Reusable UI elements

### 4. **API Integration**
- Centralized API client
- Automatic token handling
- Error management
- TypeScript support

### 5. **Type Safety**
- Full TypeScript support
- Strict type checking
- Interface definitions
- Path mapping with `@/`

## 🛠️ Technologies

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State**: React hooks + Context (future: Zustand/Redux)
- **HTTP Client**: Fetch API with custom wrapper
- **Authentication**: JWT tokens
- **Forms**: Native HTML5 + validation

## 📋 Scripts

```bash
# Development
pnpm dev          # Start dev server with Turbopack

# Production  
pnpm build        # Build production
pnpm start        # Start production server

# Code Quality
pnpm lint         # ESLint checking
```

## 🔧 Configuration

### Key Configurations
- **next.config.ts**: Performance optimizations
- **tailwind.config.js**: Tailwind 4 setup
- **tsconfig.json**: TypeScript with path mapping
- **eslint.config.mjs**: Code quality rules

## 🏭 Applied Best Practices

### 1. **File Organization**
- Feature-based folder structure
- Separation of concerns
- Consistent naming conventions

### 2. **Component Design**
- Single Responsibility Principle
- Reusable UI components
- Props interface definitions
- Error boundary handling

### 3. **State Management**
- Custom hooks for business logic
- Context for global state
- Local state for UI components

### 4. **Performance**
- Server Components default
- Image optimization
- Bundle optimization
- Lazy loading strategies

### 5. **Developer Experience**
- TypeScript strict mode
- ESLint + Prettier
- Path mapping (`@/`)
- Hot reload with Turbopack

## 🔐 Security

- XSS protection headers
- CSRF protection (future)
- Input validation
- Secure token storage
- Environment variable protection

## 📱 Responsive Design

- Mobile-first approach
- Tailwind breakpoints
- Flexible grid systems
- Touch-friendly interfaces

## 🧪 Testing Strategy (Future)

```
tests/
├── __tests__/           # Unit tests
├── e2e/                 # End-to-end tests
└── integration/         # Integration tests
```

## 🚀 Deployment

The project is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **Docker containers**
- **Traditional hosting**

## 📚 Learning Resources

- [Next.js 15 Documentation](https://nextjs.org/docs)
- [App Router Guide](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🔄 Future Enhancements

- [ ] State management with Zustand
- [ ] Testing suite (Jest + Testing Library)
- [ ] PWA capabilities
- [ ] Real-time features (Socket.io)
- [ ] Push notifications
- [ ] Offline support
- [ ] Performance monitoring
- [ ] Analytics integration

## 🤝 Contributing

1. Clone repository
2. Install dependencies: `pnpm install`
3. Start development: `pnpm dev`
4. Make changes and test
5. Submit pull request

---

**Note**: This is a perfect foundation architecture for scaling up the application in the future.
