import { Icons } from '@/components/icons';
import { FileTextIcon, HomeIcon } from 'lucide-react';

const RESUME_URL =
  'https://drive.google.com/file/d/1JBPSHxkCuCgyfw8PR8qOcP8GHCEA2jWp/view?usp=sharing';

export const DATA = {
  name: 'Eslam Gamal Elsayed',
  initials: 'EGE',
  url: 'https://eslamgamal.dev', // Update this with your actual portfolio URL
  location: 'Riyadh, Saudi Arabia',
  locationLink: 'https://www.google.com/maps/place/riyadh',
  description:
    'Front-end developer. I love building things and helping people.',
  summary:
    'Front-end developer with 5+ years of experience specializing in Vue and JavaScript, delivering scalable and high-performance web applications. Adept at solving complex technical challenges by analyzing and debugging issues, optimizing performance, and implementing innovative solutions. Expertise in creating reusable components, enhancing application performance, and integrating APIs in dynamic Single-Page Applications (SPAs). Skilled in collaborating with cross-functional teams to deliver user-centric solutions while adhering to tight deadlines.',
  avatarUrl: '/me.webp',
  skills: [
    'Vue.js',
    'Nuxt.js',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Angular',
    'HTML5',
    'CSS3',
    'SASS',
    'Tailwind CSS',
    'Angular Material',
    'Bootstrap',
    'Vuetify',
    'RESTful APIs',
    'Supabase',
    'Git',
    'Azure',
    'Figma',
    'Adobe XD',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: RESUME_URL, icon: FileTextIcon, label: 'Resume' },
  ],
  contact: {
    email: 'eslamgmal1@gmail.com',
    tel: '+966570359187',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/eslamgmalelsayed', // Update with your actual GitHub URL
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/eslamgamalelsayed',
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:eslamgmal1@gmail.com',
        icon: Icons.email,
        navbar: true,
      },
      whatsapp: {
        name: 'WhatsApp',
        url: 'https://wa.me/966570359187',
        icon: Icons.whatsapp,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'Ministry Of Justice - KSA',
      href: 'https://www.moj.gov.sa',
      badges: [],
      location: 'Riyadh, Saudi Arabia',
      title: 'Front-End Developer (Vue.js)',
      logoUrl: '/moj.svg',
      start: 'Oct 2022',
      end: 'Present',
      description:
        'Developing and maintaining Vue.js-based applications with a focus on performance and scalability. Solving technical challenges by debugging and optimizing code. Implementing complex business logic and reusable components using Vue.js and TypeScript. Collaborating with back-end teams to integrate RESTful APIs seamlessly.',
    },
    {
      company: 'Freelancer - Remote',
      badges: [],
      href: '',
      location: 'Remote',
      title: 'Front-End Developer',
      logoUrl: '/freelance.webp',
      start: 'July 2020',
      end: '2022',
      description:
        'Contributed to multiple projects by developing responsive and scalable front-end solutions. Delivered consistent UI/UX designs adhering to project requirements. Coordinated closely with team members to deliver high-quality applications on tight deadlines.',
    },
    {
      company: 'Brainnest - Germany',
      href: 'https://brainnest.consulting',
      badges: [],
      location: 'Germany',
      title: 'Front-End Developer (Trainee)',
      logoUrl: '/brainnest.webp',
      start: '2020',
      end: '2020',
      description:
        'During my Trainee program at Brainnest, I focused on advanced JavaScript concepts and CSS techniques, completing required tasks during the program. Gained hands-on experience with modern front-end development practices and methodologies.',
    },
  ],
  education: [
    {
      school: 'Delta Higher Institute',
      degree: "Bachelor's Degree in Management Information Systems",
      logoUrl: '/education.webp',
      start: '2013',
      end: '2017',
    },
    {
      school: 'Route Academy',
      degree: 'Frontend Development Course',
      logoUrl: '/education.webp',
      start: '2020',
      end: '2020',
    },
  ],
  projects: [
    {
      title: 'Zakroo',
      featured: true,
      category: 'side',
      status: 'in-progress',
      href: 'https://zakroo.com',
      dates: '2026',
      active: true,
      description:
        'An AI-first revision companion for Egyptian students from 6th primary to 3rd secondary. It builds one study plan for every subject, explains each mistake instantly in Egyptian Arabic, and brings wrong answers back with spaced review.',
      technologies: [
        'Nuxt.js',
        'TypeScript',
        'Nuxt UI',
        'Supabase',
        'AI integration',
        'Playwright',
      ],
      links: [
        {
          type: 'Demo',
          href: 'https://zakroo.com',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: '/zakroo-preview.mp4',
    },
    {
      title: 'Ewsali',
      featured: true,
      category: 'side',
      status: 'in-progress',
      href: 'https://wasall.netlify.app',
      dates: '2026',
      active: true,
      description:
        'A QR sticker that lets anyone alert a vehicle owner in Saudi Arabia, with no app and no phone numbers shared. Fleets get anonymous driving reports as weekly patterns and webhooks, with abuse prevention built in.',
      technologies: ['Nuxt.js', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Redis'],
      links: [
        {
          type: 'Demo',
          href: 'https://wasall.netlify.app',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: '/ewsali-preview.mp4',
    },
    {
      title: 'Intilaq',
      featured: true,
      category: 'wordpress',
      href: 'https://intilaq-demo.netlify.app',
      dates: '2026',
      active: true,
      description:
        'An Arabic-first WordPress block theme for landing pages, with five complete demos for real estate, contracting, law firms, clinics and agencies, plus 138 ready patterns. Built only on native blocks, with no plugins or page builder, RTL by default using CSS logical properties, and instant navigation via the Interactivity API.',
      technologies: [
        'WordPress',
        'PHP',
        'Block Theme',
        'Interactivity API',
        'CSS',
        'RTL Support',
      ],
      links: [
        {
          type: 'Demo',
          href: 'https://intilaq-demo.netlify.app',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: '/intilaq-preview.mp4',
    },
    {
      title: 'Sealtech Insulation',
      featured: true,
      category: 'wordpress',
      href: 'https://sealtechsa.com',
      dates: '2026',
      active: true,
      description:
        'A bilingual Arabic/English website for a Saudi insulation and waterproofing contractor established in 1986. It presents the company services, project portfolio, certifications, and careers, with full RTL support and a quote request flow.',
      technologies: ['WordPress', 'HTML', 'CSS', 'JavaScript', 'RTL Support'],
      links: [
        {
          type: 'Demo',
          href: 'https://sealtechsa.com',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: './sealtech-preview.mp4',
    },
    {
      title: 'Najiz Sa',
      featured: true,
      category: 'work',
      href: 'https://najiz.sa/applications/landing',
      dates: '2022',
      active: true,
      description:
        'Digital platform in Saudi Arabia that facilitates various government services, primarily focused on legal and judicial services. It provides users with a range of features.',
      technologies: ['Vue.js', 'TypeScript', 'Vuetify', 'VueI18n'],
      links: [
        {
          type: 'Demo',
          href: 'https://najiz.sa/applications/landing',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: '/najiz-preview.mp4',
    },
    {
      title: 'Abu Adel Pastry Shop',
      category: 'work',
      href: 'https://haliyomak.com',
      dates: '2021',
      active: true,
      description:
        'A bilingual Arabic/English website for an Egyptian pastry and dessert chain. It showcases a menu across nine product categories, party and special-occasion selections, branch locations, a monthly chef’s pick, and a customer survey, with full RTL support.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'RTL Support'],
      links: [
        {
          type: 'Demo',
          href: 'https://haliyomak.com',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: './abuadel-preview.mp4',
    },
    {
      title: 'CV Builder',
      category: 'side',
      status: 'in-progress',
      href: 'https://cvifi.netlify.app',
      dates: '2025',
      active: true,
      description:
        'A CV builder application that allows users to create and customize their resumes easily. It features a user-friendly interface for inputting personal information, work experience, education, and skills, with options to download the final CV in various formats.',
      technologies: ['Next.js', 'AI integration', 'TypeScript', 'Tailwind CSS'],
      links: [
        {
          type: 'Demo',
          href: 'https://cvifi.netlify.app',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'GitHub',
          href: 'https://github.com/eslamgmalelsayed/cv-builder',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: './cvifi-preview.mp4',
    },
    {
      title: 'Thought Cache',
      category: 'side',
      href: 'https://thought-cache.netlify.app',
      dates: '2025',
      active: true,
      description:
        'A modern note-taking and thought management application that helps users capture, organize, and retrieve their ideas efficiently. Features a clean interface for managing personal thoughts and notes with search and categorization capabilities.',
      technologies: [
        'Nuxt.js',
        'TypeScript',
        'Tailwind CSS',
        'Nuxt UI',
        'Supabase',
        'Clerk',
        'Zod',
        'VueI18n',
      ],
      links: [
        {
          type: 'Demo',
          href: 'https://thought-cache.netlify.app',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'GitHub',
          href: 'https://github.com/eslamgmalelsayed/Thought-Cache',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: './thoughts-preview.mp4',
    },
  ],
} as const;
