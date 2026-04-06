import type { Metadata } from 'next';
import { MapPin, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Service Areas | House Call Doctor Houston, Katy, Sugar Land & The Woodlands',
  description: 'Noble Health House Calls serves Houston, Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring, Tomball, League City, Missouri City, Friendswood, Pasadena and all Greater Houston areas. In-home medical care at your door. Call (832) 263-1582.',
  keywords: 'house call doctor service areas Houston, mobile doctor Katy TX, home visit doctor Sugar Land, concierge medicine The Woodlands, Noble Health service area, medical house call near me Houston Texas',
  openGraph: {
    title: 'Service Areas | House Call Doctor Houston, Katy, Sugar Land & The Woodlands',
    description: 'Serving Houston, Katy, Sugar Land, The Woodlands, Pearland, Cypress, Spring, Tomball, League City, Missouri City, Friendswood, Pasadena and all Greater Houston areas.',
    url: 'https://www.mynoblehousecalls.com/service-areas',
    siteName: 'Noble Health House Calls',
    images: [{
      url: 'https://static.wixstatic.com/media/c5947c_f9c95d60292c47a3873fd1b9d8f96982~mv2.png',
      width: 1200,
      height: 630,
      alt: 'Noble Health House Calls service area map Houston Texas',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Areas | House Call Doctor Houston TX',
    description: 'In-home medical care across Greater Houston and statewide Texas telehealth.',
    images: ['https://static.wixstatic.com/media/c5947c_f9c95d60292c47a3873fd1b9d8f96982~mv2.png'],
  },
};

const houstonNeighborhoods = [
  'Memorial', 'River Oaks', 'The Heights', 'Montrose', 'Midtown', 'Museum District',
  'Galleria/Uptown', 'Downtown Houston', 'East Houston', 'West Houston', 'North Houston',
  'South Houston', 'Greenway Plaza', 'Medical Center', 'Rice Village', 'West University',
  'Bellaire', 'Meyerland', 'Sharpstown', 'Alief', 'Westchase', 'Energy Corridor',
  'Clear Lake', 'Bay Area', 'NASA/Clear Lake', 'El Lago', 'Seabrook', 'Taylor Lake Village',
  'Nassau Bay', 'Webster', 'Brookside Village'
];

const greaterHoustonCities = [
  { name: 'Katy', description: 'West Houston area, known for excellent schools and family communities' },
  { name: 'Sugar Land', description: 'Fort Bend County, diverse community with top-rated schools' },
  { name: 'The Woodlands', description: 'Montgomery County, master-planned community north of Houston' },
  { name: 'Pearland', description: 'South of Houston in Brazoria County, fast-growing suburb' },
  { name: 'Cypress', description: 'Northwest Harris County, rapidly growing area' },
  { name: 'Spring', description: 'North of Houston, includes The Woodlands area' },
  { name: 'Tomball', description: 'Northwest Harris County, historic small town' },
  { name: 'League City', description: 'Galveston County, between Houston and Galveston' },
  { name: 'Missouri City', description: 'Fort Bend/Harris County, diverse suburb' },
  { name: 'Friendswood', description: 'Galveston/Harris County, family-friendly community' },
  { name: 'Pasadena', description: 'Harris County, historic city southeast of Houston' },
  { name: 'Baytown', description: 'East Harris County, industrial and residential area' },
  { name: 'Humble', description: 'Northeast Harris County, near George Bush Intercontinental Airport' },
  { name: 'Kingwood', description: 'Northeast Houston, "The Livable Forest" community' },
  { name: 'Atascocita', description: 'Northeast Harris County, growing suburb' },
  { name: 'Jersey Village', description: 'Northwest Harris County, small city' },
  { name: 'Stafford', description: 'Fort Bend County, centrally located suburb' },
  { name: 'Meadows Place', description: 'Fort Bend County, small residential city' },
  { name: 'Hedwig Village', description: 'Inner Houston area, upscale residential' },
  { name: 'Bunker Hill', description: 'West Houston, Memorial area' },
  { name: 'Piney Point Village', description: 'West Houston, exclusive residential area' },
  { name: 'Hunters Creek Village', description: 'West Houston, Memorial Villages' },
  { name: 'Conroe', description: 'Montgomery County, north of The Woodlands' },
  { name: 'Galveston', description: 'Galveston Island, historic coastal city' },
  { name: 'Texas City', description: 'Galveston County, coastal industrial city' },
  { name: 'La Marque', description: 'Galveston County, between Texas City and Dickinson' },
  { name: 'Dickinson', description: 'Galveston County, Bay Area community' },
  { name: 'Alvin', description: 'Brazoria County, south of Pearland' },
  { name: 'Manvel', description: 'Brazoria County, growing southern suburb' },
  { name: 'Angleton', description: 'Brazoria County seat, south Houston area' },
  { name: 'Lake Jackson', description: 'Brazoria County, planned community' },
  { name: 'Clute', description: 'Brazoria County, near Lake Jackson' },
  { name: 'Richmond', description: 'Fort Bend County seat, west of Houston' },
  { name: 'Rosenberg', description: 'Fort Bend County, historic railroad town' },
  { name: 'Fulshear', description: 'Fort Bend County, rapidly growing master-planned community' },
  { name: 'Seabrook', description: 'Galveston County, Clear Lake area' },
];

const serviceTypes = [
  {
    title: 'In-Home House Calls',
    description: 'Our licensed providers come directly to your home for comprehensive medical care. <strong>Available exclusively for homebound patients</strong> — those with limited mobility who cannot easily leave their homes.',
    areas: 'Greater Houston area only (Harris, Fort Bend, Montgomery Counties)'
  },
  {
    title: 'Telehealth Services',
    description: 'Virtual video consultations from the comfort of your home, office, or anywhere in Texas. Perfect for follow-ups, medication management, primary care, and more. <strong>First visit for new patients is telehealth.</strong>',
    areas: 'Available statewide Texas'
  },
  {
    title: 'Clinic Visits',
    description: 'Visit our convenient clinic location in Katy for in-person appointments. A great option if you prefer face-to-face care or need services that require physical presence.',
    areas: '1618 S Mason Rd, Katy, TX 77450'
  }
];

export default function ServiceAreasPage() {
  return (
    <div className="bg-background">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Service Areas
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-muted-foreground">
              Noble Health House Calls brings doctors to your door throughout Greater Houston and provides telehealth services across the entire state of Texas.
            </p>
          </div>
        </section>

        {/* Service Types Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl font-bold text-center mb-12">
              How We Serve You
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {serviceTypes.map((service, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border shadow-sm">
                  <h3 className="font-headline text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <CheckCircle className="h-5 w-5" />
                    <span>{service.areas}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Houston Neighborhoods Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl font-bold text-center mb-4">
              Houston Neighborhoods & Communities
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              We proudly serve all Houston neighborhoods, from Memorial and River Oaks to the Medical Center and Clear Lake area.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {houstonNeighborhoods.map((neighborhood) => (
                <div
                  key={neighborhood}
                  className="flex items-center gap-2 bg-background text-foreground rounded-full px-4 py-2 border"
                >
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{neighborhood}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Greater Houston Cities Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl font-bold text-center mb-4">
              Greater Houston Cities & Suburbs
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our house call doctors serve patients throughout Harris County, Fort Bend County, Montgomery County, Galveston County, Brazoria County, and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {greaterHoustonCities.map((city) => (
                <div
                  key={city.name}
                  className="bg-card rounded-lg p-4 border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-lg">{city.name}</h3>
                      <p className="text-sm text-muted-foreground">{city.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Texas Telehealth Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl font-bold mb-4">
              Telehealth Across All of Texas
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              In addition to our in-home house calls in the Greater Houston area, we offer convenient telehealth services to patients anywhere in Texas. Connect with our providers from the comfort of your home, no matter where you are in the Lone Star State.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Dallas', 'Fort Worth', 'Austin', 'San Antonio', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Laredo', 'Lubbock', 'Irving', 'Garland', 'Amarillo', 'Grand Prairie', 'Brownsville', 'McKinney', 'Frisco', 'Pasadena TX', 'Mesquite', 'Killeen'].map((city) => (
                <div
                  key={city}
                  className="flex items-center gap-2 bg-white text-foreground rounded-full px-4 py-2 border"
                >
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl font-bold">
              Ready to Schedule Your House Call?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Contact us today to book your appointment. Same-day and next-day appointments available.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="font-bold shadow-md hover:shadow-lg transition-shadow">
                <Link href="/contact">Book Your Appointment</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="font-bold">
                <a href="tel:8322631582">
                  <Phone className="mr-2 h-5 w-5" />
                  (832) 263-1582
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
