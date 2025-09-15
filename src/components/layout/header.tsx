'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/services', label: 'Services' },
  { href: '/clinic-visit', label: 'Clinic Visit' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center">
          <Image src="https://static.wixstatic.com/media/c5947c_2d862695958c47c789944f7026e540fe~mv2.png" alt="Noble Health House Calls Logo" width={180} height={40} priority />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-md font-medium transition-colors hover:text-primary",
                pathname === link.href ? "text-primary" : "text-foreground/80"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
           <a href="tel:8322631582" className="flex items-center gap-2 font-semibold text-primary hover:opacity-80 transition-opacity">
            <Phone className="h-5 w-5" />
            <span>(832) 263-1582</span>
          </a>
          <Button asChild className="font-bold shadow-md hover:shadow-lg transition-shadow">
            <Link href="/contact">Book Now</Link>
          </Button>
          <Button asChild className="font-bold shadow-md hover:shadow-lg transition-shadow bg-foreground hover:bg-foreground/80 text-background">
            <Link href="/referrals">Referrals</Link>
          </Button>
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw]">
              <SheetHeader className="border-b pb-4">
                 <SheetTitle className="sr-only">Main Menu</SheetTitle>
                 <div className="flex items-center justify-between">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Image src="https://static.wixstatic.com/media/c5947c_2d862695958c47c789944f7026e540fe~mv2.png" alt="Noble Health House Calls Logo" width={150} height={33} />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                     <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
              </SheetHeader>
              <div className="flex flex-col h-full">
                <nav className="mt-8 flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-xl font-medium transition-colors hover:text-primary",
                        pathname === link.href ? "text-primary" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto pt-6 border-t">
                   <Button asChild className="w-full" size="lg">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Book Now</Link>
                  </Button>
                  <Button asChild className="w-full mt-2 bg-foreground hover:bg-foreground/80 text-background" size="lg">
                    <Link href="/referrals" onClick={() => setIsOpen(false)}>Referrals</Link>
                  </Button>
                  <a href="tel:8322631582" className="mt-4 flex items-center justify-center gap-2 font-semibold text-primary">
                    <Phone className="h-5 w-5" />
                    <span>(832) 263-1582</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
