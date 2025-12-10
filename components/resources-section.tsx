'use client';

import { motion } from 'framer-motion';
import { FileText, TrendingUp, Users, Gamepad2 } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    icon: TrendingUp,
    title: 'Gaming Investment Landscape 2024',
    category: 'Market Analysis',
    description: 'Comprehensive analysis of gaming market trends, investment patterns, and growth opportunities.',
    date: 'November 2024',
    link: '/blog/gaming-investment-landscape-2024',
  },
  {
    icon: Gamepad2,
    title: 'The Future of Game Development',
    category: 'Insights',
    description: 'How emerging technologies and new business models are reshaping game creation.',
    date: 'December 2024',
    link: '/blog/future-game-development',
  },
  {
    icon: Users,
    title: 'Community-First: Scaling Gaming Communities',
    category: 'Strategy Guide',
    description: 'Best practices for growing and engaging player communities from launch to scale.',
    date: 'December 2024',
    link: '/blog/community-first-scaling-gaming-communities',
  },
  {
    icon: FileText,
    title: 'Building the Future of Studio Development',
    category: 'Company',
    description: 'Our approach to partnering with game creators to build sustainable, scalable studios.',
    date: 'November 2024',
    link: '/blog/building-future-studio-development',
  },
];

export default function ResourcesSection() {
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
            Gaming <span className="text-primary">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry reports, whitepapers, and strategic insights to help you navigate the gaming landscape
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={resource.link}
                  className="block bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                          {resource.category}
                        </span>
                        <span className="text-xs text-muted-foreground">•</span>
                        <span className="text-xs text-muted-foreground">{resource.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
          >
            View All Resources
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
