export default function Projects() {
  const projects = [
    {
      title: 'BG Pause & Resume System',
      description: 'Implemented a fault tolerant service that pauses background processes during graceful shutdown and resumes them when restarted. Utilized Kafka to maintain process job lists and designed UI with database tables to visualize process flow, ensuring zero data loss during service outages.',
      technologies: ['Java', 'Kafka', 'RESTful APIs', 'SQL Server', 'Spring Boot'],
    },
    {
      title: 'Fee Management Portal',
      description: 'Developed a comprehensive fee management system with Spring Boot backend and Angular frontend. Implemented JWT token based security, designed ER diagrams and used JPA for relationship management. Built responsive frontend components for CRUD operations on student, payment, and course data.',
      technologies: ['Java', 'Spring Boot', 'Angular', 'SQL Server', 'JWT', 'JPA'],
    },
    {
      title: 'Process Migration & Optimization',
      description: 'Migrated critical foreground processes to background execution using Java multithreading, significantly improving system responsiveness. Optimized database queries for better performance and faster response times, reducing query execution time by 40%.',
      technologies: ['Java', 'Multithreading', 'SQL Optimization', 'Oracle', 'Performance Tuning'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
