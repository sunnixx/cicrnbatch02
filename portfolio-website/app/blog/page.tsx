import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight, Search, Tag } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read my latest thoughts on web development, programming, and technology.',
  openGraph: {
    title: 'Blog | Your Portfolio',
    description: 'Read my latest thoughts on web development, programming, and technology.',
  }
}

export default async function BlogPage() {
  // In a real application, this would fetch from your database
  const posts = [
    {
      id: '1',
      title: 'Getting Started with Next.js 14',
      excerpt: 'Learn the latest features and improvements in Next.js 14, including the new app directory structure and server components.',
      content: '',
      slug: 'getting-started-nextjs-14',
      published: true,
      featuredImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop',
      tags: 'nextjs,react,javascript',
      createdAt: '2024-01-15T10:00:00.000Z',
      updatedAt: '2024-01-15T10:00:00.000Z',
      author: {
        name: 'Your Name',
        id: '1'
      }
    },
    {
      id: '2',
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices for structuring large React applications with proper component organization and state management.',
      content: '',
      slug: 'building-scalable-react-apps',
      published: true,
      featuredImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      tags: 'react,javascript,architecture',
      createdAt: '2024-01-10T10:00:00.000Z',
      updatedAt: '2024-01-10T10:00:00.000Z',
      author: {
        name: 'Your Name',
        id: '1'
      }
    },
    {
      id: '3',
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging trends and technologies that are shaping the future of web development in 2024 and beyond.',
      content: '',
      slug: 'future-of-web-development',
      published: true,
      featuredImage: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop',
      tags: 'web-development,future,trends',
      createdAt: '2024-01-05T10:00:00.000Z',
      updatedAt: '2024-01-05T10:00:00.000Z',
      author: {
        name: 'Your Name',
        id: '1'
      }
    },
    {
      id: '4',
      title: 'TypeScript Tips and Tricks',
      excerpt: 'Advanced TypeScript techniques that will make your code more robust and maintainable.',
      content: '',
      slug: 'typescript-tips-tricks',
      published: true,
      featuredImage: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
      tags: 'typescript,javascript,tips',
      createdAt: '2024-01-01T10:00:00.000Z',
      updatedAt: '2024-01-01T10:00:00.000Z',
      author: {
        name: 'Your Name',
        id: '1'
      }
    },
    {
      id: '5',
      title: 'CSS Grid vs Flexbox: When to Use Each',
      excerpt: 'A comprehensive guide to understanding when to use CSS Grid and when to use Flexbox for your layouts.',
      content: '',
      slug: 'css-grid-vs-flexbox',
      published: true,
      featuredImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
      tags: 'css,flexbox,grid',
      createdAt: '2023-12-28T10:00:00.000Z',
      updatedAt: '2023-12-28T10:00:00.000Z',
      author: {
        name: 'Your Name',
        id: '1'
      }
    },
    {
      id: '6',
      title: 'Building a REST API with Node.js',
      excerpt: 'Step-by-step guide to creating a robust REST API using Node.js, Express, and modern best practices.',
      content: '',
      slug: 'building-rest-api-nodejs',
      published: true,
      featuredImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
      tags: 'nodejs,api,backend',
      createdAt: '2023-12-25T10:00:00.000Z',
      updatedAt: '2023-12-25T10:00:00.000Z',
      author: {
        name: 'Your Name',
        id: '1'
      }
    }
  ]

  // Get all unique tags
  const allTags = Array.from(
    new Set(
      posts
        .filter(post => post.published)
        .flatMap(post => post.tags ? post.tags.split(',') : [])
        .filter(tag => tag.trim())
    )
  ).sort()

  const publishedPosts = posts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights on web development, programming, 
              and the ever-evolving world of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search posts..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-sm font-medium text-gray-700 mr-2">Filter by tag:</span>
              <button className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                All
              </button>
              {allTags.slice(0, 6).map((tag) => (
                <button
                  key={tag}
                  className="bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 px-3 py-1 rounded-full text-sm font-medium transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          {publishedPosts.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Post</h2>
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-w-16 aspect-h-9 lg:aspect-h-full">
                    <img
                      src={publishedPosts[0].featuredImage}
                      alt={publishedPosts[0].title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(publishedPosts[0].createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                      <Link
                        href={`/blog/${publishedPosts[0].slug}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {publishedPosts[0].title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {publishedPosts[0].excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {publishedPosts[0].tags && publishedPosts[0].tags.split(',').map((tag) => (
                        <span
                          key={tag}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${publishedPosts[0].slug}`}
                      className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>
          )}

          {/* All Posts Grid */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">All Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publishedPosts.slice(1).map((post) => (
                <article key={post.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary-600 transition-colors"
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags && post.tags.split(',').slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
                        >
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20 bg-primary-600 rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Subscribe to my newsletter to get the latest posts delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-primary-300"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}