/* 
 * ABOUT SECTION COMPONENT - Gym Website
 * CUSTOMIZATION GUIDE:
 * - Edit about content in the ABOUT_CONTENT object
 * - Change feature icons and descriptions
 * - Update years of experience and other stats
 * - Modify call-to-action button text
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Target, Heart, Trophy, Users, Clock, Shield } from 'lucide-react';

// EDIT ABOUT CONTENT HERE
const ABOUT_CONTENT = {
  title: "About Our Fitness Studio",
  subtitle: "Where Champions Are Made",
  description: "For over 7 years, we've been dedicated to helping individuals achieve their fitness goals and transform their lives. Our state-of-the-art facility combined with expert guidance creates the perfect environment for your fitness journey.",
  yearsExperience: "7+",
  happyMembers: "500+",
  certifiedTrainers: "2+",
  cta: "Learn More About Us"
};

// EDIT FEATURES HERE
const FEATURES = [
  {
    icon: Target,
    title: "Personalized Training",
    description: "Custom workout plans tailored to your specific goals and fitness level."
  },
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive approach to fitness including nutrition and lifestyle coaching."
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Track record of helping members achieve and exceed their fitness goals."
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a motivated community that supports and encourages each other."
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: " access and flexible class schedules to fit your busy lifestyle."
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Clean, well-maintained equipment and professional safety protocols."
  }
];

const AboutSection: React.FC = () => {
  const handleCTA = () => {
    // CUSTOMIZE: Add your about page navigation or modal logic here
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="text-white">About Fitness studio by ameen ansari</span>
          </h2>
          <p className="text-xl md:text-2xl text-electric-blue font-semibold mb-8">
            {ABOUT_CONTENT.subtitle}
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {ABOUT_CONTENT.description}
          </p>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="text-5xl font-orbitron font-black text-electric-blue mb-2">
              {ABOUT_CONTENT.yearsExperience}
            </div>
            <div className="text-muted-foreground font-inter">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-orbitron font-black text-neon-green mb-2">
              {ABOUT_CONTENT.happyMembers}
            </div>
            <div className="text-muted-foreground font-inter">Happy Members</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-orbitron font-black text-gold mb-2">
              3+
            </div>
            <div className="text-muted-foreground font-inter">Certified Trainers</div>
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-xl p-8 hover:border-electric-blue/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-neon"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-electric-blue/10 rounded-full mb-6 group-hover:bg-electric-blue/20 transition-colors duration-300">
                <feature.icon className="h-8 w-8 text-electric-blue" />
              </div>
              <h3 className="font-orbitron font-bold text-xl text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center">
          <Button 
            variant="energy" 
            size="lg"
            onClick={handleCTA}
            className="group"
          >
            <span>{ABOUT_CONTENT.cta}</span>
            <Target className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;