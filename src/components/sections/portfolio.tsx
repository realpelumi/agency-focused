'use client';

import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with real-time inventory management.',
    image: 'https://images.unsplash.com/photo-1460925895917-adf4e9534f90?w=600&h=400&fit=crop',
    tags: ['Next.js', 'React', 'MySQL'],
  },
  {
    id: 2,
    title: 'Brand Identity',
    category: 'Design',
    description: 'Comprehensive brand redesign including logo, color system, and guidelines.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
    tags: ['Branding', 'Design System', 'Typography'],
  },
  {
    id: 3,
    title: 'Mobile App',
    category: 'Mobile Development',
    description: 'Native iOS app for fitness tracking and workout planning.',
    image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=600&h=400&fit=crop',
    tags: ['React Native', 'Firebase', 'Animation'],
  },
  {
    id: 4,
    title: 'SaaS Dashboard',
    category: 'Web Development',
    description: 'Analytics dashboard with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['React', 'TypeScript', 'Charts'],
  },
  {
    id: 5,
    title: 'Marketing Website',
    category: 'Web Design',
    description: 'High-converting marketing site with interactive elements.',
    image: 'https://images.unsplash.com/photo-1467994763999-4b2a0d4e3544?w=600&h=400&fit=crop',
    tags: ['Design', 'Animation', 'SEO'],
  },
  {
    id: 6,
    title: 'Content Management',
    category: 'Development',
    description: 'Headless CMS with intuitive content management interface.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
    tags: ['Headless CMS', 'API', 'Admin Panel'],
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
    transition: { duration: 0.5 },
  },
};

export default function Portfolio() {
  return (
    <section id="work" className="py-20 px-4 md:px-8 lg:px-12 bg-background">
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
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Featured Projects
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Explore our latest work showcasing diverse industries and innovative digital
            solutions that drive real business results.
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div
          className="mb-16 rounded-xl overflow-hidden bg-card border border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          whileHover={{ borderColor: 'var(--primary)' }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
            {/* Image */}
            <motion.div
              className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-muted"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={projects[0].image || "/placeholder.svg"}
                alt={projects[0].title}
                width={100}
                height={100}
                className="object-cover"
              />
            </motion.div>

            {/* Content */}
            <div>
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                {projects[0].category}
              </span>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4">
                {projects[0].title}
              </h3>
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                {projects[0].description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[0].tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                View Project
                <ExternalLink className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {projects.slice(1).map((project) => (
            <motion.div
              key={project.id}
              className="group rounded-lg overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Image */}
              <motion.div
                className="relative h-48 bg-muted overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={100}
                  height={100}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
              </motion.div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-3 mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-foreground/70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <motion.button
                  className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
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
            Want to see more of our work?
          </p>
          <motion.button
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
