import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Check, Plus, Minus } from 'lucide-react';
import type { Metadata } from 'next';
import { Icon } from '@/components/icons';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} at Home in Houston & Texas`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Noble Health House Calls`,
      description: service.longDescription,
      images: [
        {
          url: service.image,
          alt: service.alt,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const TestosteroneTherapySchema = {
  "@context": "https://schema.org",
  "@type": "MedicalTherapy",
  "name": "Testosterone Replacement Therapy (TRT)",
  "alternateName": "TRT, Hormone Replacement for Men",
  "description": "Medically supervised Testosterone Replacement Therapy to treat symptoms of low testosterone, including fatigue, low libido, and loss of muscle mass. Delivered conveniently at your home in the Houston area.",
  "medicalSpecialty": "Endocrinology",
  "keywords": "Testosterone Therapy, TRT, Low Testosterone, Andropause, Men's Health, Hormone Therapy Houston",
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Noble Health House Calls"
  }
};

const WeightLossSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalTherapy",
      "name": "Medical Weight Loss with Semaglutide",
      "description": "A comprehensive weight loss program featuring Semaglutide (the active ingredient in Ozempic® and Wegovy®) to help control appetite and achieve significant weight loss under medical supervision.",
      "medicalSpecialty": "Bariatric medicine",
      "keywords": "Weight Loss, Medical Weight Loss, Semaglutide, Ozempic, Wegovy, Weight Loss Clinic Houston",
      "drug": {
        "@type": "Drug",
        "name": "Semaglutide (Ozempic®/Wegovy®)",
        "activeIngredient": "Semaglutide",
        "drugClass": "GLP-1 Receptor Agonist",
        "description": "A prescription medication used for weight management and blood sugar control by mimicking a hormone that targets areas of the brain involved in appetite regulation.",
        "availableStrength": {
          "@type": "DrugStrength",
          "strengthValue": "Varies by prescription"
        },
        "prescriptionStatus": "PrescriptionOnly"
      },
       "provider": {
        "@type": "MedicalBusiness",
        "name": "Noble Health House Calls"
      }
    }
  ]
};

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const getServiceSchema = () => {
    switch(params.slug) {
      case 'testosterone-therapy':
        return TestosteroneTherapySchema;
      case 'weight-loss':
        return WeightLossSchema;
      default:
        return null;
    }
  }

  const serviceSchema = getServiceSchema();

  return (
    <div className="bg-background">
      {serviceSchema && (
        <Script
          id={`${params.slug}-schema`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 bg-primary/5">
          <div className="container mx-auto px-4 text-center z-10 relative">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-background shadow-md">
                 <Icon name={service.icon} className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              {service.title} at Home in Houston & Texas
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
              {service.description}
            </p>
          </div>
        </section>

        {/* Service Details Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <Image
                  src={service.image}
                  alt={service.alt}
                  data-ai-hint={service.imageHint}
                  width={600}
                  height={450}
                  className="w-full rounded-lg object-cover shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold">
                  Detailed Benefits of {service.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {service.longDescription}
                </p>
                <div>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-lg text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        {service.faq.length > 0 && (
          <section className="bg-secondary py-16 sm:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-center font-headline text-3xl font-bold mb-8">
                  Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {service.faq.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="bg-background rounded-lg mb-4 px-6 shadow-sm border">
                      <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline group">
                         <span className="flex-1">{item.question}</span>
                         <div className="relative h-6 w-6 ml-4">
                            <Plus className="h-6 w-6 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
                            <Minus className="absolute inset-0 h-6 w-6 shrink-0 transition-transform duration-200 opacity-0 group-data-[state=open]:opacity-100" />
                         </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground pb-6">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>
        )}
        
        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Schedule your {service.title} consultation today and let us bring expert healthcare to you.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="font-bold shadow-md hover:shadow-lg transition-shadow">
                <Link href="/contact">Book an Appointment</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
