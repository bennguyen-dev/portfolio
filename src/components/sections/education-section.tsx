import { motion } from 'motion/react';
import { CV } from '@/data/cv';
import { GraduationCap, Award, Medal, Calendar } from 'lucide-react';

const EducationCard = ({
  education,
}: {
  education: (typeof CV.education)[0];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-primary/10 rounded-lg">
        <GraduationCap className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{education.institution}</h3>
        <p className="text-primary font-medium mt-1">{education.degree}</p>
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
          <Calendar className="w-4 h-4" />
          <span>
            {education.start_date} - {education.end_date}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Studied electrical engineering with a focus on control systems and
          automation. Developed strong analytical and problem-solving skills
          that have been valuable in my software development career.
        </p>
      </div>
    </div>
  </motion.div>
);

const CertificationCard = ({
  certification,
}: {
  certification: (typeof CV.certifications)[0];
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-primary/10 rounded-lg">
        <Award className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{certification.name}</h3>
        <p className="text-primary font-medium mt-1">
          {certification.organization}
        </p>
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
          <Calendar className="w-4 h-4" />
          <span>{certification.date}</span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Certification covering PHP frameworks, database design, and web
          application development.
        </p>
      </div>
    </div>
  </motion.div>
);

const AwardCard = ({ award }: { award: (typeof CV.awards)[0] }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-primary/10 rounded-lg">
        <Medal className="w-6 h-6 text-primary" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold">{award.name}</h3>
        <p className="text-primary font-medium mt-1">{award.description}</p>
        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2">
          <Calendar className="w-4 h-4" />
          <span>{award.year}</span>
        </div>
      </div>
    </div>
  </motion.div>
);

export const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-neutral-900 scroll-mt-12"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4 text-center">
            Education & Certifications
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center text-lg mb-12">
            My academic background and professional qualifications
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education Section */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {CV.education.map((edu, index) => (
                  <EducationCard key={index} education={edu} />
                ))}
              </div>
            </div>

            {/* Certifications & Awards Section */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Award className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Certifications</h3>
                </div>
                <div className="space-y-6">
                  {CV.certifications.map((cert, index) => (
                    <CertificationCard key={index} certification={cert} />
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Medal className="w-6 h-6" />
                  <h3 className="text-2xl font-bold">Awards</h3>
                </div>
                <div className="space-y-6">
                  {CV.awards.map((award, index) => (
                    <AwardCard key={index} award={award} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
