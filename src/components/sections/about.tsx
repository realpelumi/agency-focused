'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const milestones = [
  { year: '2016', label: 'Founded' },
  { year: '50+', label: 'Projects Delivered' },
  { year: '100%', label: 'Client Satisfaction' },
  { year: '8Y+', label: 'Industry Experience' },
];

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions.',
  },
  {
    title: 'Quality',
    description: 'Every project is crafted with meticulous attention to detail and excellence.',
  },
  {
    title: 'Partnership',
    description: 'We view every client as a partner in achieving mutual success.',
  },
  {
    title: 'Integrity',
    description: 'Transparency and honesty guide all our business relationships.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-12 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              About WordOut Digital
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
              Your Digital Growth Partner
            </h2>
            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              Since 2016, WordOut Digital has been empowering businesses with innovative digital
              solutions. We combine creative excellence with technical expertise to transform
              brands and drive measurable results.
            </p>
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Our team of passionate designers, developers, and strategists work collaboratively
              to create digital experiences that resonate with audiences and achieve business
              objectives.
            </p>

            {/* Features */}
            <motion.div
              className="space-y-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
            >
              {[
                'Strategic digital transformation',
                'Award-winning design & development',
                'Data-driven approach',
                'Dedicated support & partnership',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-lg bg-background border border-border hover:border-primary/30 transition-colors duration-300 text-center"
                whileHover={{ y: -4 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-primary mb-2"
                >
                  {milestone.year}
                </motion.div>
                <p className="text-sm text-foreground/70 font-medium">{milestone.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Our Core Values
          </h3>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg bg-background border border-border hover:border-primary/50 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -2 }}
              >
                <h4 className="text-lg font-bold text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Team CTA */}
        <motion.div
          className="text-center py-12 border-t border-border"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <p className="text-foreground/70 mb-6">
            Meet the team driving your digital success
          </p>
          <motion.button
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
