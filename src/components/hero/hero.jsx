'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-15 pt-20 px-4 sm:px-6 lg:px-8">
      {/* Background gradient elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center relative z-10"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/30 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Welcome to WordOut Digital
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        >
          <span className="inline text-foreground">Transform Your Brand</span>
          <br />
          <motion.span
            className="inline bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          >
            Into a Digital Force
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-foreground/60 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          We craft exceptional digital experiences that elevate your brand and
          drive measurable results. From strategy to execution, we're your
          trusted partner in success.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 bg-primary text-primary-foreground text-base font-semibold rounded-lg hover:bg-primary/90 transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
          >
            Start Your Project
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3.5 border-2 border-foreground/20 text-foreground font-semibold rounded-lg hover:bg-foreground/5 transition-all w-full sm:w-auto"
          >
            View Our Work
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-md mx-auto mt-16"
        >
          {[
            { number: '50+', label: 'Projects' },
            { number: '100%', label: 'Satisfaction' },
            { number: '8Y+', label: 'Experience' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="text-2xl sm:text-3xl font-bold text-primary mb-1"
                variants={floatingVariants}
                animate="animate"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      {/* <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      >
        <div className="flex flex-col items-center gap-2 text-foreground/50">
          <span className="text-xs font-medium uppercase tracking-wide">
            Scroll to explore
          </span>
          <motion.div
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'easeInOut',
            }}
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </div>
      </motion.div> */}
    </section>
  );
}
