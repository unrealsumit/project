
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MapPin, Home, Search, Bot, Languages, Menu, X } from 'lucide-react'; // Using Bot for AI Guide
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import React from 'react';

const navItems = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/map', label: 'Map', icon: MapPin },
  { href: '/search', label: 'Search', icon: Search },
  { href: '/ai-guide', label: 'AI Guide', icon: Bot },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const NavLinks = ({isMobile = false}: {isMobile?: boolean}) => (
    <>
      {navItems.map((item) => (
        <Button
          key={item.href}
          variant="ghost"
          asChild
          className={cn(
            'justify-start text-foreground hover:bg-accent/20 hover:text-accent-foreground',
            pathname === item.href ? 'bg-accent/30 text-accent-foreground font-semibold' : '',
            isMobile ? 'w-full text-lg py-4' : ''
          )}
          onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined}
        >
          <Link href={item.href} className="flex items-center gap-2">
            <item.icon className="h-5 w-5" />
            {item.label}
          </Link>
        </Button>
      ))}
    </>
  );


  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          {/* Lucknowi Motif inspired icon placeholder - could be an SVG */}
          <svg width="32" height="32" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
            <path d="M50 5C25.16 5 5 25.16 5 50s20.16 45 45 45 45-20.16 45-45S74.84 5 50 5zm0 82C29.05 87 13 70.95 13 50S29.05 13 50 13s37 16.05 37 37-16.05 37-37 37z"/>
            <path d="M50 27.5c-12.4 0-22.5 10.1-22.5 22.5S37.6 72.5 50 72.5 72.5 62.4 72.5 50 62.4 27.5 50 27.5zm0 37c-8 0-14.5-6.5-14.5-14.5S42 35.5 50 35.5s14.5 6.5 14.5 14.5S58 64.5 50 64.5z"/>
            <path d="M50 42.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM35 50a5 5 0 100-10 5 5 0 000 10zM65 50a5 5 0 100-10 5 5 0 000 10z"/>
          </svg>
          <span className="font-bold text-xl text-primary">Lucknow Navigator</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLinks />
          <LanguageSwitcher />
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Navigation</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                   <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                     <svg width="28" height="28" viewBox="0 0 100 100" fill="currentColor" className="text-primary">
                       <path d="M50 5C25.16 5 5 25.16 5 50s20.16 45 45 45 45-20.16 45-45S74.84 5 50 5zm0 82C29.05 87 13 70.95 13 50S29.05 13 50 13s37 16.05 37 37-16.05 37-37 37z"/>
                       <path d="M50 27.5c-12.4 0-22.5 10.1-22.5 22.5S37.6 72.5 50 72.5 72.5 62.4 72.5 50 62.4 27.5 50 27.5zm0 37c-8 0-14.5-6.5-14.5-14.5S42 35.5 50 35.5s14.5 6.5 14.5 14.5S58 64.5 50 64.5z"/>
                       <path d="M50 42.5a7.5 7.5 0 100 15 7.5 7.5 0 000-15zM35 50a5 5 0 100-10 5 5 0 000 10zM65 50a5 5 0 100-10 5 5 0 000 10z"/>
                     </svg>
                     <span className="font-bold text-lg text-primary">Lucknow Nav</span>
                   </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col gap-2">
                  <NavLinks isMobile={true} />
                </nav>
                <div className="mt-auto">
                  <LanguageSwitcher />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function LanguageSwitcher() {
  // Placeholder for language switching functionality
  return (
    <Button variant="outline" size="sm" className="text-foreground border-primary/50 hover:bg-primary/10">
      <Languages className="h-4 w-4 mr-2" />
      English
    </Button>
  );
}
