// @ts-nocheck

'use client';

import React from "react"

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Send } from 'lucide-react';
import { useState } from 'react';

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

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Get in touch via email',
    contact: 'hello@wordoutdigital.com',
    href: 'mailto:hello@wordoutdigital.com',
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call us during business hours',
    contact: '+1 (555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: MapPin,
    title: 'Office',
    description: 'Visit us in person',
    contact: '123 Digital Avenue, Tech City, CA 90210',
    href: '#',
  },
];

const socialLinks = [
  {
    icon: Twitter,
    label: 'Twitter',
    href: 'https://twitter.com/wordoutdigital',
    color: 'hover:text-blue-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://linkedin.com/company/wordoutdigital',
    color: 'hover:text-blue-600',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://instagram.com/wordoutdigital',
    color: 'hover:text-pink-500',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you! We will get back to you soon.');
    }, 1500);
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-12 bg-background">
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
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Let's Start Something Amazing
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind? We'd love to hear about it. Reach out and let's create
            something exceptional together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Methods */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={index}
                  href={method.href}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  className="group"
                >
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">
                        {method.title}
                      </h3>
                      <p className="text-sm text-foreground/60 mb-2">
                        {method.description}
                      </p>
                      <p className="text-primary font-medium group-hover:underline">
                        {method.contact}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="pt-8 border-t border-border"
            >
              <h3 className="font-semibold text-foreground mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center text-foreground/60 transition-colors duration-300 ${social.color}`}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 resize-none"
                  placeholder="Tell us more about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          className="bg-card border border-border rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: '-100px' }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Prefer a Quick Chat?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Schedule a free consultation call with our team. We'll discuss your project,
            goals, and how we can help you succeed.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
          >
            Schedule a Call
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
