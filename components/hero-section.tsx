'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Gamepad2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
          <Image
            src="https://cdn.abacus.ai/images/e3570d15-5233-47fb-aba5-6d9385fee5f1.jpg"
            alt="Futuristic gaming background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Gamepad2 className="w-12 h-12 text-primary mr-3" />
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              The <span className="text-primary">Scaler</span> Agency
            </h1>
          </div>
          
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Gaming incubator within a venture platform built to <span className="text-foreground font-semibold">launch, scale and expand your IP</span> with you.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link
              href="#pitch"
              className="group px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 flex items-center gap-2"
            >
              Pitch Your Game
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 bg-card/80 hover:bg-card text-foreground rounded-lg font-semibold text-lg transition-all duration-300 border border-border hover:border-primary/50"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
