/* 
 * HERO SECTION COMPONENT - Gym Website
 * CUSTOMIZATION GUIDE:
 * - Edit hero text in the HERO_CONTENT object
 * - Change call-to-action buttons text and links
 * - Update stats numbers and labels
 * - Modify background video or image if needed
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Users, Award, Dumbbell } from 'lucide-react';

// EDIT HERO CONTENT HERE
const HERO_CONTENT = {
  title: "FITNESS STUDIO",
  subtitle: "TRANSFORM YOUR BODY",
  description: "Join our elite fitness community and unlock your full potential. State-of-the-art equipment, expert trainers, and a supportive environment await you.",
  primaryCTA: "Start Your Journey",
  secondaryCTA: "Watch Our Story",
  // CHANGE THESE STATS TO MATCH YOUR GYM
  stats: [
    { number: "500+", label: "Active Members", icon: Users },
    { number: "7+", label: "Expert Trainers", icon: Award },
    { number: "Flexible", label: "Access Available", icon: Dumbbell },
  ]
};

const HeroSection: React.FC = () => {
  const handlePrimaryCTA = () => {
    // CUSTOMIZE: Add your signup/registration logic here
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSecondaryCTA = () => {
    // CUSTOMIZE: Add your video modal or about section logic here
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 gradient-dark opacity-90"></div>
      
      {/* ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-electric-blue/20 rounded-full blur-3xl animate-pulse-neon"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-gold/15 rounded-full blur-2xl animate-pulse"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        
        {/* MAIN HEADING */}
        <div className="mb-8">
          <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-4">
            <span className="block text-white animate-glow">{HERO_CONTENT.title}</span>
            <span className="block bg-gradient-to-r from-electric-blue via-purple to-neon-green bg-clip-text text-transparent">
              {HERO_CONTENT.subtitle}
            </span>
          </h1>
        </div>

        {/* HERO DESCRIPTION */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 font-inter leading-relaxed">
          {HERO_CONTENT.description}
        </p>

        {/* CALL TO ACTION BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button 
            variant="hero" 
            size="xl"
            onClick={handlePrimaryCTA}
            className="group"
          >
            <span>{HERO_CONTENT.primaryCTA}</span>
            <Dumbbell className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
          
          <Button 
            variant="outline_neon" 
            size="xl"
            onClick={handleSecondaryCTA}
            className="group"
          >
            <Play className="mr-2 group-hover:scale-110 transition-transform duration-300" />
            <span>{HERO_CONTENT.secondaryCTA}</span>
          </Button>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {HERO_CONTENT.stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-electric-blue/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center justify-center mb-4">
                <stat.icon className="h-8 w-8 text-electric-blue" />
              </div>
              <div className="text-3xl font-orbitron font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;