/* 
 * FOOTER COMPONENT - Gym Website
 * CUSTOMIZATION GUIDE:
 * - Update company information in FOOTER_INFO
 * - Change quick links and services
 * - Edit social media links
 * - Modify copyright and legal information
 */

import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

// EDIT FOOTER CONTENT HERE
const FOOTER_INFO = {
  companyName: "Fitness Studio",
  tagline: "Transform Your Body, Transform Your Life",
  description: "Your premier destination for fitness excellence. Join our community and discover what your body is truly capable of achieving.",
  // UPDATE YOUR CONTACT INFO
  contact: {
    address: "Wadala Rd, Al Madina Colony, Mirajkar Nagar, Dr.Homi Bhabha Nagar, Nashik, Maharashtra 422214",
    phone: "+91 9689230519",
    email: "aminansari9216@gmail.com"
  },
  // UPDATE COPYRIGHT INFO
  copyright: "© 2024 Fitness Studio. All rights reserved.",
  designCredit: "Gym by Ameen Ansari" // As shown in your logo
};

// EDIT NAVIGATION LINKS HERE
const QUICK_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" }
];

// EDIT SERVICES LINKS HERE
const SERVICES_LINKS = [
  { name: "Personal Training", href: "#services" },
  { name: "Group Classes", href: "#services" },
  { name: "Strength Training", href: "#services" },
  { name: "Cardio Workouts", href: "#services" },
  { name: "HIIT Classes", href: "#services" }
];

// EDIT SOCIAL MEDIA LINKS HERE
const SOCIAL_LINKS = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/your-gym", // Update with your Facebook URL
    color: "hover:text-blue-500"
  },
  {
    name: "Instagram", 
    icon: Instagram,
    url: "https://www.instagram.com/fitnessstudio1692?igsh=MWs3eG5vZTQwanc2cQ==", // Update with your Instagram URL
    color: "hover:text-pink-500"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/your-gym", // Update with your Twitter URL
    color: "hover:text-blue-400"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/your-gym", // Update with your YouTube URL
    color: "hover:text-red-500"
  }
];

const Footer: React.FC = () => {
  const handleLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-background to-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        
        {/* MAIN FOOTER CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* COMPANY INFO */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/32e1919a-74cb-4b0f-9c45-19beec07a96e.png" 
                alt="Fitness Studio Logo" 
                className="h-12 w-auto"
              />
            </div>
            
            <p className="text-xl font-orbitron font-bold text-electric-blue mb-4">
              {FOOTER_INFO.tagline}
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              {FOOTER_INFO.description}
            </p>

            {/* CONTACT INFO */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground hover:text-electric-blue transition-colors duration-300">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">{FOOTER_INFO.contact.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <a 
                  href={`tel:${FOOTER_INFO.contact.phone}`}
                  className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                >
                  {FOOTER_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
                <a 
                  href={`mailto:${FOOTER_INFO.contact.email}`}
                  className="text-sm text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                >
                  {FOOTER_INFO.contact.email}
                </a>
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="font-orbitron font-bold text-white text-lg mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="font-orbitron font-bold text-white text-lg mb-6">
              Our Services
            </h3>
            <ul className="space-y-3">
              {SERVICES_LINKS.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleLinkClick(service.href)}
                    className="text-muted-foreground hover:text-electric-blue transition-colors duration-300 text-left"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* SOCIAL MEDIA & COPYRIGHT */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            {/* SOCIAL MEDIA */}
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <span className="text-muted-foreground font-medium">Follow Us:</span>
              <div className="flex space-x-4">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-2 bg-background border border-border rounded-full transition-all duration-300 hover:border-electric-blue hover:scale-110 ${social.color}`}
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* COPYRIGHT */}
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm mb-1">
                {FOOTER_INFO.copyright}
              </p>
              <p className="text-muted-foreground text-xs">
                {FOOTER_INFO.designCredit}
              </p>
            </div>
          </div>
        </div>

        {/* BACK TO TOP INDICATOR */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center justify-center w-12 h-12 bg-electric-blue/10 hover:bg-electric-blue/20 border border-electric-blue/30 hover:border-electric-blue rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-b-[8px] border-l-transparent border-r-transparent border-b-electric-blue"></div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;