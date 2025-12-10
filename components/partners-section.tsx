'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const partners = [
  {
    name: 'The Scaler Agency',
    description: 'Full-service gaming marketing and growth agency',
    logo: 'https://cdn.abacus.ai/images/7d0f7b3e-b076-450b-84be-b9a327e9c054.png',
    url: '#',
  },
  {
    name: 'Playforge Creative',
    description: 'Game trailers, ads, and creative production specialists',
    logo: 'https://cdn.abacus.ai/images/200718f2-941d-4049-ad7b-c015430c0cb9.png',
    url: 'https://playforgecreative.com',
  },
];

export default function PartnersSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Partner <span className="text-primary">Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We work with industry-leading partners to deliver comprehensive support for our studios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center"
            >
              <div className="relative w-full h-24 mb-6 flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {partner.name}
              </h3>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
