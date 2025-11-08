import { Mail, Phone, Clock } from 'lucide-react';
import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Noble Health House Calls in Houston. We are here to answer your questions and schedule your next in-home visit for testosterone therapy, weight loss, and more.',
  openGraph: {
    title: 'Contact Noble Health House Calls | Houston, TX',
    description: 'Reach out to us for premium in-home medical care.',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
               Book An Appointment
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
              We're here to help. Fill out the form below or call us to schedule your appointment.
            </p>
          </div>
        </section>

        {/* Contact Form and Info Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-card rounded-lg p-8 border shadow-sm">
                <h2 className="font-headline text-3xl font-bold mb-6">  Book an appointment</h2>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-headline text-3xl font-bold">Contact Information</h2>
                  <p className="mt-2 text-lg text-muted-foreground">
                    You can also reach us directly via phone or email during business hours.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Phone</h3>
                      <a href="tel:8322631582" className="text-muted-foreground hover:text-primary">
                        (832) 263-1582
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Email</h3>
                      <a href="mailto:contact@noblehealth.com" className="text-muted-foreground hover:text-primary">
                         info@noblehousecalls.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 pt-1">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Same-day or next-day appointments available. Please call for availability.
                      </p>
                    </div>
                  </div>
                </div>
                 <div className="mt-8 bg-secondary p-6 rounded-lg">
                    <h3 className="font-semibold text-lg">Emergency?</h3>
                    <p className="text-muted-foreground mt-2">
                        If you are experiencing a life-threatening medical emergency, please call 911 immediately or go to the nearest emergency room.
                    </p>
                 </div>
              </div>

            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
