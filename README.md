# Sacred Website

A production-ready React.js static website built with TypeScript, Vite, and modern best practices.

## 🚀 Features

- ⚡ **Vite** - Lightning fast build tool and dev server
- ⚛️ **React 19** - Latest React with modern hooks
- 📘 **TypeScript** - Type-safe development
- 🎨 **CSS Modules** - Scoped styling
- 🧭 **React Router v7** - Client-side routing
- 🔍 **SEO Optimized** - React Helmet Async, Open Graph, Twitter Cards, Structured Data
- ♿ **Accessible** - ARIA labels, skip links, semantic HTML
- 📦 **Code Splitting** - Lazy loading with React.lazy
- 🎯 **Path Aliases** - Clean imports with @ aliases
- 🛠️ **ESLint & Prettier** - Code quality and formatting
- 🏗️ **Production Ready** - Optimized builds with minification

## 📁 Project Structure

```
/
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── styles/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header/
│   │   │   ├── Footer/
│   │   │   ├── SEO/
│   │   │   └── Loading/
│   │   └── home/
│   ├── pages/
│   │   └── Home/
│   │       ├── Home.tsx
│   │       ├── Home.module.css
│   │       └── index.ts
│   ├── layouts/
│   │   └── MainLayout.tsx
│   ├── routes/
│   │   └── index.tsx
│   ├── hooks/
│   ├── utils/
│   │   └── seo.ts
│   ├── constants/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ and npm (or yarn/pnpm)

### Installation

1. **Clone the repository** (or use this project)

   ```bash
   cd sacred_website_rewamp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   Edit `.env` and update `VITE_APP_URL` with your production URL.

4. **Start development server**

   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🏗️ Building for Production

```bash
npm run build
```

The production build will be in the `dist/` directory, optimized and ready to deploy.

## 🎨 Styling

- **CSS Modules** - Scoped component styles (`.module.css`)
- **Global Styles** - `src/index.css` for base styles
- Styles are automatically scoped to components

## 🧭 Routing

Routes are configured in `src/routes/index.tsx`. To add a new page:

1. Create a new page component in `src/pages/`
2. Add the route to `src/routes/index.tsx`
3. Use lazy loading for code splitting

Example:

```tsx
const NewPage = lazy(() => import('@/pages/NewPage').then((module) => ({ default: module.NewPage })))

// Add to router
{
  path: '/new-page',
  element: (
    <Suspense fallback={<Loading />}>
      <NewPage />
    </Suspense>
  ),
}
```

## 🔍 SEO Configuration

SEO is handled through the `SEO` component in `src/components/common/SEO/SEO.tsx`.

Usage in a page:

```tsx
import { SEO } from '@/components/common/SEO'

export const MyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="My Page Title"
        description="Page description"
        keywords="keyword1, keyword2"
        ogImage="/my-og-image.jpg"
        canonicalUrl="https://example.com/my-page"
      />
      {/* Page content */}
    </>
  )
}
```

## ♿ Accessibility Features

- Semantic HTML5 elements (`<header>`, `<main>`, `<footer>`, `<nav>`, `<article>`, `<section>`)
- ARIA labels and roles
- Proper heading hierarchy
- Focus management
- Keyboard navigation support

## 📦 Path Aliases

The project uses path aliases for cleaner imports:

- `@/` → `src/`
- `@/components` → `src/components`
- `@/pages` → `src/pages`
- `@/layouts` → `src/layouts`
- `@/hooks` → `src/hooks`
- `@/utils` → `src/utils`
- `@/constants` → `src/constants`
- `@/types` → `src/types`
- `@/assets` → `src/assets`

## 🚀 Deployment

### Static Hosting

This is a static website that can be deployed to:

- **Vercel** - Zero-config deployment
- **Netlify** - Drag & drop or Git integration
- **GitHub Pages** - Free hosting for static sites
- **AWS S3 + CloudFront** - Scalable hosting
- **Any static hosting service**

### Build Output

After running `npm run build`, deploy the `dist/` folder to your hosting provider.

## 🔧 Configuration Files

- **`vite.config.ts`** - Vite configuration with path aliases and build optimizations
- **`tsconfig.json`** - TypeScript configuration
- **`tsconfig.app.json`** - App-specific TypeScript settings with path aliases
- **`.eslintrc.js`** - ESLint configuration
- **`.prettierrc`** - Prettier formatting rules

## 📝 Code Quality

- **TypeScript** - Strict type checking enabled
- **ESLint** - Code linting with React and TypeScript rules
- **Prettier** - Automatic code formatting
- **JSDoc** - Documentation comments for components and functions

## 🤝 Contributing

1. Follow the existing code structure
2. Use TypeScript for all new files
3. Add JSDoc comments for components
4. Follow the naming conventions
5. Run `npm run lint` before committing

## 📄 License

This project is private and proprietary.

## 🆘 Support

For issues or questions, please contact the development team.

---

Built with ❤️ using React, TypeScript, and Vite


Deploy staging : ./deploy.sh# sacred
# sacred
