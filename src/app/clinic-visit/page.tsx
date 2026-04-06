import Image from 'next/image';
import Script from 'next/script';
import type { Metadata } from 'next';

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Noble Health House Calls - Katy Clinic",
  "image": "https://static.wixstatic.com/media/c5947c_a3ede859582143fbb81ce4775f1eb29d~mv2.webp",
  "url": "https://www.mynoblehousecalls.com/clinic-visit",
  "telephone": "+1-832-263-1582",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1618 S Mason Rd",
    "addressLocality": "Katy",
    "addressRegion": "TX",
    "postalCode": "77450",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.7581",
    "longitude": "-95.7531"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Saturday", "Sunday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "priceRange": "$$",
  "description": "Noble Health House Calls clinic in Katy, Texas providing in-person appointments for testosterone therapy, medical weight loss, IV therapy, and primary care. Serving Houston, Sugar Land, The Woodlands and Greater Houston area.",
  "areaServed": [
    { "@type": "City", "name": "Katy" },
    { "@type": "City", "name": "Houston" },
    { "@type": "City", "name": "Sugar Land" },
    { "@type": "City", "name": "The Woodlands" }
  ]
};

export const metadata: Metadata = {
  title: 'Clinic Location Katy TX | Visit Noble Health Houston',
  description: 'Visit our Noble Health House Calls clinic in Katy, TX (1618 S Mason Rd). Conveniently located near Houston, Sugar Land & The Woodlands. In-person appointments for testosterone therapy, weight loss, IV therapy & primary care. Call (832) 263-1582.',
  keywords: 'Noble Health clinic location Katy TX, house call doctor office Houston, medical clinic 1618 S Mason Rd, testosterone therapy clinic Katy, weight loss clinic Sugar Land area, IV therapy near me',
  openGraph: {
    title: 'Clinic Location Katy TX | Visit Noble Health Houston',
    description: 'Our clinic is located at 1618 S Mason Rd, Katy TX 77450. Serving Houston, Sugar Land, The Woodlands & Greater Houston area.',
    url: 'https://www.mynoblehousecalls.com/clinic-visit',
    siteName: 'Noble Health House Calls',
    images: [{
      url: 'https://static.wixstatic.com/media/c5947c_a3ede859582143fbb81ce4775f1eb29d~mv2.webp',
      width: 1200,
      height: 630,
      alt: 'Noble Health House Calls clinic location Katy Texas',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinic Location Katy TX | Noble Health',
    description: '1618 S Mason Rd, Katy TX 77450. In-person appointments available.',
    images: ['https://static.wixstatic.com/media/c5947c_a3ede859582143fbb81ce4775f1eb29d~mv2.webp'],
  },
};

export default function ClinicVisitPage() {
  return (
    <div className="bg-background">
      <Script
        id="clinic-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Visit Our Clinic
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              We welcome you to our primary clinic location for in-person consultations and treatments.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Image */}
              <div className="flex justify-center">
                <Image
                  src="https://static.wixstatic.com/media/c5947c_a3ede859582143fbb81ce4775f1eb29d~mv2.webp"
                  alt="The welcoming entrance to the Noble Health House Calls clinic."
                  data-ai-hint="clinic entrance"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>

              {/* Info */}
              <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold">
                  Our Katy Clinic Location
                </h2>
                <p className="text-lg text-muted-foreground">
                  Visit our Noble Health House Calls clinic conveniently located in Katy, Texas at 1618 S Mason Rd. Our clinic serves patients from Katy, Houston, Sugar Land, The Woodlands, Cypress, Fulshear, Richmond, Rosenberg, and all throughout the Greater Houston area.
                </p>
                <p className="text-lg text-muted-foreground">
                  We offer in-person appointments for testosterone therapy, medical weight loss (Ozempic, Wegovy, Semaglutide), IV vitamin therapy, primary care consultations, and transitional care coordination. Our clinic features comfortable private consultation rooms, on-site lab draw capabilities, and ample free parking.
                </p>
                <div className="bg-secondary p-6 rounded-lg">
                  <h3 className="font-semibold text-lg">Clinic Address</h3>
                  <p className="text-muted-foreground mt-2 text-xl font-medium">
                    1618 S Mason Rd<br />
                    Katy, Texas 77450
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    <strong>Landmarks nearby:</strong> Located in the Mason Creek Shopping Center, near Walmart Supercenter and H-E-B. Easy access from I-10 (Exit 743 - FM 1463/S Mason Rd).
                  </p>
                </div>
                <div className="bg-primary/5 p-6 rounded-lg">
                  <h3 className="font-semibold text-lg">Hours</h3>
                  <ul className="text-muted-foreground mt-2 space-y-1">
                    <li>Monday - Friday: 8:00 AM - 8:00 PM</li>
                    <li>Saturday - Sunday: 9:00 AM - 6:00 PM</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Map Section */}
        <section className="pb-16 sm:pb-24">
            <div className="container mx-auto px-4">
                 <div className="w-full h-[500px]">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.675431840548!2d-95.7530859!3d29.758105200000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86412744a7f3b26d%3A0x2f2a38ca1b003bcd!2sNoble%20Health%20House%20Calls!5e0!3m2!1ses!2sve!4v1755983875879!5m2!1ses!2sve"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg shadow-md"
                  ></iframe>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}
