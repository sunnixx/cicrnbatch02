import Link from 'next/link'
import { ArrowRight, Code, Zap, Users, Calendar, BookOpen, ExternalLink } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function HomePage() {
  const features = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Fast Performance',
      description: 'Optimized applications with lightning-fast load times and smooth user experience.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'User-Focused',
      description: 'Creating intuitive interfaces that prioritize user experience and accessibility.'
    }
  ]

  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and Stripe integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      title: 'Task Management App',
      description: 'Real-time collaboration tool with drag-and-drop functionality.',
      tech: ['Next.js', 'Socket.io', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      title: 'AI Content Generator',
      description: 'AI-powered content creation tool using OpenAI API.',
      tech: ['Next.js', 'OpenAI', 'Prisma'],
      link: '#',
      github: '#'
    }
  ]

  const latestBlogs = [
    {
      title: 'Getting Started with Next.js 14',
      excerpt: 'Learn the latest features and improvements in Next.js 14.',
      date: '2024-01-15',
      slug: 'getting-started-nextjs-14'
    },
    {
      title: 'Building Scalable React Applications',
      excerpt: 'Best practices for structuring large React applications.',
      date: '2024-01-10',
      slug: 'building-scalable-react-apps'
    },
    {
      title: 'The Future of Web Development',
      excerpt: 'Exploring emerging trends and technologies in web development.',
      date: '2024-01-05',
      slug: 'future-of-web-development'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
              Hello, I'm{' '}
              <span className="text-primary-600">Your Name</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Full-stack developer passionate about creating exceptional digital experiences 
              and sharing knowledge through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
              >
                Get In Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What I Bring to the Table
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Combining technical expertise with creative problem-solving to deliver exceptional results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-primary-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-600">
                Some of my recent work and side projects.
              </p>
            </div>
            <Link
              href="/projects"
              className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
            >
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
                    >
                      Live Demo
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                    <a
                      href={project.github}
                      className="text-gray-600 hover:text-gray-900 font-medium"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Latest Blog Posts
              </h2>
              <p className="text-xl text-gray-600">
                Thoughts, tutorials, and insights from my development journey.
              </p>
            </div>
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestBlogs.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', {
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
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
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
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and bring your ideas to life with clean, efficient code.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
            >
              Start a Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/blog"
              className="border border-primary-200 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Read My Blog
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}