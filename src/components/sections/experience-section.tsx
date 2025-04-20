import { motion } from 'motion/react';
import { CV } from '@/data/cv';
import { MagicCard } from '../ui/magic-card';

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-neutral-900 scroll-mt-12"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col">
            {CV.experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-stretch group${index === 0 ? '' : ''}`}
              >
                {/* Time on the left */}
                <div
                  className={`w-28 flex-shrink-0 text-right pr-2 pt-2 hidden sm:block ${index === 0 ? '' : ' mt-8 md:mt-12'}`}
                >
                  <p className="text-gray-600 dark:text-gray-400 text-xs md:text-sm font-medium whitespace-nowrap">
                    {exp.start_date} <br className="hidden md:block" />—
                    <br className="hidden md:block" /> {exp.end_date}
                  </p>
                </div>
                {/* Vertical line and dot */}
                <div className="relative flex flex-col items-center mx-2">
                  {/* Vertical line: show full height */}
                  <div
                    className={`w-1 h-full bg-primary/40`}
                    style={{ minHeight: '2rem' }}
                  />
                  {/* Timeline dot */}
                  <span
                    className={`absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-neutral-900 shadow-md z-10 group-hover:scale-110 transition-transform ${index === 0 ? '' : ' mt-8 md:mt-12'}`}
                  />
                </div>
                {/* Info on the right */}
                <MagicCard
                  className={`flex-1 ml-2 ${index === 0 ? '' : ' mt-8 md:mt-12'}`}
                >
                  {/* Time on top for mobile */}
                  <div className="block sm:hidden mb-2">
                    <p className="text-gray-600 dark:text-gray-400 text-xs font-medium whitespace-nowrap">
                      {exp.start_date} — {exp.end_date}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold">
                        {exp.position}
                      </h3>
                      <p className="text-primary">{exp.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2 text-sm md:text-base">
                    {exp.responsibilities}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies_used.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 md:px-3 md:py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </MagicCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
