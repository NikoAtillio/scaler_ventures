'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';

const advisors = [
  {
    name: 'Sarah Chen',
    role: 'Gaming Industry Veteran',
    expertise: '20+ years in AAA game development',
    image: 'https://cdn.abacus.ai/images/c00c52fe-1971-4c41-a087-d2d4de557b37.png',
    linkedin: '#',
  },
  {
    name: 'Marcus Williams',
    role: 'Investment Strategist',
    expertise: 'Former VP at Major Gaming Publisher',
    image: 'https://cdn.abacus.ai/images/423367e1-2bc9-4f69-aa07-9e0dc087ba5d.png',
    linkedin: '#',
  },
  {
    name: 'Isabella Rodriguez',
    role: 'Marketing Executive',
    expertise: 'Scaled 3 gaming studios to $100M+ revenue',
    image: 'https://cdn.abacus.ai/images/49f71374-2557-4db9-88f7-74c9d70a8214.png',
    linkedin: '#',
  },
  {
    name: 'Amir Hassan',
    role: 'Technical Advisor',
    expertise: 'CTO of award-winning indie studio',
    image: 'https://cdn.abacus.ai/images/2b511b14-f1b1-4791-8c5d-f41ab5d46557.png',
    linkedin: '#',
  },
  {
    name: 'Eleanor Hartley',
    role: 'Board Member',
    expertise: 'Former CEO, Global Gaming Platform',
    image: 'https://cdn.abacus.ai/images/aabaa5aa-6b74-47a8-b8f2-e0fd41d15006.png',
    linkedin: '#',
  },
  {
    name: 'Raj Patel',
    role: 'Community Growth Specialist',
    expertise: 'Built 10M+ player communities',
    image: 'https://cdn.abacus.ai/images/7fcd0c6e-4a08-4cce-ad7a-71355b85aad7.png',
    linkedin: '#',
  },
];

export default function AdvisorySection() {
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
            Advisory <span className="text-primary">Board</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            World-class advisors with deep expertise across gaming, technology, and venture capital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisors.map((advisor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative aspect-square bg-muted">
                <Image
                  src={advisor.image}
                  alt={advisor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{advisor.name}</h3>
                <p className="text-primary text-sm font-medium mb-2">{advisor.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{advisor.expertise}</p>
                <a
                  href={advisor.linkedin}
                  className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
