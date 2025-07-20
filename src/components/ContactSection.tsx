/* 
 * CONTACT SECTION COMPONENT - Gym Website
 * CUSTOMIZATION GUIDE:
 * - Update contact information in CONTACT_INFO
 * - Change social media links in SOCIAL_LINKS
 * - Edit contact form fields and validation
 * - Modify operating hours and location details
 */

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

// EDIT CONTACT INFORMATION HERE
const CONTACT_INFO = {
  // UPDATE YOUR GYM'S ADDRESS
  address: {
    street: "123 Fitness Street",
    city: "New York",
    state: "NY",
    zip: "10001",
    full: "123 Fitness Street, New York, NY 10001"
  },
  // UPDATE YOUR PHONE NUMBER
  phone: "+1 (555) 123-4567",
  // UPDATE YOUR EMAIL
  email: "info@fitnessstudio.com",
  // UPDATE YOUR OPERATING HOURS
  hours: {
    weekdays: "5:00 AM - 11:00 PM",
    saturday: "6:00 AM - 10:00 PM", 
    sunday: "7:00 AM - 9:00 PM"
  }
};

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
    url: "https://instagram.com/your-gym", // Update with your Instagram URL
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

const SECTION_CONTENT = {
  title: "Get In Touch",
  subtitle: "Ready to Start Your Journey?",
  description: "Contact us today for a free consultation and tour of our facilities. We're here to help you achieve your fitness goals.",
  formTitle: "Send us a message",
  mapTitle: "Visit Our Location"
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // CUSTOMIZE: Add your form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">{SECTION_CONTENT.title}</span>
          </h2>
          <p className="text-xl md:text-2xl text-electric-blue font-semibold mb-8">
            {SECTION_CONTENT.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {SECTION_CONTENT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* CONTACT FORM */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="font-orbitron font-bold text-2xl text-white mb-6">
              {SECTION_CONTENT.formTitle}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-electric-blue"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-electric-blue"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-electric-blue"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-background border-border focus:border-electric-blue"
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  className="bg-background border-border focus:border-electric-blue min-h-[120px]"
                  placeholder="Tell us about your fitness goals..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* CONTACT INFO & MAP */}
          <div className="space-y-8">
            
            {/* CONTACT DETAILS */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* ADDRESS */}
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-electric-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-1">Location</div>
                    <div className="text-muted-foreground">
                      Wadala Rd, Al Madina Colony, Mirajkar Nagar, Dr.Homi Bhabha Nagar, Nashik, Maharashtra 422214
                    </div>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-electric-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-1">Phone</div>
                    <a 
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-electric-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-1">Email</div>
                    <a 
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-muted-foreground hover:text-electric-blue transition-colors duration-300"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-electric-blue mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-white mb-1">Operating Hours</div>
                    <div className="text-muted-foreground space-y-1">
                      <div>Mon-Fri: {CONTACT_INFO.hours.weekdays}</div>
                      <div>Saturday: {CONTACT_INFO.hours.saturday}</div>
                      <div>Sunday: {CONTACT_INFO.hours.sunday}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* SOCIAL MEDIA */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="font-semibold text-white mb-4">Follow Us</div>
                <div className="flex space-x-4">
                  {SOCIAL_LINKS.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-background border border-border rounded-full transition-all duration-300 hover:border-electric-blue hover:scale-110 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-orbitron font-bold text-2xl text-white mb-6">
                {SECTION_CONTENT.mapTitle}
              </h3>
              
              {/* REPLACE THIS WITH YOUR ACTUAL MAP EMBED */}
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-electric-blue mx-auto mb-4" />
                  <div className="text-white font-semibold mb-2">Interactive Map</div>
                  <div className="text-muted-foreground text-sm">
                    Replace this placeholder with your Google Maps embed or map service
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;