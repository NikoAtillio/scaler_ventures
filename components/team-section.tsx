'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const teamMembers = [
  {
    name: 'Partner & Advisor',
    role: 'Strategic Leadership',
    image: 'https://cdn.abacus.ai/images/759ef6b6-3bd1-4d0b-a232-4ca3001c912e.png',
  },
  {
    name: 'Partner & Advisor',
    role: 'Investment & Finance',
    image: 'https://cdn.abacus.ai/images/1e2c003d-9494-4140-b7cc-deefd22197aa.png',
  },
  {
    name: 'Partner & Advisor',
    role: 'Studio Development',
    image: 'https://cdn.abacus.ai/images/2bc9d8e1-17e2-4d7c-961a-44c0c379d2a5.png',
  },
  {
    name: 'Partner & Advisor',
    role: 'Marketing & Growth',
    image: 'https://cdn.abacus.ai/images/74789502-eaad-416d-a33c-3729948807df.png',
  },
  {
    name: 'Partner & Advisor',
    role: 'Creative Direction',
    image: 'https://cdn.abacus.ai/images/e1b07e29-86e3-4d94-92da-02516aca69bc.png',
  },
];

export default function TeamSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="team" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
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
            Partners & <span className="text-primary">Advisors</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry veterans with decades of combined experience in gaming, investment, and scaling businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2">
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-3">{member.role}</p>
                  <button className="p-2 bg-primary/10 hover:bg-primary/20 rounded-full transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
