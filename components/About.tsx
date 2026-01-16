export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About Me
        </h2>
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm a Software Engineer at Infor with expertise in building enterprise grade warehouse management systems. 
            With a strong foundation in Java, Spring Boot, and cloud technologies, I specialize in delivering 
            end to end backend solutions that drive business value.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            My experience includes optimizing database queries, implementing fault tolerant systems using Kafka, 
            and migrating critical processes to improve performance. I've successfully resolved complex bugs with 
            95% accuracy and led efforts to enhance system stability and efficiency. I'm recognized as a 
            Q4 FY24 105% Over and Above Performer and Rookie of the Team at Infor.
          </p>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
            I hold a Bachelor's degree in Computer Science from Mahatma Gandhi Institute of Technology with an 8.0 GPA. 
            I'm passionate about continuous learning, having completed certifications in CS50, Python Programming, 
            and Blockchain technology. When I'm not coding, I enjoy exploring new technologies and contributing to 
            innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
