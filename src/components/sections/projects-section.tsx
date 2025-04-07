import { motion } from 'motion/react';
import { CV } from '@/data/cv';

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
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="mb-4">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {project.start_date} - {project.end_date}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Role: {project.role}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Team Size: {project.team_size}
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Features:</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.functionalities}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.skills.technical.programming_languages
                  .concat(
                    project.skills.technical.frameworks,
                    project.skills.technical.libraries,
                    project.skills.technical.tools,
                  )
                  .map((tech, techIndex) => (
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
