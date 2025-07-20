/* 
 * HEADER COMPONENT - Gym Website
 * CUSTOMIZATION GUIDE:
 * - Change navigation menu items in the 'navItems' array
 * - Update logo image path
 * - Modify phone number and CTA text
 * - Adjust colors by changing button variants
 */

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

// EDIT NAVIGATION MENU ITEMS HERE
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

// EDIT CONTACT INFO HERE
const PHONE_NUMBER = "+1 (555) 123-4567"; // Change to your phone number
const CTA_TEXT = "Join Today"; // Change call-to-action text

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* LOGO SECTION - Update logo image here */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/32e1919a-74cb-4b0f-9c45-19beec07a96e.png" 
              alt="Fitness Studio Logo" 
              className="h-12 w-auto animate-float"
            />
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground hover:text-electric-blue transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* DESKTOP CTA BUTTONS */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors duration-300"
            >
              <Phone size={16} />
              <span className="text-sm">{PHONE_NUMBER}</span>
            </a>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => handleNavClick('#pricing')}
            >
              {CTA_TEXT}
            </Button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-foreground hover:text-electric-blue transition-colors duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE NAVIGATION MENU */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <nav className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left text-foreground hover:text-electric-blue transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                <a 
                  href={`tel:${PHONE_NUMBER}`}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                >
                  <Phone size={16} />
                  <span className="text-sm">{PHONE_NUMBER}</span>
                </a>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => handleNavClick('#pricing')}
                >
                  {CTA_TEXT}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;