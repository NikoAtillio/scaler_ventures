'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Calculator, TrendingUp } from 'lucide-react';

export default function InvestmentCalculator() {
  const [investment, setInvestment] = useState(1000000);
  const [exitMultiple, setExitMultiple] = useState(5);
  const [timeframe, setTimeframe] = useState(5);

  const totalReturn = investment * exitMultiple;
  const profit = totalReturn - investment;
  const annualReturn = ((Math.pow(exitMultiple, 1 / timeframe) - 1) * 100).toFixed(1);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Calculator className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Investment Calculator</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Calculate Your <span className="text-primary">Potential Returns</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore potential investment outcomes based on gaming industry benchmarks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card border border-border rounded-lg p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Input Controls */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-3">
                  Investment Amount: <span className="text-primary">${(investment / 1000000).toFixed(1)}M</span>
                </label>
                <input
                  type="range"
                  min="100000"
                  max="10000000"
                  step="100000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>$100K</span>
                  <span>$10M</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Exit Multiple: <span className="text-primary">{exitMultiple}x</span>
                </label>
                <input
                  type="range"
                  min="2"
                  max="10"
                  step="0.5"
                  value={exitMultiple}
                  onChange={(e) => setExitMultiple(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>2x (Conservative)</span>
                  <span>10x (Exceptional)</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">
                  Time to Exit: <span className="text-primary">{timeframe} years</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="10"
                  step="1"
                  value={timeframe}
                  onChange={(e) => setTimeframe(Number(e.target.value))}
                  className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>3 years</span>
                  <span>10 years</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm text-muted-foreground">Total Return</span>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <p className="text-3xl font-bold text-primary">
                  ${(totalReturn / 1000000).toFixed(2)}M
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <span className="text-sm text-muted-foreground block mb-2">Net Profit</span>
                <p className="text-3xl font-bold">
                  ${(profit / 1000000).toFixed(2)}M
                </p>
              </div>

              <div className="bg-muted/50 rounded-lg p-6 border border-border">
                <span className="text-sm text-muted-foreground block mb-2">Annual Return (IRR)</span>
                <p className="text-3xl font-bold text-green-500">
                  {annualReturn}%
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Note:</strong> These are illustrative projections based on historical gaming industry exits. Actual returns will vary significantly based on studio performance, market conditions, and execution. Past performance does not guarantee future results.
            </p>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(330 100% 50%);
          cursor: pointer;
          border: 2px solid hsl(0 0% 3%);
        }

        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: hsl(330 100% 50%);
          cursor: pointer;
          border: 2px solid hsl(0 0% 3%);
        }
      `}</style>
    </section>
  );
}
