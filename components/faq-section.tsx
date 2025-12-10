'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'For Studios',
    questions: [
      {
        q: 'What stage should my studio be at to apply?',
        a: 'We work with studios from pre-seed (just an IP concept) through Series A. Whether you have a prototype, a pitch deck, or a growing player base, we can help structure the right partnership.',
      },
      {
        q: 'Do you take equity in studios?',
        a: 'Yes, we typically take an equity stake as part of our investment and support package. The exact structure depends on your stage, capital needs, and growth trajectory. We work collaboratively to ensure fair terms that benefit both parties.',
      },
      {
        q: 'What genres and platforms do you focus on?',
        a: 'We\'re platform-agnostic and genre-diverse. We invest in PC, console, and mobile games across all genres, from AAA to indie. What matters most is strong IP potential, team capability, and market opportunity.',
      },
      {
        q: 'How long does the application process take?',
        a: 'Initial review takes 1-2 weeks. If there\'s interest, we move to deeper discussions and due diligence, which typically takes 4-8 weeks. We aim to be efficient while being thorough.',
      },
    ],
  },
  {
    category: 'For Investors',
    questions: [
      {
        q: 'What is your investment structure?',
        a: 'Investors hold equity at the Holding Company level, giving exposure to our entire portfolio of studios, marketing subsidiary profits, and all future IPs we develop or acquire.',
      },
      {
        q: 'What returns can investors expect?',
        a: 'Gaming can deliver exceptional returns, but it\'s a hit-driven industry. Our portfolio approach and hands-on support aim to improve success rates. Historical comparable gaming investments have shown 3-10x returns for successful studios.',
      },
      {
        q: 'What is the minimum investment?',
        a: 'Minimum investment varies by round and structure. Contact us for current opportunities and investment minimums.',
      },
      {
        q: 'How do you select studios to invest in?',
        a: 'We evaluate IP strength, team capability, market opportunity, technical feasibility, and community potential. Our advisory board and internal expertise help us identify winners early.',
      },
    ],
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <div className="space-y-12">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-semibold mb-6 text-primary">{category.category}</h3>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const key = `${categoryIndex}-${faqIndex}`;
                  const isOpen = openIndex === key;
                  
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: faqIndex * 0.1 }}
                      className="bg-card border border-border rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(key)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-semibold pr-4">{faq.q}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isOpen ? 'max-h-96' : 'max-h-0'
                        }`}
                      >
                        <div className="px-6 py-4 border-t border-border bg-muted/30">
                          <p className="text-muted-foreground">{faq.a}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
