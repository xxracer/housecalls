import Image from 'next/image';
import { Mail, Printer } from 'lucide-react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Patient Referrals',
  description: 'Information for healthcare providers on how to refer a patient to Noble Health House Calls. Fax or email face sheets to us.',
  openGraph: {
    title: 'Referrals | Noble Health House Calls',
    description: 'Instructions for patient referrals.',
  },
};

export default function ReferralsPage() {
  return (
    <div className="bg-background">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Patient Referrals
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              We appreciate your trust in our care. Please find the necessary information below to refer a patient.
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
                  src="https://static.wixstatic.com/media/c5947c_61b9bd5170fc41c38f196cae95ef2801~mv2.jpg"
                  alt="A healthcare professional reviewing patient documents"
                  data-ai-hint="healthcare professional documents"
                  width={400}
                  height={250}
                  className="rounded-lg object-cover shadow-lg"
                />
              </div>

              {/* Info */}
              <div className="space-y-8">
                 <div>
                  <h2 className="font-headline text-3xl font-bold">How to Refer</h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    To refer a patient, please send the face sheets to our secure fax or email address.
                  </p>
                </div>
                 <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Send Face Sheets To:</h3>
                      <a href="mailto:info@noblehousecalls.com" className="text-muted-foreground hover:text-primary">
                        info@noblehousecalls.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <Printer className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">FAX:</h3>
                      <p className="text-muted-foreground">
                        832 - 772 - 4013
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 max-w-2xl mx-auto">
                <h2 className="font-headline text-3xl font-bold text-center mb-8">Or Book an Appointment Directly</h2>
                <div className="bg-card rounded-lg p-8 border shadow-sm">
                    <ContactForm />
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
