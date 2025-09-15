import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Facebook, Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/">
               <Image src="https://static.wixstatic.com/media/c5947c_2d862695958c47c789944f7026e540fe~mv2.png" alt="Noble Health House Calls Logo" width={180} height={40} />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Concierge medical care at your home.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h3 className="font-headline font-semibold uppercase text-foreground">Services</h3>
              <nav className="mt-4 flex flex-col space-y-2">
                <Link href="/services/testosterone-therapy" className="text-sm text-muted-foreground hover:text-primary">Testosterone Therapy</Link>
                <Link href="/services/weight-loss" className="text-sm text-muted-foreground hover:text-primary">Weight Loss</Link>
                <Link href="/services/iv-therapy" className="text-sm text-muted-foreground hover:text-primary">IV Therapy</Link>
                <Link href="/services/primary-care" className="text-sm text-muted-foreground hover:text-primary">Primary Care</Link>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary">All Services</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-headline font-semibold uppercase text-foreground">Quick Links</h3>
              <nav className="mt-4 flex flex-col space-y-2">
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About</Link>
                <Link href="/#faq" className="text-sm text-muted-foreground hover:text-primary">FAQs</Link>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact Us</Link>
              </nav>
            </div>
            <div>
              <h3 className="font-headline font-semibold uppercase text-foreground">Contact Us</h3>
              <div className="mt-4 space-y-3 text-sm text-muted-foreground">
                 <a href="tel:8322631582" className="flex items-center gap-2 hover:text-primary">
                  <Phone className="h-4 w-4" />
                  <span>(832) 263-1582</span>
                </a>
                 <a href="mailto:info@mynoblehousecalls.com" className="flex items-center gap-2 hover:text-primary">
                  <Mail className="h-4 w-4" />
                  <span>info@mynoblehousecalls.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Noble Health House Calls – Concierge Medicine in Houston & Texas</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
