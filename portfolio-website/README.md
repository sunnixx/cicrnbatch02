# Portfolio Website

A modern, SEO-friendly portfolio website built with Next.js 14, featuring a complete admin panel for blog management.

## ✨ Features

- **Modern Design**: Clean, responsive design with dark/light mode support
- **SEO Optimized**: Built-in SEO optimization with meta tags, Open Graph, and structured data
- **Blog Management**: Complete admin panel for creating, editing, and managing blog posts
- **Contact Form**: Functional contact form with validation
- **Events Management**: Showcase upcoming and past events/speaking engagements
- **Performance**: Optimized for speed with Next.js 14 features
- **TypeScript**: Fully typed codebase for better development experience
- **Database**: SQLite database with Prisma ORM
- **Authentication**: Secure admin authentication with JWT

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   DATABASE_URL="file:./dev.db"
   JWT_SECRET="your-super-secret-jwt-key"
   ADMIN_EMAIL="admin@example.com"
   ADMIN_PASSWORD="admin123"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Seed the database (optional)**
   ```bash
   npx prisma db seed
   ```

6. **Run the development server**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-website/
├── app/                    # Next.js 14 app directory
│   ├── about/             # About page
│   ├── admin/             # Admin panel
│   ├── api/               # API routes
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── events/            # Events page
│   └── globals.css        # Global styles
├── components/            # Reusable components
├── lib/                   # Utility functions
├── prisma/               # Database schema and migrations
├── public/               # Static assets
└── types/                # TypeScript type definitions
```

## 🛠️ Admin Panel

The admin panel allows you to:

- **Blog Management**: Create, edit, delete, and publish blog posts
- **SEO Management**: Set custom SEO titles, descriptions, and meta tags
- **Media Management**: Upload and manage featured images
- **User Management**: Manage admin users and permissions

### Accessing the Admin Panel

1. Navigate to `/admin/login`
2. Use the default credentials:
   - Email: `admin@example.com`
   - Password: `admin123`
3. **Important**: Change these credentials in production!

### Creating Blog Posts

1. Login to the admin panel
2. Navigate to "Blog Posts"
3. Click "New Post"
4. Fill in the required fields:
   - Title (required)
   - Content (required)
   - Excerpt (optional, auto-generated if empty)
   - Featured Image URL
   - Tags (comma-separated)
   - SEO fields
5. Save as draft or publish immediately

## 🎨 Customization

### Styling

The project uses Tailwind CSS for styling. You can customize:

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Typography**: Modify font families and sizes
- **Components**: Update component styles in their respective files

### Content

- **Personal Information**: Update personal details in the page components
- **Social Links**: Modify social media links in the Footer component
- **Navigation**: Edit navigation items in the Navigation component

### SEO

- **Meta Tags**: Update default meta tags in `app/layout.tsx`
- **Structured Data**: Add JSON-LD structured data for better SEO
- **Sitemap**: The sitemap is auto-generated based on your content

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in the Vercel dashboard
3. **Deploy** - Vercel will automatically build and deploy your site

### Other Platforms

The application can be deployed on any platform that supports Node.js:

- **Netlify**: Use the `@netlify/plugin-nextjs` plugin
- **Railway**: Direct deployment with database support
- **Digital Ocean**: Deploy to App Platform or Droplets

### Production Checklist

- [ ] Update environment variables for production
- [ ] Change default admin credentials
- [ ] Set up proper database (PostgreSQL recommended for production)
- [ ] Configure email service for contact form
- [ ] Set up analytics (Google Analytics)
- [ ] Configure domain and SSL
- [ ] Test all functionality

## 📧 Contact Form Setup

To make the contact form functional:

1. **Set up email service** (SendGrid, AWS SES, etc.)
2. **Update API route** at `app/api/contact/route.ts`
3. **Add email sending logic** to handle form submissions

## 🔧 Database Management

### Development

The project uses SQLite for development. Database file is located at `prisma/dev.db`.

### Production

For production, consider using PostgreSQL:

1. **Update DATABASE_URL** in environment variables
2. **Run migrations**: `npx prisma migrate deploy`
3. **Generate client**: `npx prisma generate`

### Schema Changes

1. **Update schema** in `prisma/schema.prisma`
2. **Create migration**: `npx prisma migrate dev --name descriptive-name`
3. **Apply migration**: `npx prisma migrate deploy`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you have any questions or need help setting up the project:

1. Check the [documentation](docs/)
2. Look through [existing issues](issues/)
3. Create a [new issue](issues/new) if needed

## 🔗 Links

- **Live Demo**: [Your Portfolio URL]
- **Documentation**: [Docs URL]
- **Blog**: [Blog URL]

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and Prisma.