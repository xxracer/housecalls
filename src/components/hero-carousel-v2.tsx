"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import type { Service } from '@/lib/data';

type CarouselService = Pick<Service, 'slug' | 'title' | 'image' | 'alt'>;

type ImageCarouselProps = {
  services: CarouselService[];
};

export const HeroCarouselV2 = ({ services }: ImageCarouselProps) => {
  return (
    <Carousel
      className="w-full overflow-hidden rounded-lg shadow-2xl"
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        {services.map((service, index) => (
          <CarouselItem key={index}>
            <Link href={`/services/${service.slug}`} className="relative block h-full w-full aspect-square">
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <h3 className="font-headline text-2xl font-bold text-white">
                  {service.title}
                </h3>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
