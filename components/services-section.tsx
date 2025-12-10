'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, TrendingUp, Megaphone, Users, DollarSign, Rocket } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Studio Building',
    description: 'We build and scale game studios from the ground up, providing infrastructure, talent, and resources to bring your vision to life.',
  },
  {
    icon: DollarSign,
    title: 'Capital Injection',
    description: 'Strategic investment and funding to fuel growth, with access to our network of gaming investors and venture partners.',
  },
  {
    icon: Megaphone,
    title: 'Marketing & PR',
    description: 'Comprehensive marketing strategies and campaigns to build awareness, drive engagement, and grow your community.',
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Cultivate passionate gaming communities around your IP through authentic engagement and strategic community management.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Scaling',
    description: 'Data-driven growth strategies to scale your game and studio, optimizing every aspect from user acquisition to retention.',
  },
  {
    icon: Rocket,
    title: 'Go-to-Market',
    description: 'Launch your game with precision through comprehensive GTM strategies, distribution partnerships, and market positioning.',
  },
];

export default function ServicesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://cdn.abacus.ai/images/a070ea3d-21e5-4f9a-ab8c-573c85cae276.jpg)', backgroundSize: 'cover' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            End-to-End <span className="text-primary">Gaming Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to community, we provide everything you need to launch and scale your gaming IP.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2"
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
