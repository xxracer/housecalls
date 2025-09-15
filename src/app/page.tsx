import { ArrowRight, CheckCircle2, MapPin, Star } from 'lucide-react';
import type { Metadata } from 'next';
import { services as allServices, generalFaq } from '@/lib/data';
import { EnhancedFaq } from '@/components/enhanced-faq';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GoogleReviews } from '@/components/google-reviews';
import { LocationCarousel } from '@/components/hero-carousel';
import { HeroCarouselV2 } from '@/components/hero-carousel-v2';
import { ScrollAnimation } from '@/components/scroll-animation';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/icons';

export const metadata: Metadata = {
  title:
    'House Call Doctors in Houston | Noble Health | Primary Care, Weight Loss & IV Therapy',
  description:
    'Noble Health House Calls brings personalized healthcare to your home in Houston, Katy, Sugar Land & The Woodlands. Primary care, weight loss programs, IV therapy, testosterone therapy & telehealth services. Book today.',
  keywords:
    'house call doctor Houston, mobile doctor Houston, primary care at home Houston, weight loss clinic Houston, testosterone therapy Houston, IV therapy Houston, telehealth Houston, Noble Health House Calls Katy, Sugar Land, The Woodlands',
};

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: generalFaq.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function Home() {
  const enhancedFaqContent = JSON.stringify(faqJsonLd);
  const locations = ["Houston", "Katy", "Sugar Land", "The Woodlands", "And More"];
  const carouselServices = [
    {
      slug: "testosterone-therapy",
      title: "Testosterone Therapy",
      image: "https://static.wixstatic.com/media/c5947c_c5c71e12f62046b6a3e72b1de2d73655~mv2.png",
      alt: "testosterone therapy Houston men’s health Noble Health",
    },
    {
      slug: "weight-loss",
      title: "Weight Loss Programs (Semaglutide, Wegovy, Ozempic)",
      image: "https://static.wixstatic.com/media/c5947c_a64e9bef21834853add76e6071dfdb42~mv2.png",
      alt: "weight loss doctor Semaglutide Houston Noble Health",
    },
    {
      slug: "iv-therapy",
      title: "IV Therapy",
      image: "https://static.wixstatic.com/media/c5947c_53c3152322484aba8c3a8e312a5b0488~mv2.jpg",
      alt: "IV therapy at home Houston Noble Health House Calls",
    },
    {
      slug: "telehealth",
      title: "Telehealth / Virtual Visits",
      image: "https://static.wixstatic.com/media/c5947c_96354f3b63634326b61f310581c9c33f~mv2.jpg",
      alt: "telehealth doctor Houston Noble Health virtual visits",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-primary/5">
        <div className="container mx-auto grid min-h-[80vh] grid-cols-1 items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24 lg:gap-20">
          <div className="space-y-6 text-center md:text-left">
             <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
                Healthcare That Comes to You in 
                <LocationCarousel locations={locations} />
            </h1>
            <p className="max-w-[700px] mx-auto text-lg text-muted-foreground md:text-xl md:mx-0 animate-fade-in-up animation-delay-200">
              Skip traffic and crowded waiting rooms. Noble Health House Calls delivers personalized medical care directly to your home — from primary care and IV therapy to weight loss and testosterone treatment.
            </p>
            <div className="flex flex-col items-center justify-center md:items-start gap-6 animate-fade-in-up animation-delay-400">
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 w-full md:w-auto">
                <Button asChild size="lg" className="font-bold shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto">
                  <Link href="/contact">Book a House Call <ArrowRight className="ml-2 h-5 w-5" /></Link>
                </Button>
                 <Button asChild size="lg" className="font-bold shadow-md hover:shadow-lg transition-shadow w-full sm:w-auto bg-foreground hover:bg-foreground/80 text-background">
                  <Link href="/clinic-visit">Book a Clinic Visit</Link>
                </Button>
              </div>
              <Link href="#reviews">
                <Image
                  src="https://static.wixstatic.com/media/c5947c_9a7f167bc24a48f2b049b879d1cd9f66~mv2.png"
                  alt="Google Reviews"
                  width={250}
                  height={121}
                  className="transition-transform hover:scale-105"
                />
              </Link>
              <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span>Most insurances accepted</span>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg animate-fade-in-up animation-delay-400">
            <HeroCarouselV2 services={carouselServices} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                Our At-Home Medical Services
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                At Noble Health House Calls, we bring healthcare directly to you.
                Our team of licensed providers delivers safe, personalized care
                at home, designed for busy professionals, men’s health, weight
                management, and seniors with limited mobility.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-stretch gap-8 sm:max-w-4xl sm:grid-cols-1 md:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-2">
            {allServices.slice(0, 4).map(service => (
              <Card
                key={service.slug}
                className="h-full flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    data-ai-hint={service.imageHint}
                    width={400}
                    height={250}
                    className="w-full object-cover aspect-[4/2.5] transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow">
                  <p className="text-muted-foreground flex-grow">
                    {service.description}
                  </p>
                  <Button
                    variant="link"
                    asChild
                    className="p-0 h-auto mt-4 font-bold self-start"
                  >
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button asChild variant="outline">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
       <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid items-center gap-8 md:grid-cols-2">
              <div className="space-y-6">
                  <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
                    Why Patients Choose <br /> Noble Health
                  </h2>
                <ul className="grid gap-6 text-lg">
                  <ScrollAnimation direction="left">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                      <div>
                        <span className="font-bold">Customer Service First:</span> Our kind, caring, and professional healthcare providers are easy to talk to and prioritize your needs.
                      </div>
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation direction="left" delay={200}>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                      <div>
                        <span className="font-bold">Convenience:</span> Visit our local clinic in Katy, or choose the flexibility of telehealth or in-home visits available throughout Houston and the surrounding areas.
                      </div>
                    </li>
                  </ScrollAnimation>
                  <ScrollAnimation direction="left" delay={400}>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                      <div>
                        <span className="font-bold">Personalized Medicine:</span>{' '}
                        Every treatment plan is tailored to your unique needs and long-term
                        health goals.
                      </div>
                    </li>
                  </ScrollAnimation>
                </ul>
              </div>
              <ScrollAnimation direction="right">
                <div className="flex justify-center">
                  <Image
                    src="https://placehold.co/550x400.png"
                    width="550"
                    height="400"
                    alt="mobile healthcare provider Houston Noble Health House Calls"
                    data-ai-hint="mobile healthcare provider"
                    className="mx-auto aspect-[4/3] rounded-xl object-cover shadow-xl"
                    loading="lazy"
                  />
                </div>
              </ScrollAnimation>
            </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section id="service-area" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:gap-16">
           <div className="flex justify-center">
            <Image
              src="https://placehold.co/550x400.png"
              width="550"
              height="400"
              alt="Noble Health House Calls service area map Houston Katy Sugar Land Woodlands"
              data-ai-hint="map houston"
              className="mx-auto aspect-[4/3] overflow-hidden rounded-xl object-cover shadow-xl"
              loading="lazy"
            />
          </div>
           <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
              Serving the Entire State of Texas
            </h2>
            <p className="text-lg text-muted-foreground">
              We proudly offer telehealth services across the entire state of Texas. Our in-home house calls are available to patients in the Greater Houston area, including Houston, Katy, Sugar Land, The Woodlands, Pearland, and surrounding communities.
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                'Houston',
                'Katy',
                'Sugar Land',
                'The Woodlands',
                'Pearland',
              ].map(city => (
                <div
                  key={city}
                  className="flex items-center gap-2 bg-secondary text-secondary-foreground rounded-full px-4 py-2"
                >
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section id="reviews" className="w-full py-16 md:py-24 lg:py-32 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Patients Say
            </h2>
            <div className="flex items-center justify-center gap-2 text-2xl font-bold text-amber-500">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Real reviews from real patients in the Houston area.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl">
            <GoogleReviews />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="w-full py-16 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground md:text-xl/relaxed">
              Find answers to common questions about our concierge medical
              services.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <EnhancedFaq
              faqData={generalFaq}
              enhancedFaqContent={enhancedFaqContent}
            />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-3xl font-bold">
            Ready for a Better Healthcare Experience?
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Skip the clinic. Get expert medical care in the comfort of your home
            across Houston, Katy, Sugar Land & The Woodlands and more.
          </p>
          <div className="mt-8">
            <Button
              asChild
              size="lg"
              className="font-bold shadow-md hover:shadow-lg transition-shadow"
            >
              <Link href="/contact">Book Your House Call Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
