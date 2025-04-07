import { motion } from 'motion/react';
import { CV } from '@/data/cv';
import { CheckCircle2 } from 'lucide-react';

const personalTraits = [
  {
    title: 'Problem Solver:',
    description:
      'I enjoy tackling complex challenges and finding elegant solutions.',
  },
  {
    title: 'Detail-Oriented:',
    description:
      'I pay close attention to the small details that create exceptional user experiences.',
  },
  {
    title: 'Continuous Learner:',
    description:
      "I'm always exploring new technologies and staying up-to-date with industry trends.",
  },
  {
    title: 'Team Player:',
    description:
      'I value collaboration and believe the best results come from diverse perspectives.',
  },
  {
    title: 'Goal-Oriented:',
    description:
      "I'm focused on delivering high-quality work that meets project objectives.",
  },
];

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-neutral-900  scroll-mt-12   "
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
            My journey from electrical engineering to front-end development
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Main Content */}
            <div className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm a passionate Front-End Developer with 4 years of experience
                specializing in React.js. My journey began with a degree in
                Electrical Engineering from Hanoi University of Science and
                Technology, but my curiosity led me to discover the world of web
                development, where I found my true calling.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I excel at transforming complex designs into responsive,
                performant web interfaces. Having worked across diverse
                projects—from property management platforms to machine learning
                systems—I've developed a keen eye for detail and a deep
                understanding of creating exceptional user experiences.
              </p>

              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I thrive in collaborative environments where I can contribute my
                technical expertise and learn from talented team members. My
                approach combines technical excellence with creative
                problem-solving to deliver solutions that exceed expectations.
              </p>
            </div>

            {/* Right Column - Personal Traits Card */}
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Personal Traits</h3>
                  <div className="space-y-4">
                    {personalTraits.map((trait, index) => (
                      <div key={index} className="flex gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
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

                <div>
                  <h3 className="text-xl font-bold mb-4">Goals</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    My aim is to continue growing as a developer while creating
                    impactful digital experiences. I'm particularly interested
                    in performance optimization, state management patterns, and
                    building accessible interfaces that work for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
