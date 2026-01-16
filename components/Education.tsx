export default function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Education & Achievements
        </h2>
        
        {/* Education */}
        <div className="mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Bachelor of Technology in Computer Science and Engineering
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  Mahatma Gandhi Institute of Technology
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  GPA: 8.0/10.0
                </p>
              </div>
              <span className="text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                2018 - 2022
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              Hyderabad, India
            </p>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            🏆 Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🌟</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Q4 FY24 105% Over and Above Performer Award
                  </h4>
                  <p className="text-gray-700 dark:text-gray-200">
                    Recognized at Infor WMS for exceptional backend development contributions and outstanding performance
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-6 rounded-lg shadow-md">
              <div className="flex items-start gap-3">
                <span className="text-3xl">🚀</span>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Rookie of the Team
                  </h4>
                  <p className="text-gray-700 dark:text-gray-200">
                    Recognized for quick adaptability and making strong impact early in the role at Infor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            📜 Certifications
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-blue-600">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                CS50 Introduction to Computer Science
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Harvard University</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-green-600">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Python 3 Programming & Data Science
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">NPTEL</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border-l-4 border-purple-600">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                Introduction to Blockchain
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Certified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
