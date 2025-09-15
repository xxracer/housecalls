import { Star } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function HeroGoogleReviews({ className }: { className?: string }) {
  return (
    <Link
      href="#reviews"
      className={cn(
        'group inline-flex items-center gap-2 text-sm font-medium',
        className
      )}
    >
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className="h-5 w-5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
      <span className="text-muted-foreground transition-colors group-hover:text-foreground">
        <span className="font-bold text-foreground">5.0 Excellent</span> | 50+ Patient Reviews
      </span>
    </Link>
  );
}
