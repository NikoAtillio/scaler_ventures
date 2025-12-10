'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Upload, CheckCircle, AlertCircle } from 'lucide-react';

export default function PitchForm() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    gameDescription: '',
    developmentStage: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
      if (file) {
        formDataToSend.append('file', file);
      }

      const response = await fetch('/api/pitch', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response?.ok) {
        setStatus({ type: 'success', message: 'Your pitch has been submitted successfully! We\'ll be in touch soon.' });
        setFormData({
          name: '',
          email: '',
          companyName: '',
          gameDescription: '',
          developmentStage: '',
          message: '',
        });
        setFile(null);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to submit your pitch. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="pitch" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{ backgroundImage: 'url(https://cdn.abacus.ai/images/74c8d85a-936b-4df3-bd10-2b817b839dee.jpg)', backgroundSize: 'cover' }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Pitch Your <span className="text-primary">Game</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a game or studio that needs support? Tell us about your vision and let's build something amazing together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-card/50 backdrop-blur-sm p-8 rounded-lg border border-border shadow-xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="companyName" className="block text-sm font-semibold mb-2">
              Company/Studio Name *
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              required
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
              placeholder="Your Studio Name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="developmentStage" className="block text-sm font-semibold mb-2">
              Development Stage *
            </label>
            <select
              id="developmentStage"
              name="developmentStage"
              required
              value={formData.developmentStage}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
            >
              <option value="">Select a stage</option>
              <option value="concept">Concept/Ideation</option>
              <option value="pre-production">Pre-Production</option>
              <option value="production">In Production</option>
              <option value="alpha">Alpha</option>
              <option value="beta">Beta</option>
              <option value="launch">Ready to Launch</option>
              <option value="live">Live/Post-Launch</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="gameDescription" className="block text-sm font-semibold mb-2">
              Game/IP Description *
            </label>
            <textarea
              id="gameDescription"
              name="gameDescription"
              required
              value={formData.gameDescription}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Tell us about your game, genre, target audience, unique features..."
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Additional Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="What kind of support are you looking for? What makes your project special?"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="file" className="block text-sm font-semibold mb-2">
              Attach Document (Optional)
            </label>
            <div className="relative">
              <input
                type="file"
                id="file"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                className="hidden"
              />
              <label
                htmlFor="file"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-background border border-border rounded-lg cursor-pointer hover:border-primary transition-colors"
              >
                <Upload className="w-5 h-5 text-primary" />
                <span className="text-muted-foreground">
                  {file ? file.name : 'Click to upload pitch deck, design doc, or screenshots'}
                </span>
              </label>
            </div>
          </div>

          {status.type && (
            <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'}`}>
              {status.type === 'success' ? (
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
              )}
              <p className={status.type === 'success' ? 'text-green-500' : 'text-red-500'}>
                {status.message}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="group w-full px-8 py-4 bg-primary hover:bg-primary/90 disabled:bg-primary/50 text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 flex items-center justify-center gap-2"
          >
            {submitting ? 'Submitting...' : 'Submit Your Pitch'}
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
