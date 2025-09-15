import type { Metadata } from 'next';
import Script from 'next/script';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Noble Health House Calls – Concierge Medicine in Houston & Texas',
    template: '%s | Noble Health House Calls',
  },
  description: 'Noble Health House Calls provides testosterone therapy, weight loss programs, IV therapy & telemedicine across Houston & Texas for busy professionals and families.',
  openGraph: {
    title: 'Noble Health House Calls – Concierge Medicine in Houston & Texas',
    description: 'Personalized in-home medical care including testosterone therapy, weight loss, IV therapy, and primary care.',
    url: 'https://noble-health-concierge.com',
    siteName: 'Noble Health House Calls',
    images: [
      {
        url: 'https://static.wixstatic.com/media/c5947c_a3ede859582143fbb81ce4775f1eb29d~mv2.webp', 
        width: 1200,
        height: 630,
        alt: 'A compassionate Noble Health doctor providing in-home care in Houston.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noble Health House Calls | Concierge Medical Care in Houston',
    description: 'Get convenient, professional medical care at home. Specializing in testosterone therapy, weight loss, and IV therapy.',
    images: ['https://static.wixstatic.com/media/c5947c_a3ede859582143fbb81ce4775f1eb29d~mv2.webp'], 
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Noble Health House Calls",
  "image": "https://www.mynoblehousecalls.com/assets/logo.png",
  "url": "https://www.mynoblehousecalls.com",
  "telephone": "+1-832-263-1582",
  "priceRange": "$$",
  "description": "Noble Health House Calls provides personalized medical care at home in Houston and surrounding areas. Services include primary care, testosterone therapy, weight loss programs, IV therapy, telemedicine, and transitional care.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Houston Area",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "29.7604",
    "longitude": "-95.3698"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Houston"
    },
    {
      "@type": "City",
      "name": "Sugar Land"
    },
    {
      "@type": "City",
      "name": "Katy"
    },
    {
      "@type": "City",
      "name": "The Woodlands"
    },
    {
      "@type": "City",
      "name": "Pearland"
    }
  ],
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/mynoblehealth",
    "https://www.instagram.com/mynoblehealth"
  ]
};

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
