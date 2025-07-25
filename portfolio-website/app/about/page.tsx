import type { Metadata } from 'next'
import { Calendar, Award, BookOpen, Code2, Database, Globe, Smartphone, Paintbrush } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn more about my background, skills, and experience in web development.',
  openGraph: {
    title: 'About Me | Your Portfolio',
    description: 'Learn more about my background, skills, and experience in web development.',
  }
}

export default function AboutPage() {
  const skills = [
    {
      category: 'Frontend',
      icon: <Globe className="h-6 w-6" />,
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Angular']
    },
    {
      category: 'Backend',
      icon: <Database className="h-6 w-6" />,
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL']
    },
    {
      category: 'Mobile',
      icon: <Smartphone className="h-6 w-6" />,
      technologies: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android']
    },
    {
      category: 'Tools & Design',
      icon: <Paintbrush className="h-6 w-6" />,
      technologies: ['Figma', 'Adobe XD', 'Git', 'Docker', 'AWS', 'Vercel']
    }
  ]

  const experience = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading development of web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting scalable solutions.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led a team of 5 developers on major product launches',
        'Implemented CI/CD pipelines improving deployment efficiency by 60%'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency Ltd.',
      period: '2020 - 2022',
      description: 'Developed custom web applications for clients across various industries. Collaborated with design teams to create responsive and user-friendly interfaces.',
      achievements: [
        'Delivered 20+ successful client projects',
        'Improved code quality through implementation of testing frameworks',
        'Increased client satisfaction scores by 25%'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Startup Ventures',
      period: '2018 - 2020',
      description: 'Built responsive web applications using modern JavaScript frameworks. Focused on creating intuitive user experiences and optimizing performance.',
      achievements: [
        'Developed reusable component library used across multiple projects',
        'Improved mobile user engagement by 35%',
        'Collaborated with UX designers to implement pixel-perfect designs'
      ]
    }
  ]

  const education = [
    {
      degree: 'Master of Science in Computer Science',
      school: 'University of Technology',
      period: '2016 - 2018',
      description: 'Specialized in software engineering and web technologies.'
    },
    {
      degree: 'Bachelor of Science in Information Technology',
      school: 'State University',
      period: '2012 - 2016',
      description: 'Foundation in programming, databases, and system design.'
    }
  ]

  const certifications = [
    'AWS Certified Solutions Architect',
    'Google Cloud Professional Developer',
    'Meta Frontend Developer Certificate',
    'MongoDB Certified Developer'
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                About Me
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                I'm a passionate full-stack developer with over 6 years of experience 
                creating digital solutions that make a difference. I love turning complex 
                problems into simple, beautiful designs.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge through 
                blog posts and community events.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 mr-2 text-primary-600" />
                  <span>6+ Years Experience</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Code2 className="h-5 w-5 mr-2 text-primary-600" />
                  <span>50+ Projects Completed</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Award className="h-5 w-5 mr-2 text-primary-600" />
                  <span>Multiple Certifications</span>
                </div>
              </div>
            </div>
            <div className="lg:pl-12">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Your Name"
                  className="w-full h-80 object-cover rounded-xl mb-6"
                />
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Name</h3>
                  <p className="text-primary-600 font-medium">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Skills & Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and mobile solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="text-primary-600 mr-3">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">{skill.category}</h3>
                </div>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm font-medium"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              My journey through various roles and the impact I've made along the way.
            </p>
          </div>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-primary-600 font-medium">{job.company}</p>
                  </div>
                  <div className="text-gray-500 font-medium mt-2 lg:mt-0">{job.period}</div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {job.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 text-sm flex items-start">
                        <span className="text-primary-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex items-start">
                      <BookOpen className="h-6 w-6 text-primary-600 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{edu.degree}</h3>
                        <p className="text-primary-600 font-medium mb-1">{edu.school}</p>
                        <p className="text-gray-500 text-sm mb-2">{edu.period}</p>
                        <p className="text-gray-600">{edu.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Certifications</h2>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center">
                      <Award className="h-5 w-5 text-primary-600 mr-3" />
                      <span className="text-gray-900 font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Personal Interests */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">When I'm Not Coding</h3>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    I believe in maintaining a healthy work-life balance. Here's what I enjoy doing:
                  </p>
                  <ul className="space-y-2">
                    <li className="text-gray-600 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Contributing to open-source projects
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Photography and travel
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Playing guitar and music production
                    </li>
                    <li className="text-gray-600 flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      Hiking and outdoor adventures
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}