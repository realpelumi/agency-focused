// @ts-nocheck

'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Github } from 'lucide-react';

export default function Footer() {
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

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { name: 'Web Design', href: '#' },
        { name: 'Development', href: '#' },
        { name: 'Strategy', href: '#' },
        { name: 'Branding', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'Disclaimer', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16"
          >
            {/* Brand section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4 group">
                <motion.div
                  className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  W
                </motion.div>
                <span className="text-lg font-bold text-secondary-foreground">WordOut</span>
              </Link>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-6">
                Crafting digital experiences that transform brands and drive
                measurable success.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-accent/20 hover:bg-accent/30 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-secondary-foreground" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Links sections */}
            {footerLinks.map((section) => (
              <motion.div
                key={section.title}
                variants={itemVariants}
                className="lg:col-span-1"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <motion.li
                      key={link.name}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href={link.href}
                        className="text-secondary-foreground hover:text-accent text-sm transition-colors"
                      >
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact info */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-sm font-semibold uppercase tracking-wide mb-4 text-foreground">
                Contact
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-secondary-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-secondary-foreground text-sm hover:text-accent transition-colors cursor-pointer">
                      hello@wordout.digital
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-secondary-foreground text-sm hover:text-accent transition-colors cursor-pointer">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary-foreground flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-secondary-foreground text-sm">
                      San Francisco, CA
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent mb-8"
          />

          {/* Bottom bar */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-center justify-between text-sm text-secondary-foreground"
          >
            <p>&copy; 2024 WordOut Digital. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 sm:mt-0">
              <Link
                href="#"
                className="hover:text-accent transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="hover:text-accent transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
