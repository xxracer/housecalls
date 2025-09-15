'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right' | 'up' | 'down';
}

export function ScrollAnimation({
  children,
  className,
  delay = 0,
  direction = 'up',
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when element's intersection status changes
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null, // relative to document viewport
        rootMargin: '0px',
        threshold: 0.1, // 10% of element has to be visible
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  const animationClasses = {
    up: 'scroll-animate-up',
    down: 'scroll-animate-down',
    left: 'scroll-animate-left',
    right: 'scroll-animate-right',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'scroll-animate',
        animationClasses[direction],
        { 'is-visible': isVisible },
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
