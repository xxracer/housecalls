import Image from 'next/image';
import { CheckCircle, Heart, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Noble Health | House Call Doctors Houston, Katy & Sugar Land TX',
  description: 'Meet the Noble Health House Calls team serving Houston, Katy, Sugar Land & The Woodlands. Our nurse practitioners and physicians provide in-home primary care, testosterone therapy, weight loss programs & IV therapy across Greater Houston.',
  keywords: 'about Noble Health Houston, house call doctors Katy TX, mobile medical care Sugar Land, The Woodlands concierge medicine, Houston area nurse practitioners, Jessica Ives NP, Dr. Vianney Uzoma',
  openGraph: {
    title: 'About Noble Health House Calls | Houston Concierge Medicine',
    description: 'Meet our team of experienced providers delivering in-home medical care across Houston, Katy, Sugar Land, The Woodlands & Greater Texas.',
    url: 'https://www.mynoblehousecalls.com/about',
    siteName: 'Noble Health House Calls',
    images: [{
      url: 'https://static.wixstatic.com/media/c5947c_f679f04c1ece4cdda47896a875acf76d~mv2.png',
      alt: 'Noble Health House Calls medical team serving Houston Texas area',
      dataAiHint: 'medical team portrait Houston'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Noble Health | House Call Doctors Houston',
    description: 'Meet our team providing in-home medical care across Houston, Katy, Sugar Land & The Woodlands.',
    images: ['https://static.wixstatic.com/media/c5947c_f679f04c1ece4cdda47896a875acf76d~mv2.png'],
  },
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary/5 py-24 sm:py-32 lg:py-40">
           <div className="container mx-auto px-4 text-center">
             <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Modern Medicine, Traditional Values
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
              Noble Health House Calls was founded on the belief that healthcare should be personal, convenient, and uncompromising in its quality. Based in Katy and serving the Greater Houston area, we bring the doctor's office to you — whether you're in Houston, Katy, Sugar Land, The Woodlands, Pearland, or surrounding communities. Our house call doctors and telehealth providers deliver expert medical care directly to Texas homes and businesses.
            </p>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  A Better Way to Access Healthcare
                </h2>
                <p className="text-lg text-muted-foreground">
                  Noble Health House Calls is a <strong>nurse practitioner (NP) group with a supervising physician</strong>, dedicated to providing accessible healthcare to the Greater Houston area and beyond. Our founders, a group of experienced medical providers, saw a growing need for more flexible care options. Busy professionals on Westheimer and the Energy Corridor struggled to find time for appointments, families in Katy and Sugar Land found it challenging to coordinate visits, and patients with mobility issues throughout Greater Houston faced significant hurdles navigating Texas Medical Center traffic and crowded waiting rooms.
                </p>
                <p className="text-lg text-muted-foreground">
                  We knew there was a better way. By reviving the tradition of the house call and enhancing it with modern technology like telemedicine, we've created a service that fits your life in Houston and across Texas. Our NP-led team with physician supervision provides comprehensive care including primary care, testosterone therapy, medical weight loss, IV therapy, and transitional care. We build lasting relationships with our patients throughout Harris County, Fort Bend County, and Montgomery County, focusing on personalized treatment plans and long-term health and wellness.
                </p>
              </div>
              <div className="flex justify-center">
                 <Image
                  src="https://static.wixstatic.com/media/c5947c_f679f04c1ece4cdda47896a875acf76d~mv2.png"
                  alt="A collage of Noble Health doctors interacting with patients in their homes."
                  data-ai-hint="doctor patient collage"
                  width={550}
                  height={550}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Meet Our Team
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Our dedicated professionals are the heart of Noble Health House Calls.
              </p>
            </div>

            {/* Jessica Ives Section */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
              <div className="flex justify-center">
                <Image
                  src="https://static.wixstatic.com/media/c5947c_23eee6d3b75f47f6bd9beef789882c25~mv2.png"
                  alt="Jessica Ives, FNP-C"
                  width={450}
                  height={600}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h3 className="font-headline text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Jessica Ives,  NP
                </h3>
                <p className="text-lg text-muted-foreground">
                  is a highly skilled nurse practitioner specializing in men’s health, medical weight loss, and comprehensive primary care. She is dedicated to providing personalized, evidence-based treatments that help patients achieve optimal health and long-term wellness. Jessica’s compassionate approach empowers her patients to take control of their health with confidence and support.
                </p>
              </div>
              
            </div>

            {/* Dr. Uzoma Vianney Section */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
               <div className="flex justify-center lg:order-first">
                <Image
                  src="https://static.wixstatic.com/media/c5947c_ba9948f3b7514cb7b1aefa90dd8418b5~mv2.png"
                  alt="Dr. Uzoma Vianney"
                  width={450}
                  height={450}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
              <div className="space-y-6 lg:order-last">
                <h3 className="font-headline text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Dr. Vianney Uzoma, DNP, FNP
                </h3>
                <p className="text-lg text-muted-foreground">
                  I’m a dual-certified Family Nurse Practitioner and Psychiatric Mental Health Nurse Practitioner, passionate about delivering whole-person care that’s clinically sound and emotionally attuned. I believe health education should be clear, actional and a little fun. My goal is to bring a calm, practical approach rooted in evidence-based medicine and compassionate listening. I go from blood pressure checks to brain fog battles. I’ve got you. Whole-person care is my jam.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="bg-secondary py-20 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
                Our Core Principles
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="text-center p-6">
                <Heart className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 font-headline text-xl font-semibold">Patient-First</h3>
                <p className="mt-2 text-muted-foreground">
                  Your needs, comfort, and health goals are at the center of everything we do.
                </p>
              </div>
              <div className="text-center p-6">
                <CheckCircle className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 font-headline text-xl font-semibold">Clinical Excellence</h3>
                <p className="mt-2 text-muted-foreground">
                  We adhere to the highest standards of medical practice, ensuring you receive expert care.
                </p>
              </div>
              <div className="text-center p-6">
                <Users className="mx-auto h-12 w-12 text-primary" />
                <h3 className="mt-4 font-headline text-xl font-semibold">Unmatched Convenience</h3>
                <p className="mt-2 text-muted-foreground">
                  We believe quality healthcare should be accessible and fit seamlessly into your life.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
