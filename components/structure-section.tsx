'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { TrendingUp, Building, Users } from 'lucide-react';

export default function StructureSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://cdn.abacus.ai/images/74c8d85a-936b-4df3-bd10-2b817b839dee.jpg)', backgroundSize: 'cover' }} />
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
            Our <span className="text-primary">Corporate Structure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A strategic holding company model designed to maximize value for investors and portfolio companies.
          </p>
        </motion.div>

        {/* Corporate Structure Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/80 backdrop-blur-sm p-8 rounded-lg border border-border shadow-xl mb-12"
        >
          <div className="relative aspect-video w-full bg-muted rounded-lg overflow-hidden">
            <Image
              src="/corporate-structure.png"
              alt="The Scaler Agency Corporate Structure"
              fill
              className="object-contain p-4"
            />
          </div>
        </motion.div>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border"
          >
            <TrendingUp className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Investor Benefits</h3>
            <p className="text-muted-foreground">
              Equity at the holding company level provides exposure to all revenue streams, subsidiaries, and portfolio studios.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border"
          >
            <Building className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Studio Incubation</h3>
            <p className="text-muted-foreground">
              We incubate and scale gaming studios with both corporate ownership and strategic equity partnerships.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border border-border"
          >
            <Users className="w-10 h-10 text-primary mb-4" />
            <h3 className="text-xl font-bold mb-2">Advisory Board</h3>
            <p className="text-muted-foreground">
              Industry veterans and experts guide our strategic decisions and provide valuable insights to portfolio companies.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
