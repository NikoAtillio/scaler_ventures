'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function NewsletterSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response?.ok) {
        setStatus({ type: 'success', message: 'Successfully subscribed! Check your inbox for updates.' });
        setEmail('');
      } else {
        const data = await response?.json?.();
        throw new Error(data?.error ?? 'Subscription failed');
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error instanceof Error ? error.message : 'Failed to subscribe. Please try again.' 
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://cdn.abacus.ai/images/629e1eca-72bd-4031-95f8-d0fa7ae627e1.jpg)', backgroundSize: 'cover' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <Mail className="w-12 h-12 text-primary" />
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Stay <span className="text-primary">Connected</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get the latest insights on gaming industry trends, portfolio updates, and investment opportunities.
          </p>

          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-card border border-border rounded-lg focus:outline-none focus:border-primary transition-colors text-lg"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-8 py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 whitespace-nowrap"
              >
                {submitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {status.type && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-4 rounded-lg flex items-center gap-3 ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}
              >
                {status.type === 'success' ? (
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                )}
                <p className={status.type === 'success' ? 'text-green-500' : 'text-red-500'}>
                  {status.message}
                </p>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
