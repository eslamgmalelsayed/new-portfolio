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
  WordPress: { bg: 'bg-[#21759B]', text: 'text-white' },
  JavaScript: { bg: 'bg-[#F7DF1E]', text: 'text-black' },
};

const STATUS_LABELS = {
  'in-progress': { label: 'In Progress', dot: 'bg-emerald-400' },
} as const;

// Each video is downloaded once and played from an in-memory blob URL, so
// switching tabs or scrolling away and back never hits the network again.
const videoBlobs = new Map<string, Promise<string>>();

function loadVideoBlob(url: string) {
  let blobUrl = videoBlobs.get(url);
  if (!blobUrl) {
    blobUrl = fetch(url)
      .then((res) => res.blob())
      .then((blob) => URL.createObjectURL(blob))
      .catch(() => {
        videoBlobs.delete(url);
        return url;
      });
    videoBlobs.set(url, blobUrl);
  }
  return blobUrl;
}

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
  status?: keyof typeof STATUS_LABELS;
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
  status,
}: Props) {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVisibleRef = useRef(false);

  // Only load the video once the card is near the viewport,
  // then play while visible and pause when scrolled away or hidden.
  useEffect(() => {
    if (!video || !cardRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
        if (entry.isIntersecting) {
          loadVideoBlob(video).then(setVideoSrc);
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [video]);

  return (
    <Card
      ref={cardRef}
      className={
        'flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full'
      }
    >
      <Link
        href={href || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className={cn('block cursor-pointer', className)}
        aria-label={`View project: ${title}`}
      >
        {video && (
          <div className="relative h-40 w-full bg-muted">
            {!isVideoReady && (
              <div className="absolute inset-0 animate-pulse bg-muted" />
            )}
            {videoSrc && (
              <video
                ref={videoRef}
                src={videoSrc}
                autoPlay
                loop
                muted
                playsInline
                onLoadedData={(e) => {
                  setIsVideoReady(true);
                  if (!isVisibleRef.current) e.currentTarget.pause();
                }}
                className={cn(
                  'pointer-events-none mx-auto h-40 w-full object-cover object-top transition-opacity duration-300', // needed because random black line at bottom of video
                  isVideoReady ? 'opacity-100' : 'opacity-0'
                )}
              />
            )}
          </div>
        )}

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
            <div className="flex shrink-0 items-center gap-1">
              {status && (
                <Badge
                  variant="secondary"
                  className="gap-1.5 whitespace-nowrap font-sans text-xs hover:bg-secondary"
                >
                  <span className="relative flex size-1.5">
                    <span
                      className={cn(
                        'absolute inline-flex size-full animate-ping rounded-full opacity-75',
                        STATUS_LABELS[status].dot
                      )}
                    />
                    <span
                      className={cn(
                        'relative inline-flex size-1.5 rounded-full',
                        STATUS_LABELS[status].dot
                      )}
                    />
                  </span>
                  {STATUS_LABELS[status].label}
                </Badge>
              )}
              <Badge
                variant="secondary"
                className="font-sans text-xs hover:bg-secondary"
              >
                {dates}
              </Badge>
            </div>
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
                      ? `border-transparent ${techColor.bg} ${techColor.text}`
                      : 'hover:bg-secondary'
                  )}
                  variant={shouldUseBrandColor ? 'outline' : 'secondary'}
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
