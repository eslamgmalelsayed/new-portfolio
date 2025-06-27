import { Icons } from '@/components/icons';
import { HomeIcon } from 'lucide-react';

export const DATA = {
  name: 'Eslam Gamal Elsayed',
  initials: 'EGE',
  url: 'https://eslamgamal.dev', // Update this with your actual portfolio URL
  location: 'Riyadh, Saudi Arabia',
  locationLink: 'https://www.google.com/maps/place/riyadh',
  description:
    'Front-end developer. I love building things and helping people.',
  summary:
    'Front-end developer with 4+ years of experience specializing in Vue and JavaScript, delivering scalable and high-performance web applications. Adept at solving complex technical challenges by analyzing and debugging issues, optimizing performance, and implementing innovative solutions. Expertise in creating reusable components, enhancing application performance, and integrating APIs in dynamic Single-Page Applications (SPAs). Skilled in collaborating with cross-functional teams to deliver user-centric solutions while adhering to tight deadlines.',
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
    'GraphQL',
    'Supabase',
    'Git',
    'Docker',
    'Azure',
    'Figma',
    'Adobe XD',
  ],
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
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
      company: 'Ministry Of Justice',
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
      company: 'Freelancer',
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
      company: 'Brainnest',
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
      title: 'Najiz Sa',
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
      title: 'Task Manager',
      href: 'https://taske-manager.netlify.app',
      dates: '2025',
      active: true,
      description:
        'A task manager application built with nextjs and TypeScript. It allows you to create, edit, and delete tasks, as well as mark them as completed or pending. it also has authentication and authorization with supabase.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Zod',
        'Supabase',
      ],
      links: [
        {
          type: 'Demo',
          href: 'https://taske-manager.netlify.app',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: '/task-preview.mp4',
    },
    {
      title: 'Thought Cache',
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
      ],
      image: '',
      video: './thoughts-preview.mp4',
    },
    {
      title: 'Movie Search App',
      href: 'https://movie-searchhh-app.netlify.app',
      dates: '2025',
      active: true,
      description:
        'a movie search app built with Angular. It allows you to search for movies and tv shows, and see the details of the movie or tv show.',
      technologies: [
        'Angular',
        'Angular Material',
        'Angular CLI',
        'Angular Services',
        'Angular HttpClient',
        'Angular Forms',
      ],
      links: [
        {
          type: 'Demo',
          href: 'https://movie-searchhh-app.netlify.app',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '',
      video: './movie-preview.mp4',
    },
  ],
} as const;
