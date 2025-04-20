import { motion } from 'motion/react';
import { CV } from '@/data/cv';
import { MagicCard } from '../ui/magic-card';

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 bg-white dark:bg-neutral-900 scroll-mt-12"
    >
      <div className="container mx-auto px-4 h-full">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {CV.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 120,
              }}
            >
              <MagicCard className="h-full">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400">
                  <span>
                    {project.start_date} - {project.end_date}
                  </span>
                  <span>Role: {project.role}</span>
                  <span>Team Size: {project.team_size}</span>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 text-sm group-hover:text-primary transition-colors duration-200">
                    Key Features:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.functionalities}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.skills.technical.programming_languages
                    .concat(
                      project.skills.technical.frameworks,
                      project.skills.technical.libraries,
                      project.skills.technical.tools,
                    )
                    .map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs md:text-sm font-medium transition-colors duration-200 cursor-pointer"
                      >
                        {tech}
                      </span>
                    ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 text-primary font-semibold underline underline-offset-4 hover:text-blue-700 transition-colors duration-200"
                  >
                    View Project
                  </a>
                )}
              </MagicCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
