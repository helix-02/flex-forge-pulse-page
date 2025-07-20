/* 
 * PRICING SECTION COMPONENT - Gym Website
 * CUSTOMIZATION GUIDE:
 * - Edit pricing plans in the PRICING_PLANS array
 * - Change prices, features, and plan names
 * - Update popular plan highlighting
 * - Modify call-to-action buttons
 */

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap } from 'lucide-react';

// EDIT PRICING PLANS HERE
const PRICING_PLANS = [
  {
    name: "Basic",
    price: "₹1000",
    period: "/month",
    description: "Perfect for getting started with your fitness journey",
    features: [
      "Gym access during off-peak hours",
      "Every equipment usage",
      "Guidance From Certified Coaches"
    ],
    popular: false,
    cta: "Beginner's"
  },
  {
    name: "Premium",
    price: "₹7000",
    period: "/month",
    description: "Most popular choice for serious fitness enthusiasts",
    features: [
      "24/7 gym access",
      "All equipment and facilities",
      "Unlimited group classes",
      "3 guest passes per month",
      "Nutrition consultation",
    ],
    popular: true,
    cta: "Most Popular"
  },
  
];

const SECTION_CONTENT = {
  title: "Choose Your Plan",
  subtitle: "Flexible Memberships for Every Goal",
  description: "Join Hundereds of members who have transformed their lives. Choose the plan that fits your lifestyle and goals.",
  guarantee: "20% Discount On Taking Annual Plan • No long-term contracts • Cancel anytime"
};

const PricingSection: React.FC = () => {
  const handlePlanCTA = (planName: string) => {
    // CUSTOMIZE: Add your signup/registration logic here
    console.log(`Selected plan: ${planName}`);
    // You can add payment processing, form modal, or redirect logic here
    alert(`You selected the ${planName} plan. Add your signup logic here!`);
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-card to-background">
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

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-electric-blue/20 to-purple/20 border-2 border-electric-blue shadow-neon' 
                  : 'bg-card border border-border hover:border-electric-blue/30 hover:shadow-lg'
              }`}
            >
              {/* POPULAR BADGE */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-electric-blue text-white font-bold px-6 py-2 rounded-full flex items-center space-x-2">
                    <Star className="h-4 w-4" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              {/* PLAN HEADER */}
              <div className="text-center mb-8">
                <h3 className="font-orbitron font-bold text-2xl text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className={`font-orbitron font-black text-5xl ${
                    plan.popular ? 'text-electric-blue' : 'text-white'
                  }`}>
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground ml-2">
                    {plan.period}
                  </span>
                </div>
              </div>

              {/* PLAN FEATURES */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-neon-green mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <Button 
                variant={plan.popular ? "hero" : "outline_neon"} 
                size="lg"
                className="w-full group"
                onClick={() => handlePlanCTA(plan.name)}
              >
                <span>{plan.cta}</span>
                {plan.popular && <Zap className="ml-2 group-hover:rotate-12 transition-transform duration-300" />}
              </Button>
            </div>
          ))}
        </div>

        {/* GUARANTEE TEXT */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {SECTION_CONTENT.guarantee}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;