"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

type LocationCarouselProps = {
  locations: string[];
};

export const LocationCarousel = ({ locations }: LocationCarouselProps) => {
  const [locationIndex, setLocationIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLocationIndex((prevIndex) => (prevIndex + 1) % locations.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [locations.length]);

  return (
    <span className="relative inline-block h-[1.2em] text-primary">
      {locations.map((location, index) => (
        <span
          key={location}
          className={cn(
            "absolute inset-0 transition-opacity duration-500",
            locationIndex === index ? "opacity-100" : "opacity-0"
          )}
        >
          {location}
        </span>
      ))}
       <span className="opacity-0">{locations[locationIndex]}</span>
    </span>
  );
};
