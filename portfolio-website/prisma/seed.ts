import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../lib/auth'

const prisma = new PrismaClient()

async function main() {
  console.log('Start seeding...')

  // Create admin user
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@example.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123'
  const adminName = process.env.ADMIN_NAME || 'Admin User'

  const hashedPassword = await hashPassword(adminPassword)

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: hashedPassword,
      name: adminName,
      role: 'admin',
    },
  })

  console.log(`Created admin user: ${admin.email}`)

  // Create sample blog posts
  const samplePosts = [
    {
      title: 'Getting Started with Next.js 14',
      content: `# Getting Started with Next.js 14

Next.js 14 introduces several exciting features that make building web applications even more powerful and developer-friendly. In this post, we'll explore the key improvements and how to get started.

## What's New in Next.js 14

### App Router Stability
The App Router is now stable and ready for production use. It provides:
- Better performance through React Server Components
- Improved developer experience with file-based routing
- Enhanced data fetching capabilities

### Turbopack (Alpha)
Next.js 14 includes Turbopack in alpha, which provides:
- 53% faster local development
- 94% faster initial compile times
- Incremental bundling for better performance

## Getting Started

To create a new Next.js 14 project:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Key Features to Explore

1. **Server Components**: Write components that render on the server
2. **Streaming**: Improve perceived performance with React Suspense
3. **Static Generation**: Pre-render pages at build time
4. **API Routes**: Build full-stack applications

Next.js 14 continues to push the boundaries of what's possible with React and web development. Give it a try in your next project!`,
      excerpt: 'Learn the latest features and improvements in Next.js 14, including the stable App Router and Turbopack alpha.',
      slug: 'getting-started-nextjs-14',
      published: true,
      featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      tags: 'nextjs,react,javascript,web-development',
      seoTitle: 'Getting Started with Next.js 14 - Complete Guide',
      seoDescription: 'Learn the latest features and improvements in Next.js 14, including the stable App Router and Turbopack alpha. Get started today!',
      authorId: admin.id,
    },
    {
      title: 'Building Scalable React Applications',
      content: `# Building Scalable React Applications

As React applications grow in size and complexity, maintaining a clean and scalable architecture becomes crucial. Here are the best practices I've learned from building large-scale React applications.

## Project Structure

A well-organized project structure is the foundation of a scalable React application:

\`\`\`
src/
├── components/          # Reusable UI components
├── features/           # Feature-based modules
├── hooks/             # Custom React hooks
├── services/          # API and external services
├── utils/             # Utility functions
├── types/             # TypeScript type definitions
└── styles/            # Global styles and themes
\`\`\`

## Component Organization

### Feature-Based Structure
Organize components by features rather than types:

\`\`\`
features/
├── authentication/
│   ├── components/
│   ├── hooks/
│   ├── services/
│   └── types/
└── dashboard/
    ├── components/
    ├── hooks/
    ├── services/
    └── types/
\`\`\`

### Component Composition
Build complex UIs by composing smaller components:

\`\`\`jsx
// Good: Composable components
function UserProfile() {
  return (
    <Card>
      <UserAvatar />
      <UserInfo />
      <UserActions />
    </Card>
  )
}
\`\`\`

## State Management

### Choose the Right Tool
- **Local state**: useState, useReducer
- **Global state**: Context API for simple cases, Redux Toolkit for complex apps
- **Server state**: React Query or SWR

### State Patterns
\`\`\`jsx
// Custom hook for state logic
function useUserProfile(userId) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchUser(userId)
      .then(setUser)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [userId])

  return { user, loading, error }
}
\`\`\`

## Performance Optimization

### Memoization
\`\`\`jsx
import { memo, useMemo, useCallback } from 'react'

const ExpensiveComponent = memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => 
    data.map(item => ({ ...item, processed: true })), 
    [data]
  )

  const handleUpdate = useCallback((id) => {
    onUpdate(id)
  }, [onUpdate])

  return <div>{/* component JSX */}</div>
})
\`\`\`

### Code Splitting
\`\`\`jsx
import { lazy, Suspense } from 'react'

const LazyComponent = lazy(() => import('./LazyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  )
}
\`\`\`

## Testing Strategy

### Testing Pyramid
1. **Unit tests**: Test individual components and functions
2. **Integration tests**: Test component interactions
3. **E2E tests**: Test complete user workflows

### Testing Tools
- **Jest**: JavaScript testing framework
- **React Testing Library**: Component testing utilities
- **Cypress**: End-to-end testing

## Conclusion

Building scalable React applications requires thoughtful architecture, proper state management, and performance optimization. Start with these principles and adapt them to your specific needs.

Remember: premature optimization is the root of all evil. Focus on writing clean, maintainable code first, then optimize as needed.`,
      excerpt: 'Best practices for structuring large React applications with proper component organization and state management.',
      slug: 'building-scalable-react-apps',
      published: true,
      featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      tags: 'react,javascript,architecture,best-practices',
      seoTitle: 'Building Scalable React Applications - Best Practices Guide',
      seoDescription: 'Learn best practices for structuring large React applications with proper component organization, state management, and performance optimization.',
      authorId: admin.id,
    },
  ]

  for (const post of samplePosts) {
    const blog = await prisma.blog.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    })
    console.log(`Created blog post: ${blog.title}`)
  }

  // Create sample events
  const sampleEvents = [
    {
      title: 'Building Modern Web Applications with Next.js',
      description: 'A comprehensive workshop on creating performant and SEO-friendly web applications using Next.js 14.',
      date: new Date('2024-02-15T14:00:00.000Z'),
      location: 'Tech Conference Center, San Francisco',
      link: 'https://example.com/events/nextjs-workshop',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
      published: true,
    },
    {
      title: 'The Future of Frontend Development',
      description: 'Keynote presentation exploring emerging trends and technologies shaping the future of frontend development.',
      date: new Date('2024-03-02T10:00:00.000Z'),
      location: 'DevCon 2024, Austin',
      link: 'https://example.com/events/devcon-keynote',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop',
      published: true,
    },
  ]

  for (const event of sampleEvents) {
    const createdEvent = await prisma.event.create({
      data: event,
    })
    console.log(`Created event: ${createdEvent.title}`)
  }

  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })