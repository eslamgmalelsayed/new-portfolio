'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface Tab {
  value: string;
  label: string;
  shortLabel?: string;
  count: number;
  content: React.ReactNode;
}

export function ProjectTabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0]?.value);
  // Tabs are mounted the first time they're opened and then kept mounted
  // (just hidden), so switching back never re-renders cards or reloads videos.
  const [visited, setVisited] = useState(() => new Set([tabs[0]?.value]));
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeTab = tabs.find((tab) => tab.value === active) ?? tabs[0];

  const selectTab = (value: string) => {
    setActive(value);
    setVisited((prev) => (prev.has(value) ? prev : new Set(prev).add(value)));
  };

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    const offset = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
    if (!offset) return;
    e.preventDefault();
    const next = (index + offset + tabs.length) % tabs.length;
    selectTab(tabs[next].value);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="space-y-6">
      <div
        role="tablist"
        aria-label="Project categories"
        className="isolate mx-auto flex w-full gap-1 rounded-full border bg-muted p-1 sm:w-fit"
      >
        {tabs.map((tab, index) => {
          const isActive = tab.value === activeTab.value;
          return (
            <button
              key={tab.value}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              role="tab"
              id={`tab-${tab.value}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.value}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectTab(tab.value)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={cn(
                'relative flex-1 whitespace-nowrap rounded-full px-2 py-1.5 text-xs font-medium sm:flex-none sm:px-4 sm:text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="project-tab-indicator"
                  className="absolute inset-0 rounded-full bg-foreground"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              {/* White text in difference mode inverts exactly where the pill
                  is, so the label stays readable while the pill slides. */}
              <span className="relative z-10 text-white mix-blend-difference">
                <span className="sm:hidden">{tab.shortLabel ?? tab.label}</span>
                <span className="hidden sm:inline">{tab.label}</span>
                {tab.count > 0 && (
                  <span className="ml-1.5 text-xs opacity-60">{tab.count}</span>
                )}
              </span>
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.value}
          role="tabpanel"
          id={`panel-${tab.value}`}
          aria-labelledby={`tab-${tab.value}`}
          hidden={tab.value !== activeTab.value}
        >
          {visited.has(tab.value) && tab.content}
        </div>
      ))}
    </div>
  );
}
