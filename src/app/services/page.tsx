import Link from 'next/link';
import Script from 'next/script';
import { services } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { Icon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Our Services',
  description: 'Explore at-home medical services from Noble Health in Houston, including Testosterone Therapy, Weight Loss, IV Therapy, Primary Care, Telehealth, and Transitional Care.',
  openGraph: {
    title: 'Services | Noble Health House Calls in Houston',
    description: 'Discover our full suite of personalized, in-home healthcare services.',
  },
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "name": "Noble Health House Calls",
      "url": "https://www.mynoblehousecalls.com",
      "serviceOffered": [
        {
          "@type": "MedicalTherapy",
          "name": "Testosterone Therapy",
          "url": "https://www.mynoblehousecalls.com/services/testosterone-therapy",
          "description": "Personalized testosterone replacement therapy for men’s health, boosting energy, muscle mass, and overall wellness with medical supervision.",
          "areaServed": {
            "@type": "Place",
            "name": "Houston, Texas and surrounding areas"
          }
        },
        {
          "@type": "MedicalTherapy",
          "name": "Weight Loss Program",
          "url": "https://www.mynoblehousecalls.com/services/weight-loss",
          "description": "Medical weight loss program with Semaglutide (Wegovy, Ozempic) injections, personalized guidance, accountability, and sustainable results.",
          "areaServed": {
            "@type": "Place",
            "name": "Houston, Texas and surrounding areas"
          }
        },
        {
          "@type": "MedicalTherapy",
          "name": "Primary Care at Home",
          "url": "https://www.mynoblehousecalls.com/services/primary-care",
          "description": "Convenient and personalized primary care delivered at home, covering check-ups, chronic condition management, and preventive health.",
          "areaServed": {
            "@type": "Place",
            "name": "Houston, Texas and surrounding areas"
          }
        },
        {
          "@type": "MedicalTherapy",
          "name": "IV Therapy",
          "url": "https://www.mynoblehousecalls.com/services/iv-therapy",
          "description": "Intravenous vitamin and nutrient therapy for hydration, immune support, energy boost, and overall wellness.",
          "areaServed": {
            "@type": "Place",
            "name": "Houston, Texas and surrounding areas"
          }
        },
        {
          "@type": "MedicalTherapy",
          "name": "Telehealth / Telemedicine",
          "url": "https://www.mynoblehousecalls.com/services/telehealth",
          "description": "Virtual medical consultations via video and mobile apps, making healthcare more accessible and convenient from home.",
          "areaServed": {
            "@type": "Place",
            "name": "Houston, Texas and surrounding areas"
          }
        },
        {
          "@type": "MedicalTherapy",
          "name": "Transitional Care",
          "url": "https://www.mynoblehousecalls.com/services/transitional-care",
          "description": "Post-hospitalization transitional care visits to monitor recovery, prevent readmissions, and support patients and families.",
          "areaServed": {
            "@type": "Place",
            "name": "Houston, Texas and surrounding areas"
          }
        }
      ]
    }
  ]
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
       <Script
          id="services-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Our Medical Services
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              Concierge care designed for your needs, delivered to your door in Houston & Texas.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto grid max-w-sm gap-8 sm:max-w-4xl sm:grid-cols-1 lg:max-w-5xl lg:grid-cols-2">
              {services.map((service) => (
                <Card key={service.slug} className="group flex flex-col overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="flex flex-row items-start gap-4 p-6">
                    <div className="rounded-lg bg-primary/10 p-3 text-primary mt-1">
                      <Icon name={service.icon} className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                      <p className="mt-2 text-muted-foreground">{service.description}</p>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 pt-0 mt-auto">
                    <Button variant="link" asChild className="p-0 h-auto font-bold text-base">
                      <Link href={`/services/${service.slug}`}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
