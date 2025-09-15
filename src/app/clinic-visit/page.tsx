import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Visit Our Clinic',
  description: 'Find our clinic location and book your visit. We are conveniently located to serve the greater Houston area.',
  openGraph: {
    title: 'Noble Health House Calls Clinic Location',
    description: 'Find our clinic location and schedule your appointment.',
  },
};

export default function ClinicVisitPage() {
  return (
    <div className="bg-background">
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
                  Our Location
                </h2>
                <p className="text-lg text-muted-foreground">
                  You can find us at the following address. We have ample parking and are easily accessible for your convenience. We look forward to seeing you.
                </p>
                 <div className="bg-secondary p-6 rounded-lg">
                    <h3 className="font-semibold text-lg">Address</h3>
                    <p className="text-muted-foreground mt-2">
                    1618 S Mason Rd, Katy Texas 77450
                    </p>
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
