import type { Metadata } from 'next';
import Script from 'next/script';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Noble Health House Calls | House Call Doctor Houston TX | Concierge Medicine',
    template: '%s | Noble Health House Calls Houston',
  },
  description: 'Noble Health House Calls brings doctors to your door in Houston, Katy, Sugar Land & The Woodlands. Primary care, testosterone therapy, weight loss (Ozempic, Wegovy), IV therapy & telehealth. Same-day appointments. Call (832) 263-1582.',
  keywords: [
    'house call doctor Houston',
    'mobile doctor Houston TX',
    'concierge medicine Houston',
    'primary care at home Houston',
    'testosterone therapy Houston',
    'weight loss clinic Houston',
    'Ozempic Houston',
    'Wegovy Houston',
    'Semaglutide Houston',
    'IV therapy Houston',
    'telehealth Houston Texas',
    'Noble Health House Calls Katy',
    'Sugar Land house call doctor',
    'The Woodlands mobile doctor',
    'home visit doctor near me',
    'doctor house call Houston TX',
  ].join(', '),
  authors: [{ name: 'Noble Health House Calls' }],
  creator: 'Noble Health House Calls',
  publisher: 'Noble Health House Calls',
  metadataBase: new URL('https://www.mynoblehousecalls.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Noble Health House Calls | House Call Doctor Houston TX | Concierge Medicine',
    description: 'Premium in-home medical care in Houston, Katy, Sugar Land & The Woodlands. Testosterone therapy, weight loss programs, IV therapy, primary care & telehealth. Most insurances accepted.',
    url: 'https://www.mynoblehousecalls.com',
    siteName: 'Noble Health House Calls',
    images: [
      {
        url: 'https://static.wixstatic.com/media/c5947c_a3ede859582143fbb81ce4775f1eb29d~mv2.webp',
        width: 1200,
        height: 630,
        alt: 'Noble Health house call doctor providing medical care at home in Houston Texas',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noble Health House Calls | House Call Doctor Houston TX',
    description: 'Get convenient, professional medical care at home in Houston. Testosterone therapy, weight loss (Ozempic, Wegovy), IV therapy & primary care. Call (832) 263-1582.',
    images: ['https://static.wixstatic.com/media/c5947c_a3ede859582143fbb81ce4775f1eb29d~mv2.webp'],
    creator: '@mynoblehealth',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'health',
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://www.mynoblehousecalls.com/#medicalbusiness",
    "name": "Noble Health House Calls",
    "alternateName": "Noble Health Concierge Medicine",
    "image": "https://www.mynoblehousecalls.com/assets/logo.png",
    "url": "https://www.mynoblehousecalls.com",
    "telephone": "+1-832-263-1582",
    "priceRange": "$$",
    "description": "Noble Health House Calls is a nurse practitioner (NP) group with physician supervision, providing flexible healthcare in Houston and across Texas. We offer in-home visits for homebound patients, telehealth visits statewide, and clinic appointments in Katy. Services include primary care, testosterone replacement therapy (TRT), medical weight loss (Ozempic, Wegovy, Semaglutide), IV vitamin therapy, and transitional care.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Katy Area",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "postalCode": "77494",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.7604",
      "longitude": "-95.3698"
    },
    "areaServed": [
      { "@type": "City", "name": "Houston", "sameAs": "https://en.wikipedia.org/wiki/Houston" },
      { "@type": "City", "name": "Katy", "sameAs": "https://en.wikipedia.org/wiki/Katy,_Texas" },
      { "@type": "City", "name": "Sugar Land", "sameAs": "https://en.wikipedia.org/wiki/Sugar_Land,_Texas" },
      { "@type": "City", "name": "The Woodlands", "sameAs": "https://en.wikipedia.org/wiki/The_Woodlands,_Texas" },
      { "@type": "City", "name": "Pearland", "sameAs": "https://en.wikipedia.org/wiki/Pearland,_Texas" },
      { "@type": "City", "name": "Pasadena", "sameAs": "https://en.wikipedia.org/wiki/Pasadena,_Texas" },
      { "@type": "City", "name": "League City", "sameAs": "https://en.wikipedia.org/wiki/League_City,_Texas" },
      { "@type": "City", "name": "Missouri City", "sameAs": "https://en.wikipedia.org/wiki/Missouri_City,_Texas" },
      { "@type": "City", "name": "Friendswood", "sameAs": "https://en.wikipedia.org/wiki/Friendswood,_Texas" },
      { "@type": "City", "name": "Cypress", "sameAs": "https://en.wikipedia.org/wiki/Cypress,_Texas" },
      { "@type": "City", "name": "Tomball", "sameAs": "https://en.wikipedia.org/wiki/Tomball,_Texas" },
      { "@type": "City", "name": "Spring", "sameAs": "https://en.wikipedia.org/wiki/Spring,_Texas" },
      { "@type": "State", "name": "Texas", "sameAs": "https://en.wikipedia.org/wiki/Texas" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday"],
        "opens": "09:00",
        "closes": "12:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/mynoblehealth",
      "https://www.instagram.com/mynoblehealth",
      "https://twitter.com/mynoblehealth",
      "https://www.linkedin.com/company/noble-health-house-calls"
    ],
    "medicalSpecialty": ["PrimaryCare", "ConciergeMedicine", "Men'sHealth", "WeightLoss"],
    "availableService": [
      { "@type": "MedicalTherapy", "name": "Testosterone Replacement Therapy" },
      { "@type": "MedicalTherapy", "name": "Medical Weight Loss Program" },
      { "@type": "MedicalTherapy", "name": "IV Vitamin Therapy" },
      { "@type": "MedicalTherapy", "name": "Primary Care at Home" },
      { "@type": "MedicalTherapy", "name": "Telehealth Services" },
      { "@type": "MedicalTherapy", "name": "Transitional Care" }
    ],
    "award": "Best of Katy Award Winner - Best Health Clinic",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "House Call Medical Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Testosterone Therapy" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Weight Loss Programs with Semaglutide/Wegovy/Ozempic" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "IV Hydration & Vitamin Therapy" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Primary Care Home Visits" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Virtual Telehealth Consultations" } }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Dr. Vianney Uzoma, DNP, FNP - Noble Health House Calls",
    "url": "https://www.mynoblehousecalls.com/about",
    "medicalSpecialty": ["PrimaryCare", "PsychiatricMentalHealth"],
    "areaServed": { "@type": "State", "name": "Texas" },
    "hasHealthPlanNetworkStatus": "InNetwork",
    "parentOrganization": {
      "@type": "MedicalOrganization",
      "name": "Noble Health House Calls"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": "Jessica Ives, NP - Noble Health House Calls",
    "url": "https://www.mynoblehousecalls.com/about",
    "medicalSpecialty": ["Men'sHealth", "WeightLoss", "PrimaryCare"],
    "areaServed": { "@type": "State", "name": "Texas" },
    "hasHealthPlanNetworkStatus": "InNetwork",
    "parentOrganization": {
      "@type": "MedicalOrganization",
      "name": "Noble Health House Calls"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Noble Health House Calls",
    "image": "https://www.mynoblehousecalls.com/assets/logo.png",
    "@id": "https://www.mynoblehousecalls.com/#localbusiness",
    "url": "https://www.mynoblehousecalls.com",
    "telephone": "+1-832-263-1582",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "29.7604",
      "longitude": "-95.3698"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/mynoblehealth",
      "https://www.instagram.com/mynoblehealth"
    ]
  }
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
        <Script
          id="medical-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">
        <Header />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
