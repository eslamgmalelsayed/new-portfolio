'use client';

import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DATA } from '@/data/resume';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { CoolMode } from '@/components/magicui/cool-mode';
import IconCloud from '@/components/magicui/icon-cloud';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ScrollProgress } from '@/components/magicui/scroll-progress';
import { TextReveal } from '@/components/magicui/text-reveal';

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main id="main-content" className="flex flex-col min-h-[100dvh] space-y-10">
      <ScrollProgress className="h-1" />
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5 overflow-hidden">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(' ')[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px]"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
                activateVelocityScroll={true}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <CoolMode>
                <Avatar className="size-28 border cursor-pointer">
                  <AvatarImage
                    alt={`Portrait photo of ${DATA.name}`}
                    src={DATA.avatarUrl}
                  />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </CoolMode>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? 'Present'}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="lg:w-[65%] order-2 lg:order-1">
              <div className="flex flex-wrap gap-1">
                {DATA.skills.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 11 + id * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
            <BlurFade
              delay={BLUR_FADE_DELAY * 10}
              className="lg:w-[35%] order-1 lg:order-2"
            >
              <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden px-8 pb-8 pt-4">
                <IconCloud
                  iconSlugs={[
                    'typescript',
                    'javascript',
                    'react',
                    'nextdotjs',
                    'nodejs',
                    'express',
                    'mongodb',
                    'postgresql',
                    'git',
                    'github',
                    'docker',
                    'tailwindcss',
                    'html5',
                    'css3',
                    'python',
                    'figma',
                  ]}
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <TextReveal>
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </TextReveal>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto !mt-0">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
                <BorderBeam />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a message{' '}
                <Link
                  href={DATA.contact.social.email.url}
                  className="text-blue-500 hover:underline"
                  aria-label="Send email to Eslam Gamal"
                >
                  via email
                </Link>{' '}
                or connect with me on{' '}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  className="text-blue-500 hover:underline"
                  aria-label="Connect on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
                . I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
