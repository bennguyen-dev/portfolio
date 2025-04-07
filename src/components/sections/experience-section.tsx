import { motion } from 'motion/react';
import { CV } from '@/data/cv';

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-neutral-900 scroll-mt-12"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="max-w-4xl mx-auto">
          {CV.experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.position}</h3>
                  <p className="text-primary">{exp.company}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  {exp.start_date} - {exp.end_date}
                </p>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.responsibilities}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies_used.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
