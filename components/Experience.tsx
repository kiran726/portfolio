export default function Experience() {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Infor',
      period: 'April 2022 - Present',
      description: 'Working on Infor Cloud Suite WMS, delivering end to end solutions based on business requirements. Led debugging efforts and optimized system performance, achieving 95% accuracy in resolving hard to replicate issues. Developed batch process resumption system using Kafka for service outages and migrated foreground processes to background using Java multithreading. Managed build and deployment processes, reducing downtime and streamlining releases.',
      technologies: ['Java', 'Spring Boot', 'Kafka', 'RESTful APIs', 'SQL Server', 'AWS', 'Jenkins', 'Docker']
    },
    {
      title: 'Intern - Machine Learning',
      company: 'Indian Servers',
      period: 'January 2022 - March 2022',
      description: 'Gained practical experience in Python and Java for data processing and ML model implementation. Worked with supervised and unsupervised machine learning algorithms, and developed models using Keras. Explored transfer learning concepts and contributed to real time company projects involving machine learning and deep learning solutions.',
      technologies: ['Python', 'Java', 'Keras', 'Machine Learning', 'Deep Learning']
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">
                    {exp.company}
                  </p>
                </div>
                <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
