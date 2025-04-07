import { motion } from 'motion/react';
import { CV } from '@/data/cv';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Animated greeting */}
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-primary font-medium mb-4 block"
              >
                👋 Hello, I'm
              </motion.span>

              {/* Name with highlight effect */}
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-4 relative inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="relative z-10">
                  {CV.personal_details.name}
                  <motion.span
                    className="absolute -z-10 bottom-0 left-0 w-full h-3 bg-primary/20"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </motion.h1>

              {/* Role with typing effect */}
              <motion.h2
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <span className="text-primary font-semibold">
                  Front-end Developer
                </span>{' '}
                with a passion for crafting exceptional user experiences
              </motion.h2>

              {/* Summary */}
              <motion.p
                className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                {CV.summary_objective}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <a
                  href="#contact"
                  className="group bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
                >
                  Contact Me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#projects"
                  className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  View Projects
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:text-right"
          >
            <div className="relative inline-block">
              {/* Decorative background elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full bg-gradient-to-tr from-primary/20 to-transparent blur-3xl" />
              <div className="absolute -z-10 -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -z-10 -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />

              {/* Main image */}
              <img
                src="/person.jpg" // Replace with your image path
                alt={CV.personal_details.name}
                className="rounded-2xl w-full max-w-md mx-auto shadow-2xl"
              />

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-4 -left-4 bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-primary font-medium">
                  4+ Years Experience
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-neutral-800 px-4 py-2 rounded-full shadow-lg"
              >
                <span className="text-primary font-medium">
                  React Specialist
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
