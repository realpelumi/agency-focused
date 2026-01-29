// @ts-nocheck

'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, TrendingUp, Smartphone, Zap, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom-built websites and applications using modern technologies and best practices.',
  },
  {
    icon: Palette,
    title: 'Design & UI/UX',
    description: 'Beautiful, intuitive designs that engage users and elevate your brand presence.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Strategy',
    description: 'Strategic planning to align your digital presence with business objectives.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Fast, optimized solutions that deliver exceptional user experiences.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Growth',
    description: 'Data-driven insights and strategies to measure and accelerate growth.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const hoverVariants = {
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 md:px-8 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            We deliver end-to-end digital services designed to transform your business and
            accelerate growth in the digital landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                className="p-8 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors duration-300 group"
              >
                <motion.div
                  className="mb-5"
                  variants={hoverVariants}
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-foreground/70 mb-6">
            Ready to get started?
          </p>
          <motion.button
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
