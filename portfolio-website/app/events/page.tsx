import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, MapPin, Users, Clock, ExternalLink, Video } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Join me at upcoming events, workshops, and speaking engagements.',
  openGraph: {
    title: 'Events | Your Portfolio',
    description: 'Join me at upcoming events, workshops, and speaking engagements.',
  }
}

export default function EventsPage() {
  const upcomingEvents = [
    {
      id: '1',
      title: 'Building Modern Web Applications with Next.js',
      description: 'A comprehensive workshop on creating performant and SEO-friendly web applications using Next.js 14.',
      date: '2024-02-15T14:00:00.000Z',
      location: 'Tech Conference Center, San Francisco',
      link: 'https://example.com/events/nextjs-workshop',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=400&fit=crop',
      type: 'Workshop',
      attendees: 50,
      duration: '3 hours',
      published: true
    },
    {
      id: '2',
      title: 'The Future of Frontend Development',
      description: 'Keynote presentation exploring emerging trends and technologies shaping the future of frontend development.',
      date: '2024-03-02T10:00:00.000Z',
      location: 'DevCon 2024, Austin',
      link: 'https://example.com/events/devcon-keynote',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=400&fit=crop',
      type: 'Keynote',
      attendees: 500,
      duration: '45 minutes',
      published: true
    },
    {
      id: '3',
      title: 'React Performance Optimization Masterclass',
      description: 'Deep dive into React performance optimization techniques, including code splitting, lazy loading, and memoization.',
      date: '2024-03-20T13:00:00.000Z',
      location: 'Online Event',
      link: 'https://example.com/events/react-performance',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      type: 'Masterclass',
      attendees: 100,
      duration: '2 hours',
      published: true
    }
  ]

  const pastEvents = [
    {
      id: '4',
      title: 'TypeScript Best Practices',
      description: 'Workshop covering advanced TypeScript patterns and best practices for large-scale applications.',
      date: '2023-11-15T14:00:00.000Z',
      location: 'JavaScript Conference, New York',
      link: 'https://example.com/events/typescript-workshop',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop',
      type: 'Workshop',
      attendees: 75,
      duration: '2.5 hours',
      published: true,
      recordingUrl: 'https://youtube.com/watch?v=example'
    },
    {
      id: '5',
      title: 'Building Scalable APIs with Node.js',
      description: 'Technical talk on designing and implementing scalable REST APIs using Node.js and modern best practices.',
      date: '2023-10-08T16:00:00.000Z',
      location: 'Backend Developers Meetup, Seattle',
      link: 'https://example.com/events/nodejs-apis',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop',
      type: 'Talk',
      attendees: 120,
      duration: '1 hour',
      published: true,
      recordingUrl: 'https://youtube.com/watch?v=example2'
    },
    {
      id: '6',
      title: 'CSS-in-JS: Pros, Cons, and Best Practices',
      description: 'Panel discussion on the current state of CSS-in-JS solutions and when to use them in modern web development.',
      date: '2023-09-22T15:30:00.000Z',
      location: 'Frontend Friday, Los Angeles',
      link: 'https://example.com/events/css-in-js-panel',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop',
      type: 'Panel',
      attendees: 200,
      duration: '1.5 hours',
      published: true
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'workshop':
        return 'bg-blue-100 text-blue-700'
      case 'keynote':
        return 'bg-purple-100 text-purple-700'
      case 'masterclass':
        return 'bg-green-100 text-green-700'
      case 'talk':
        return 'bg-orange-100 text-orange-700'
      case 'panel':
        return 'bg-pink-100 text-pink-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  const isEventUpcoming = (date: string) => {
    return new Date(date) > new Date()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Events & Speaking
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join me at workshops, conferences, and meetups where I share knowledge about 
              web development, best practices, and the latest technology trends.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
            <div className="text-sm text-gray-600">
              {upcomingEvents.length} event{upcomingEvents.length !== 1 ? 's' : ''} scheduled
            </div>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="bg-white border-2 border-primary-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                        {event.type}
                      </span>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {event.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(event.date).toLocaleDateString('en-US', {
                          weekday: 'long',
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit'
                        })}
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2" />
                          {event.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-2" />
                          {event.attendees} attendees
                        </div>
                      </div>
                    </div>

                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors inline-flex items-center justify-center"
                    >
                      Register Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Upcoming Events</h3>
              <p className="text-gray-600">
                Check back soon for new events and speaking engagements.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Past Events</h2>
            <div className="text-sm text-gray-600">
              Recent presentations and workshops
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(event.type)}`}>
                      {event.type}
                    </span>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {event.attendees} attended
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {event.duration}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    {event.recordingUrl && (
                      <a
                        href={event.recordingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors inline-flex items-center justify-center"
                      >
                        <Video className="mr-1 h-4 w-4" />
                        Watch
                      </a>
                    )}
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                    >
                      Details
                      <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Availability */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Invite Me to Speak
            </h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              I'm available for conferences, workshops, meetups, and corporate events. 
              Let's discuss how I can contribute to your event.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-700 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Topics I Cover</h3>
                <ul className="text-sm text-primary-100 space-y-1">
                  <li>• Modern Web Development</li>
                  <li>• React & Next.js</li>
                  <li>• TypeScript Best Practices</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              
              <div className="bg-primary-700 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Event Types</h3>
                <ul className="text-sm text-primary-100 space-y-1">
                  <li>• Technical Conferences</li>
                  <li>• Workshops & Masterclasses</li>
                  <li>• Meetups & User Groups</li>
                  <li>• Corporate Training</li>
                </ul>
              </div>
              
              <div className="bg-primary-700 rounded-lg p-6">
                <h3 className="font-semibold mb-2">Formats</h3>
                <ul className="text-sm text-primary-100 space-y-1">
                  <li>• Keynote Presentations</li>
                  <li>• Lightning Talks</li>
                  <li>• Panel Discussions</li>
                  <li>• Hands-on Workshops</li>
                </ul>
              </div>
            </div>
            
            <Link
              href="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center"
            >
              Get in Touch
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}