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

  const baseTitle = `${service.title} | House Call Doctor Houston TX`;
  const locationSpecificDesc = `${service.description} Available in Houston, Katy, Sugar Land, The Woodlands, Pearland & throughout Greater Houston. Same-day appointments available.`;

  const serviceKeywords = {
    'testosterone-therapy': "testosterone therapy Houston, TRT Houston, men's health clinic Katy, low testosterone treatment Sugar Land, hormone therapy The Woodlands",
    'weight-loss': "weight loss clinic Houston, Ozempic Houston, Wegovy Katy, Semaglutide Sugar Land, medical weight loss The Woodlands, weight loss doctor near me",
    'iv-therapy': 'IV therapy Houston, vitamin drip Katy, IV hydration Sugar Land, mobile IV therapy The Woodlands, IV vitamin therapy near me',
    'primary-care': 'primary care doctor Houston, family medicine Katy, home visit doctor Sugar Land, concierge medicine The Woodlands, house call physician near me',
    'telehealth': 'telehealth Houston, virtual doctor visit Texas, online doctor consultation Katy, telemedicine Sugar Land, virtual healthcare Houston',
    'transitional-care': 'transitional care Houston, home health coordination Katy, post-hospital care Sugar Land, care coordination The Woodlands'
  };

  return {
    title: baseTitle,
    description: locationSpecificDesc,
    keywords: serviceKeywords[params.slug as keyof typeof serviceKeywords] || `${service.title} Houston`,
    openGraph: {
      title: `${service.title} | House Call Doctor Houston TX | Noble Health`,
      description: locationSpecificDesc,
      url: `https://www.mynoblehousecalls.com/services/${service.slug}`,
      siteName: 'Noble Health House Calls',
      images: [
        {
          url: service.image,
          alt: `${service.alt} in Houston Texas - Noble Health House Calls`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Houston House Call Doctor`,
      description: locationSpecificDesc,
      images: [service.image],
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const getTestosteroneTherapySchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalTherapy",
      "name": "Testosterone Replacement Therapy (TRT) Houston",
      "alternateName": "TRT Houston, Hormone Replacement for Men Katy, Low T Treatment Sugar Land",
      "description": "Medically supervised Testosterone Replacement Therapy to treat symptoms of low testosterone, including fatigue, low libido, and loss of muscle mass. Delivered conveniently at your home in Houston, Katy, Sugar Land, The Woodlands, and throughout Greater Houston.",
      "medicalSpecialty": "Endocrinology",
      "keywords": "Testosterone Therapy Houston, TRT Katy, Low Testosterone Treatment Sugar Land, Andropause, Men's Health Houston, Hormone Therapy The Woodlands, Male Hormone Replacement Texas",
      "areaServed": [
        { "@type": "City", "name": "Houston" },
        { "@type": "City", "name": "Katy" },
        { "@type": "City", "name": "Sugar Land" },
        { "@type": "City", "name": "The Woodlands" },
        { "@type": "City", "name": "Pearland" }
      ],
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Noble Health House Calls",
        "telephone": "+1-832-263-1582",
        "areaServed": { "@type": "State", "name": "Texas" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "TRT Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Initial TRT Consultation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Lab Work & Hormone Testing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ongoing TRT Monitoring" } }
        ]
      }
    }
  ]
});

const getWeightLossSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalTherapy",
      "name": "Medical Weight Loss Program Houston",
      "alternateName": "Weight Loss Clinic Katy, Ozempic Houston, Wegovy Sugar Land, Semaglutide The Woodlands",
      "description": "A comprehensive medical weight loss program featuring GLP-1 medications including Semaglutide (Ozempic®, Wegovy®), Tirzepatide, and other prescription options. Under medical supervision at your home in Houston, Katy, Sugar Land, The Woodlands & Greater Texas.",
      "medicalSpecialty": "Bariatric medicine",
      "keywords": "Weight Loss Houston, Medical Weight Loss Katy, Semaglutide Houston, Ozempic Sugar Land, Wegovy The Woodlands, Weight Loss Clinic Pearland, GLP-1 Houston, Tirzepatide Texas",
      "areaServed": [
        { "@type": "City", "name": "Houston" },
        { "@type": "City", "name": "Katy" },
        { "@type": "City", "name": "Sugar Land" },
        { "@type": "City", "name": "The Woodlands" },
        { "@type": "City", "name": "Pearland" }
      ],
      "drug": {
        "@type": "Drug",
        "name": "Semaglutide (Ozempic®/Wegovy®)",
        "activeIngredient": "Semaglutide",
        "drugClass": "GLP-1 Receptor Agonist",
        "description": "A prescription medication used for weight management and blood sugar control by mimicking a hormone that targets areas of the brain involved in appetite regulation.",
        "prescriptionStatus": "PrescriptionOnly"
      },
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Noble Health House Calls",
        "telephone": "+1-832-263-1582",
        "areaServed": { "@type": "State", "name": "Texas" }
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Weight Loss Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Weight Loss Consultation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "GLP-1 Prescription Management" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ongoing Weight Monitoring" } }
        ]
      }
    }
  ]
});

const getIVTherapySchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalTherapy",
      "name": "IV Vitamin Therapy Houston",
      "alternateName": "IV Drip Houston, IV Hydration Katy, Vitamin Infusion Sugar Land",
      "description": "Professional IV vitamin therapy and hydration services delivered at your home in Houston, Katy, Sugar Land, and The Woodlands. Customized IV drips for immunity, energy, recovery, and wellness.",
      "medicalSpecialty": "Nutritional support",
      "keywords": "IV Therapy Houston, IV Drip Katy, Vitamin Infusion Sugar Land, IV Hydration The Woodlands, Mobile IV Houston, IV Vitamin Therapy Texas",
      "areaServed": [
        { "@type": "City", "name": "Houston" },
        { "@type": "City", "name": "Katy" },
        { "@type": "City", "name": "Sugar Land" },
        { "@type": "City", "name": "The Woodlands" }
      ],
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Noble Health House Calls",
        "telephone": "+1-832-263-1582"
      }
    }
  ]
});

const getPrimaryCareSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalTherapy",
      "name": "Primary Care at Home Houston",
      "alternateName": "Family Doctor Houston, House Call Physician Katy, Home Visit Doctor Sugar Land",
      "description": "Comprehensive primary care services delivered in your home throughout Houston, Katy, Sugar Land, and The Woodlands. Annual physicals, sick visits, chronic disease management, and preventive care.",
      "medicalSpecialty": "PrimaryCare",
      "keywords": "Primary Care Houston, Family Doctor Katy, House Call Physician Sugar Land, Home Visit Doctor The Woodlands, Concierge Medicine Houston",
      "areaServed": [
        { "@type": "City", "name": "Houston" },
        { "@type": "City", "name": "Katy" },
        { "@type": "City", "name": "Sugar Land" },
        { "@type": "City", "name": "The Woodlands" }
      ],
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Noble Health House Calls",
        "telephone": "+1-832-263-1582"
      }
    }
  ]
});

const getTelehealthSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalTherapy",
      "name": "Telehealth Services Houston Texas",
      "alternateName": "Virtual Doctor Houston, Telemedicine Katy, Online Doctor Visit Sugar Land",
      "description": "Secure virtual medical consultations via video call for patients throughout Texas. Perfect for follow-ups, medication management, and non-urgent health concerns.",
      "medicalSpecialty": "Telemedicine",
      "keywords": "Telehealth Houston, Virtual Doctor Texas, Telemedicine Katy, Online Doctor Visit Sugar Land, Virtual Healthcare The Woodlands",
      "areaServed": { "@type": "State", "name": "Texas" },
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Noble Health House Calls",
        "telephone": "+1-832-263-1582"
      }
    }
  ]
});

const getTransitionalCareSchema = () => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalTherapy",
      "name": "Transitional Care Houston",
      "alternateName": "Home Health Coordination Katy, Post-Hospital Care Sugar Land",
      "description": "Post-hospitalization transitional care and home health coordination serving Houston area patients. We work with 40+ home health agencies to ensure seamless care transitions.",
      "medicalSpecialty": "TransitionalCare",
      "keywords": "Transitional Care Houston, Home Health Coordination Katy, Post-Hospital Care Sugar Land, Care Management The Woodlands",
      "areaServed": [
        { "@type": "City", "name": "Houston" },
        { "@type": "City", "name": "Katy" },
        { "@type": "City", "name": "Sugar Land" },
        { "@type": "City", "name": "The Woodlands" }
      ],
      "provider": {
        "@type": "MedicalBusiness",
        "name": "Noble Health House Calls",
        "telephone": "+1-832-263-1582"
      }
    }
  ]
});

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const getServiceSchema = () => {
    switch(params.slug) {
      case 'testosterone-therapy':
        return getTestosteroneTherapySchema();
      case 'weight-loss':
        return getWeightLossSchema();
      case 'iv-therapy':
        return getIVTherapySchema();
      case 'primary-care':
        return getPrimaryCareSchema();
      case 'telehealth':
        return getTelehealthSchema();
      case 'transitional-care':
        return getTransitionalCareSchema();
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
