'use client';

import { motion } from 'framer-motion';
import { Lightbulb, Wrench, DollarSign, Rocket, TrendingUp, Trophy } from 'lucide-react';

const processSteps = [
  {
    icon: Lightbulb,
    title: 'IP Pitch',
    description: 'Submit your game IP or studio concept',
    details: 'We review concepts, vision, and market potential',
  },
  {
    icon: Wrench,
    title: 'Studio Build',
    description: 'Co-develop and build your studio infrastructure',
    details: 'Assemble team, implement processes, establish culture',
  },
  {
    icon: DollarSign,
    title: 'Capital Raise',
    description: 'Secure funding and investment',
    details: 'Structure deals, deploy capital, manage investor relations',
  },
  {
    icon: Rocket,
    title: 'Launch',
    description: 'Go-to-market strategy and release',
    details: 'Marketing campaigns, community building, press outreach',
  },
  {
    icon: TrendingUp,
    title: 'Scale',
    description: 'Grow your audience and revenue',
    details: 'Live ops, content updates, player acquisition',
  },
  {
    icon: Trophy,
    title: 'Exit',
    description: 'Strategic exit or long-term partnership',
    details: 'M&A opportunities, continued growth, or independent scaling',
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to exit, we're with you every step of the journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary transform -translate-x-1/2" />
          
          {/* Steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}
                >
                  {/* Content */}
                  <div className={`${isEven ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'}`}>
                    <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-3 ${isEven ? 'lg:justify-end' : ''}`}>
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                      </div>
                      <p className="text-foreground font-medium mb-2">{step.description}</p>
                      <p className="text-sm text-muted-foreground">{step.details}</p>
                    </div>
                  </div>
                  
                  {/* Timeline node */}
                  <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full border-4 border-background items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  
                  {/* Mobile number */}
                  <div className="lg:hidden absolute -left-2 top-6 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
