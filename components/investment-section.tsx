'use client';

import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Target, Users } from 'lucide-react';

const investmentAreas = [
  {
    icon: DollarSign,
    title: 'Ticket Sizes',
    description: '$500K - $5M per studio',
    details: 'Flexible capital deployment across seed to Series A stages',
  },
  {
    icon: TrendingUp,
    title: 'Investment Stage',
    description: 'Pre-seed to Series A',
    details: 'Supporting studios from concept through commercial launch',
  },
  {
    icon: Target,
    title: 'Focus Areas',
    description: 'Core Gaming IPs',
    details: 'PC, Console, and Mobile games with strong IP potential',
  },
  {
    icon: Users,
    title: 'Team Profile',
    description: 'Founder-driven studios',
    details: 'Passionate teams with proven track records or exceptional vision',
  },
];

const lookingFor = [
  'Strong IP with franchise potential',
  'Experienced or ambitious founding teams',
  'Clear product-market fit or vision',
  'Scalable business model',
  'Community-first approach',
  'Technical feasibility and innovation',
];

export default function InvestmentSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Investment <span className="text-primary">Thesis</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We invest in exceptional gaming studios building the next generation of beloved franchises
          </p>
        </motion.div>

        {/* Investment Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {investmentAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{area.title}</h3>
                <p className="text-primary text-sm font-medium mb-2">{area.description}</p>
                <p className="text-sm text-muted-foreground">{area.details}</p>
              </motion.div>
            );
          })}
        </div>

        {/* What We Look For */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card border border-border rounded-lg p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            What We Look For in <span className="text-primary">Studios</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lookingFor.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
