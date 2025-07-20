/* 
 * TESTIMONIALS SECTION COMPONENT - Gym Website
 * CUSTOMIZATION GUIDE:
 * - Edit testimonials in the TESTIMONIALS array
 * - Change customer names, photos, and reviews
 * - Update star ratings and testimonial text
 * - Add or remove testimonials as needed
 */

import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// EDIT TESTIMONIALS HERE - Replace with your actual customer reviews
const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Executive",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c9",
    rating: 5,
    text: "This gym has completely transformed my life! The trainers are incredibly knowledgeable and supportive. I've achieved results I never thought possible.",
    achievement: "Lost 30 lbs in 6 months"
  },
  {
    id: 2,
    name: "Mike Rodriguez",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    rating: 5,
    text: "The 24/7 access fits perfectly with my busy schedule. The equipment is top-notch and the facility is always clean. Best investment I've made for my health!",
    achievement: "Gained 15 lbs of muscle"
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "Teacher",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    rating: 5,
    text: "The group classes are amazing and the community here is so welcoming. I actually look forward to my workouts now. The energy is infectious!",
    achievement: "Completed first marathon"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Business Owner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 5,
    text: "Personal training here is exceptional. My trainer helped me overcome a back injury and get stronger than ever. The attention to form and safety is outstanding.",
    achievement: "Injury-free for 2 years"
  },
  {
    id: 5,
    name: "Lisa Williams",
    role: "Nurse",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    rating: 5,
    text: "After trying many gyms, this is the one that finally stuck. The variety of classes, clean facilities, and friendly staff make it feel like a second home.",
    achievement: "Consistent workouts for 3+ years"
  }
];

const SECTION_CONTENT = {
  title: "What Our Members Say",
  subtitle: "Real Stories, Real Results",
  description: "Don't just take our word for it. Hear from our amazing community of members who have transformed their lives.",
  cta: "Join Our Community"
};

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleJoinCommunity = () => {
    // CUSTOMIZE: Add your community signup or contact logic here
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${i < rating ? 'text-gold fill-current' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-card">
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

        {/* MAIN TESTIMONIAL DISPLAY */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 hover:border-electric-blue/30 transition-all duration-300">
            
            {/* QUOTE ICON */}
            <div className="flex justify-center mb-8">
              <Quote className="h-12 w-12 text-electric-blue" />
            </div>

            {/* TESTIMONIAL CONTENT */}
            <div className="text-center">
              
              {/* STAR RATING */}
              <div className="flex justify-center space-x-1 mb-6">
                {renderStars(TESTIMONIALS[currentIndex].rating)}
              </div>

              {/* TESTIMONIAL TEXT */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-inter">
                "{TESTIMONIALS[currentIndex].text}"
              </blockquote>

              {/* ACHIEVEMENT BADGE */}
              <div className="inline-block bg-electric-blue/10 border border-electric-blue/30 rounded-full px-6 py-2 mb-8">
                <span className="text-electric-blue font-semibold">
                  {TESTIMONIALS[currentIndex].achievement}
                </span>
              </div>

              {/* CUSTOMER INFO */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={TESTIMONIALS[currentIndex].image}
                  alt={TESTIMONIALS[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-electric-blue/30"
                />
                <div className="text-left">
                  <div className="font-orbitron font-bold text-white text-lg">
                    {TESTIMONIALS[currentIndex].name}
                  </div>
                  <div className="text-muted-foreground">
                    {TESTIMONIALS[currentIndex].role}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <Button
            variant="outline_neon"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:flex"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline_neon"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:flex"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* TESTIMONIAL INDICATORS */}
        <div className="flex justify-center space-x-3 mb-12">
          {TESTIMONIALS.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-electric-blue shadow-neon' 
                  : 'bg-muted hover:bg-electric-blue/50'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* THUMBNAIL GRID */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`cursor-pointer transition-all duration-300 ${
                index === currentIndex ? 'scale-110' : 'hover:scale-105'
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className={`w-full aspect-square object-cover rounded-full border-4 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-electric-blue shadow-neon' 
                    : 'border-border hover:border-electric-blue/50'
                }`}
              />
              <div className="text-center mt-2">
                <div className="text-sm font-semibold text-white">
                  {testimonial.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center">
          <Button 
            variant="gold" 
            size="lg"
            onClick={handleJoinCommunity}
            className="group"
          >
            <span>{SECTION_CONTENT.cta}</span>
            <Star className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;