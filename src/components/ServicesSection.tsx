/* 
 * SERVICES SECTION COMPONENT - Gym Website
 * CUSTOMIZATION GUIDE:
 * - Edit services in the SERVICES array
 * - Change service icons, titles, and descriptions
 * - Update pricing information
 * - Modify featured service highlighting
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Dumbbell, Heart, Users, Timer, Zap, Activity } from 'lucide-react';

// EDIT SERVICES HERE
const SERVICES = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    description: "Build muscle and increase power with our comprehensive strength training programs using state-of-the-art equipment.",
    features: ["Free Weights", "Resistance Machines", "Functional Training", "Progressive Programs"],
    featured: true
  },
  {
    icon: Heart,
    title: "Cardio Workouts",
    description: "Improve cardiovascular health and endurance with our variety of cardio equipment and group classes.",
    features: ["Treadmills", "Ellipticals", "Spin Classes", "HIIT Training"],
    featured: false
  },
  {
    icon: Users,
    title: "Group Classes",
    description: "Join our energetic group fitness classes designed for all fitness levels and interests.",
    features: ["Yoga", "Pilates", "Zumba", "Boot Camp"],
    featured: false
  },
  {
    icon: Timer,
    title: "Personal Training",
    description: "One-on-one coaching with certified trainers to maximize your results and achieve your goals faster.",
    features: ["Custom Programs", "Nutrition Guidance", "Progress Tracking", "Flexible Scheduling"],
    featured: true
  },
  {
    icon: Zap,
    title: "HIIT Classes",
    description: "High-intensity interval training to burn fat, build endurance, and boost metabolism effectively.",
    features: ["Fat Burning", "Metabolic Boost", "Time Efficient", "All Levels Welcome"],
    featured: false
  },
  {
    icon: Activity,
    title: "Recovery & Wellness",
    description: "Complete recovery services including massage therapy, stretching, and wellness programs.",
    features: ["Massage Therapy", "Stretching Sessions", "Sauna", "Recovery Zones"],
    featured: false
  }
];

const SECTION_CONTENT = {
  title: "Our Services & Facilities",
  subtitle: "Everything You Need to Succeed",
  description: "We offer a comprehensive range of services and state-of-the-art facilities designed to help you achieve your fitness goals.",
  cta: "View All Services"
};

const ServicesSection: React.FC = () => {
  const handleServiceCTA = () => {
    // CUSTOMIZE: Add your services page navigation or contact logic here
    const element = document.querySelector('#pricing');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
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

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES.map((service, index) => (
            <div 
              key={index}
              className={`group relative overflow-hidden rounded-xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                service.featured 
                  ? 'bg-gradient-to-br from-electric-blue/10 to-purple/10 border-2 border-electric-blue/50 hover:border-electric-blue shadow-neon' 
                  : 'bg-card border border-border hover:border-electric-blue/30 hover:shadow-lg'
              }`}
            >
              {/* FEATURED BADGE */}
              {service.featured && (
                <div className="absolute top-4 right-4 bg-electric-blue text-white text-xs font-bold px-3 py-1 rounded-full">
                  FEATURED
                </div>
              )}

              {/* SERVICE ICON */}
              <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-6 transition-all duration-300 ${
                service.featured 
                  ? 'bg-electric-blue/20 group-hover:bg-electric-blue/30' 
                  : 'bg-electric-blue/10 group-hover:bg-electric-blue/20'
              }`}>
                <service.icon className={`h-8 w-8 ${
                  service.featured ? 'text-electric-blue' : 'text-electric-blue'
                }`} />
              </div>

              {/* SERVICE CONTENT */}
              <h3 className="font-orbitron font-bold text-xl text-white mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* SERVICE FEATURES */}
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-electric-blue rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* HOVER EFFECT */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CALL TO ACTION */}
        <div className="text-center">
          <Button 
            variant="neon" 
            size="lg"
            onClick={handleServiceCTA}
            className="group"
          >
            <span>{SECTION_CONTENT.cta}</span>
            <Activity className="ml-2 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;