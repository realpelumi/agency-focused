// @ts-nocheck

'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Handle hash scrolling when component mounts or location changes
    if (location.hash && location.pathname === '/') {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        // Small delay to ensure page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    if (location.pathname === '/') {
      // If on home page, scroll directly to the section
      const element = document.getElementById(targetId.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setIsOpen(false);
      }
    } else {
      // If on another page, navigate to home page with hash
      navigate(`/${targetId}`);
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: 'About', to: '#about' },
    { name: 'Services', to: '#services' },
    { name: 'Porfolio', to: '#work' },
    { name: 'Contact', to: '/contact-us' },
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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto',
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                W
              </motion.div>
              <span className="text-xl font-bold text-foreground hidden sm:inline">
                WordOut Digital
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item) => (
              <motion.div key={item.name} variants={itemVariants}>
                {item.to.startsWith('#') ? (
                  <a
                    href={item.to}
                    onClick={(e) => handleSmoothScroll(e, item.to)}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
                  >
                    {item.name}
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary"
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          variants={mobileMenuVariants}
          initial="hidden"
          animate={isOpen ? 'visible' : 'hidden'}
          className="md:hidden overflow-hidden"
        >
          <motion.nav className="px-4 py-4 space-y-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.to.startsWith('#') ? (
                  <a
                    href={item.to}
                    onClick={(e) => handleSmoothScroll(e, item.to)}
                    className="block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className="block text-sm font-medium text-foreground/70 hover:text-foreground transition-colors py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: navItems.length * 0.1 }}
              className="w-full px-4 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get Started
            </motion.button>
          </motion.nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
