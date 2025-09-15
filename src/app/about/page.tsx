import Image from 'next/image';
import { CheckCircle, Heart, Users } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the mission, values, and dedicated team behind Noble Health House Calls. Our commitment is to provide compassionate, convenient, and professional in-home medical care in Houston and across Texas.',
  openGraph: {
    title: 'About Noble Health House Calls',
    description: 'Discover our mission to revolutionize healthcare by bringing expert medical care to your home.',
    images: [{
      url: 'https://placehold.co/1200x630.png',
      alt: 'The team of Noble Health House Calls professionals.',
      dataAiHint: 'medical team portrait'
    }],
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
              Noble Health House Calls was founded on the belief that healthcare should be personal, convenient, and uncompromising in its quality. We bring the doctor's office to you, wherever you are in Houston & Texas.
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
                  Our founders, a group of experienced medical providers, saw a growing need for more accessible healthcare. Busy professionals struggled to find time for appointments, families found it challenging to coordinate visits, and patients with mobility issues faced significant hurdles.
                </p>
                <p className="text-lg text-muted-foreground">
                  We knew there was a better way. By reviving the tradition of the house call and enhancing it with modern technology like telemedicine, we've created a service that fits your life. Our goal is to build lasting relationships with our patients, providing personalized care that focuses on long-term health and wellness, from men's health and weight loss to primary and transitional care.
                </p>
              </div>
              <div className="flex justify-center">
                 <Image
                  src="https://placehold.co/550x550.png"
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
              <div className="space-y-6">
                <h3 className="font-headline text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  Jessica Ives,  NP
                </h3>
                <p className="text-lg text-muted-foreground">
                  is a highly skilled nurse practitioner specializing in men’s health, medical weight loss, and comprehensive primary care. She is dedicated to providing personalized, evidence-based treatments that help patients achieve optimal health and long-term wellness. Jessica’s compassionate approach empowers her patients to take control of their health with confidence and support.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://static.wixstatic.com/media/c5947c_ea82e8710c0e4394afdfb84cc287c9a6~mv2.jpg"
                  alt="Jessica Ives, FNP-C"
                  width={450}
                  height={600}
                  className="rounded-xl object-cover shadow-lg"
                />
              </div>
            </div>

            {/* Dr. Uzoma Vianney Section */}
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 items-center">
               <div className="flex justify-center lg:order-first">
                <Image
                  src="https://static.wixstatic.com/media/c5947c_b3cac6cf612b4763a1d2a61869a1fe9c~mv2.jpg"
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
