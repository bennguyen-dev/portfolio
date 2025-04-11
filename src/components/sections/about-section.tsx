import { motion } from 'motion/react';
import { Target, BrainCircuit, Users, SearchCode } from 'lucide-react';

const personalTraits = [
  {
    icon: SearchCode,
    title: 'Performance Focused:',
    description:
      'Architecting performant UIs for complex data and interactions.',
  },
  {
    icon: Target,
    title: 'Results-Driven:',
    description:
      'Improving key metrics like conversion, scalability, and test coverage.',
  },
  {
    icon: Users,
    title: 'Collaborative:',
    description: 'Experienced in teamwork, leadership, and mentoring.',
  },
  {
    icon: BrainCircuit,
    title: 'Forward-Thinking:',
    description:
      'Passionate about UI/UX innovation and exploring AI applications.',
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-neutral-900 scroll-mt-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 text-center text-lg mb-12">
            Experienced Frontend Developer | React Specialist | Performance &
            UI/UX Focused
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                With over{' '}
                <span className="font-semibold text-primary">5 years</span> as a
                Frontend Developer, I specialize in building high-performance,
                scalable web applications using the{' '}
                <span className="font-semibold text-primary">
                  React ecosystem
                </span>
                . I thrive on tackling complex UI challenges, from optimizing
                large-scale data visualizations to integrating modern features
                into legacy systems.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My focus is on delivering tangible results – significantly
                boosting <span className="font-medium">conversion rates</span>,
                drastically improving{' '}
                <span className="font-medium">system scalability</span>, and
                establishing robust{' '}
                <span className="font-medium">testing foundations</span>. I have
                experience leading teams, mentoring developers, and
                collaborating effectively across product and design.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm passionate about pushing the boundaries of frontend
                development, particularly in{' '}
                <span className="font-semibold text-primary">
                  performance optimization
                </span>
                ,{' '}
                <span className="font-semibold text-primary">
                  UI/UX enhancement
                </span>
                , and exploring the potential of{' '}
                <span className="font-semibold text-primary">AI</span> in
                creating smarter user experiences.
              </p>
            </div>

            {/* Right Column - Key Traits */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold mb-4">Key Strengths</h3>
              <div className="space-y-4">
                {personalTraits.map((trait, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <trait.icon className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <span className="font-semibold">{trait.title}</span>{' '}
                      <span className="text-gray-600 dark:text-gray-300">
                        {trait.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
