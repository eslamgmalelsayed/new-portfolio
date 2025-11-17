'use client';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { OptimizedImage } from '@/components/optimized-image';
import Link from 'next/link';
import Markdown from 'react-markdown';
import { useState, useEffect, useRef } from 'react';

// Technology brand colors mapping for first chip only
const TECH_COLORS: Record<string, { bg: string; text: string }> = {
  'Vue.js': { bg: 'bg-[#4FC08D]', text: 'text-white' },
  'Nuxt.js': { bg: 'bg-[#00DC82]', text: 'text-white' },
  'Next.js': { bg: 'bg-[#000000]', text: 'text-white' },
  Angular: { bg: 'bg-[#DD0031]', text: 'text-white' },
};

// Global cache to store video blobs and prevent duplicate downloads
const videoCache = new Map<string, string>(); // URL -> Blob URL
const loadingVideos = new Set<string>(); // Track videos currently loading

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    if (!video || !cardRef.current || hasTriggeredRef.current) return;

    // If video is already cached, use it immediately
    if (videoCache.has(video)) {
      setShouldLoadVideo(true);
      setVideoSrc(videoCache.get(video)!);
      hasTriggeredRef.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          loadVideo(video);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px',
        threshold: 0.1,
      }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [video]);

  const loadVideo = async (videoUrl: string) => {
    if (loadingVideos.has(videoUrl) || videoCache.has(videoUrl)) return;

    loadingVideos.add(videoUrl);
    setShouldLoadVideo(true);

    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      videoCache.set(videoUrl, blobUrl);
      setVideoSrc(blobUrl);
    } catch (error) {
      console.error('Failed to load video:', error);
      // Fallback to original URL
      setVideoSrc(videoUrl);
    } finally {
      loadingVideos.delete(videoUrl);
    }
  };

  return (
    <Card
      ref={cardRef}
      className={
        'flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full'
      }
    >
      <Link
        href={href || '#'}
        className={cn('block cursor-pointer', className)}
        aria-label={`View project: ${title}`}
      >
        {video && shouldLoadVideo ? (
          videoSrc ? (
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-40 w-full object-cover object-top" // needed because random black line at bottom of video
            />
          ) : (
            <div className="h-40 w-full bg-muted animate-pulse" />
          )
        ) : video && !shouldLoadVideo ? (
          <div className="h-40 w-full bg-muted animate-pulse" />
        ) : null}

        {image && !video && (
          <OptimizedImage
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <CardHeader className="px-2">
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <Badge variant="secondary" className="font-sans text-xs">
              {dates}
            </Badge>
          </div>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace('https://', '').replace('www.', '').replace('/', '')}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col p-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag, index) => {
              const isFirstTag = index === 0;
              const techColor = TECH_COLORS[tag];
              const shouldUseBrandColor = isFirstTag && techColor;

              return (
                <Badge
                  className={cn(
                    'px-1 py-0 text-[10px]',
                    shouldUseBrandColor
                      ? `${techColor.bg} ${techColor.text} hover:opacity-80`
                      : ''
                  )}
                  variant={shouldUseBrandColor ? undefined : 'secondary'}
                  key={tag}
                >
                  {tag}
                </Badge>
              );
            })}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link
                href={link?.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.type} link for ${title}`}
              >
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
