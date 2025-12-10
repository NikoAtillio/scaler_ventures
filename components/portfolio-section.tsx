'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { ExternalLink, CheckCircle } from 'lucide-react';

const portfolioItems = [
  {
    studio: 'Dark Alley Studios',
    game: 'Disrupt or Die',
    studioImage: 'https://cdn.abacus.ai/images/9c6e6042-56ac-432e-9dad-4f6218e88363.png',
    gameImage: 'https://cdn.abacus.ai/images/160de3d8-45d0-4fa1-9110-bd34659f083b.jpg',
    description: 'Our flagship partnership showcasing the full power of the Scaler ecosystem. We\'re building Dark Alley Studios from the ground up with comprehensive support across all dimensions.',
    services: [
      'Studio building with co-development partners',
      'Senior management team placement',
      'Game development support and technical guidance',
      'Capital raising and strategic investment',
      'Marketing and brand development',
      'Investor relations and corporate communications',
      'Community scaling and engagement strategies',
    ],
  },
];

export default function PortfolioSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://cdn.abacus.ai/images/629e1eca-72bd-4031-95f8-d0fa7ae627e1.jpg)', backgroundSize: 'cover' }} />
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
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Launching and scaling the next generation of gaming studios and IPs.
          </p>
        </motion.div>

        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.studio}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card/50 backdrop-blur-sm rounded-lg border border-border overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Images */}
              <div className="grid grid-cols-2 gap-0">
                <div className="relative aspect-square bg-muted group overflow-hidden">
                  <Image
                    src={item.studioImage}
                    alt={item.studio}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold">{item.studio}</h3>
                  </div>
                </div>
                <div className="relative aspect-square bg-muted group overflow-hidden">
                  <Image
                    src={item.gameImage}
                    alt={item.game}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
                    <h3 className="text-2xl font-bold">{item.game}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 lg:p-12">
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {item.description}
                </p>

                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <ExternalLink className="w-5 h-5 text-primary" />
                  Services Provided
                </h4>
                <ul className="space-y-3">
                  {item.services.map((service, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
