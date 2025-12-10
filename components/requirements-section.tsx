'use client';

import { motion } from 'framer-motion';
import { CheckCircle2, Users, Gamepad2, TrendingUp, Code, Heart } from 'lucide-react';

const requirements = [
  {
    icon: Users,
    title: 'Team',
    items: [
      'Founding team of 2-10 people',
      'Relevant game development experience',
      'Complementary skill sets (design, engineering, art)',
      'Clear roles and responsibilities',
      'Passion and commitment to the vision',
    ],
  },
  {
    icon: Gamepad2,
    title: 'IP & Product',
    items: [
      'Original IP with franchise potential',
      'Clear unique value proposition',
      'Target platform(s) identified',
      'Prototype or playable demo (preferred)',
      'Compelling visual identity or art direction',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Market Opportunity',
    items: [
      'Addressable market of $100M+',
      'Understanding of target audience',
      'Competitive landscape analysis',
      'Go-to-market strategy outline',
      'Monetization model defined',
    ],
  },
  {
    icon: Code,
    title: 'Technical',
    items: [
      'Feasible with current/emerging technology',
      'Realistic development timeline (2-4 years)',
      'Technical architecture planned',
      'Appropriate engine/tools selected',
      'Scalability considerations addressed',
    ],
  },
  {
    icon: Heart,
    title: 'Community & Culture',
    items: [
      'Community-first mindset',
      'Player feedback integration plan',
      'Long-term content/update roadmap',
      'Social/multiplayer elements (if applicable)',
      'Brand values and studio culture defined',
    ],
  },
];

export default function RequirementsSection() {
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
            Studio <span className="text-primary">Requirements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What we look for in studios applying to our program
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {requirements.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">
            Don't meet all the criteria? <span className="text-primary">Apply anyway.</span>
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            These are guidelines, not strict requirements. If you have an exceptional team, IP, or vision that doesn't fit the mold, we want to hear from you.
          </p>
          <a
            href="#pitch"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300"
          >
            Submit Your Pitch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
