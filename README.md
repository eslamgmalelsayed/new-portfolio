# 🚀 Personal Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features beautiful animations from Magic UI and a clean, professional design.

![Portfolio Preview](public/me.webp)

## ✨ Features

- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Theme switching with next-themes
- **Beautiful Animations**: Magic UI components including:
  - Icon Cloud for skills visualization
  - Text Reveal animations
  - Blur Fade transitions
  - Scroll Progress indicator
- **Performance Optimized**: Static export for blazing fast loading
- **SEO Ready**: Optimized meta tags and structure
- **Type Safe**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + [Magic UI](https://magicui.design/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Deployment**: [Netlify](https://netlify.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information

Edit `src/data/resume.tsx` to update:

- Personal details (name, location, description)
- Work experience
- Education
- Skills
- Projects
- Contact information

### Styling

- **Colors**: Modify `tailwind.config.ts` for custom color schemes
- **Fonts**: Update `src/app/layout.tsx` for font changes
- **Components**: Customize components in `src/components/`

### Adding New Sections

1. Create new components in `src/components/`
2. Add to the main page in `src/app/page.tsx`
3. Update navigation if needed

## 🌐 Deployment

### Netlify (Recommended)

1. **Build the project**

   ```bash
   pnpm build
   ```

2. **Deploy to Netlify**
   - **Option 1**: Connect your GitHub repo to Netlify
   - **Option 2**: Drag and drop the `out` folder to Netlify

The `netlify.toml` file is already configured for optimal deployment.

### Other Platforms

- **Vercel**: `vercel --prod`
- **GitHub Pages**: Enable static export in `next.config.mjs`
- **Any Static Host**: Upload the `out` folder after building

## 📁 Project Structure

```
portfolio/
├── public/                 # Static assets
├── src/
│   ├── app/               # Next.js App Router pages
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   └── magicui/      # Magic UI components
│   ├── data/             # Portfolio data
│   └── lib/              # Utility functions
├── content/              # MDX content (if any)
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── netlify.toml         # Netlify deployment config
```

## 🎨 Magic UI Components Used

- **Icon Cloud**: Interactive 3D skill visualization
- **Text Reveal**: Scroll-triggered text animations
- **Blur Fade**: Smooth entrance animations
- **Scroll Progress**: Reading progress indicator
- **Border Beam**: Animated borders
- **Cool Mode**: Interactive click effects

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript checks
- `pnpm format` - Format code with Prettier

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Contact

**Eslam Gamal Elsayed**

- Email: eslamgmal1@gmail.com
- LinkedIn: [eslamgamalelsayed](https://www.linkedin.com/in/eslamgamalelsayed)
- GitHub: [eslamgmalelsayed](https://github.com/eslamgmalelsayed)

---

⭐ **Star this repository if you found it helpful!**
