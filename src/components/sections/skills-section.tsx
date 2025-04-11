import { motion } from 'motion/react';
import { CV } from '@/data/cv';
import { getSkillIcon } from '@/data/skill-icons'; // Import the icon getter
import {
  Code,
  Layers3,
  Puzzle,
  Database as DbIcon,
  Wrench,
  Workflow,
} from 'lucide-react'; // Icons for Categories

// Map category titles to icons
const categoryIconMap: Record<string, React.ElementType> = {
  'Programming Languages': Code,
  Frameworks: Layers3,
  Libraries: Puzzle,
  Databases: DbIcon,
  Tools: Wrench,
  Methodologies: Workflow, // Add if you display methodologies
};

const SkillCategory = ({
  title,
  skills,
}: {
  title: string;
  skills: readonly string[]; // Use readonly array from CV type if possible
}) => {
  const CategoryIcon = categoryIconMap[title] || Wrench; // Default to Wrench if no specific icon

  return (
    <div className="mb-8">
      {' '}
      {/* Increased bottom margin */}
      <div className="flex items-center gap-3 mb-4">
        {' '}
        {/* Use flex for title+icon */}
        <CategoryIcon className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-semibold">{title}</h3>{' '}
        {/* Increased title size */}
      </div>
      <div className="flex flex-wrap gap-3">
        {' '}
        {/* Increased gap slightly */}
        {skills.map((skill, index) => {
          const IconComponent = getSkillIcon(skill); // Get the specific icon
          return (
            <motion.div // Changed span to div for better layout control
              key={index}
              initial={{ opacity: 0, y: 10 }} // Changed animation slightly
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }} // Faster delay
              className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-transparent hover:border-primary/50 transition-colors" // Adjusted padding, gap, added border effect
            >
              <IconComponent className="w-4 h-4 text-primary flex-shrink-0" />{' '}
              {/* Render the icon */}
              <span className="text-sm">{skill}</span>{' '}
              {/* Adjusted text size */}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const { technical } = CV.skills;

  // Ensure skills are arrays, provide empty array fallback
  const programmingLanguages = technical.programming_languages || [];
  const frameworks = technical.frameworks || [];
  const libraries = technical.libraries || [];
  const databases = technical.databases || [];
  const tools = technical.tools || [];
  const methodologies = technical.methodologies || [];

  return (
    <section
      id="skill"
      className="py-20 bg-gray-50 dark:bg-neutral-900 scroll-mt-12"
    >
      {' '}
      {/* Changed background */}
      <div className="container mx-auto px-4">
        <motion.div // Wrap section content in motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            Technical Skills
          </h2>{' '}
          {/* Changed title wording/size */}
          <p className="text-gray-600 dark:text-gray-400 text-center text-lg mb-12">
            {' '}
            {/* Added subtitle */}
            My toolbox for building modern web applications
          </p>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {' '}
            {/* Use grid for layout */}
            <SkillCategory
              title="Programming Languages"
              skills={programmingLanguages}
            />
            <SkillCategory title="Frameworks" skills={frameworks} />
            <SkillCategory title="Libraries" skills={libraries} />
            <SkillCategory title="Databases" skills={databases} />
            <SkillCategory title="Tools" skills={tools} />
            {/* Optionally display methodologies */}
            <SkillCategory title="Methodologies" skills={methodologies} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
