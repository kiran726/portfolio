export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Java', 'Python', 'JavaScript', 'SQL'],
      icon: '💻'
    },
    {
      category: 'Backend & Frameworks',
      skills: ['Spring Boot', 'Spring Framework', 'Hibernate', 'JPA', 'EJB', 'Kafka', 'Redis'],
      icon: '⚙️'
    },
    {
      category: 'Frontend',
      skills: ['Angular', 'Next.js', 'Tailwind CSS', 'RESTful APIs'],
      icon: '🎨'
    },
    {
      category: 'Databases',
      skills: ['SQL Server', 'Oracle', 'AWS Aurora'],
      icon: '🗄️'
    },
    {
      category: 'DevOps & Cloud',
      skills: ['AWS', 'Docker', 'Jenkins', 'CI/CD', 'Git', 'SVN'],
      icon: '☁️'
    },
    {
      category: 'Tools & Testing',
      skills: ['JUnit', 'Mockito', 'Jira', 'Postman', 'Eclipse', 'SSMS'],
      icon: '🛠️'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Skills & Technologies
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          Specialized in backend development with expertise across the full technology stack
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow border-t-4 border-blue-600"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    {skill}
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
