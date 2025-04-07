import { motion } from 'motion/react';
import { CV } from '@/data/cv';

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

export const SkillsSection = () => {
  const { technical } = CV.skills;

  return (
    <section id="skill" className="py-20 scroll-mt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="max-w-4xl mx-auto">
          <SkillCategory
            title="Programming Languages"
            skills={technical.programming_languages}
          />
          <SkillCategory title="Frameworks" skills={technical.frameworks} />
          <SkillCategory title="Libraries" skills={technical.libraries} />
          <SkillCategory title="Databases" skills={technical.databases} />
          <SkillCategory title="Tools" skills={technical.tools} />
        </div>
      </div>
    </section>
  );
};
