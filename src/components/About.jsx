import Timeline from './Timeline';
import TechStack from './TechStack';

export default function About() {
  return (
    <section className="min-h-screen p-10 scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24 bg-gray-900 dark:bg-gray-900 light:bg-white" id="about">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center text-white dark:text-white light:text-gray-900">
          About Me
        </h2>

        <div className="text-gray-300 dark:text-gray-300 light:text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto space-y-4">
          <p>
            I'm a graduate student at <span className="text-blue-400 dark:text-blue-400 light:text-blue-600 font-medium">Khoury College of Computer Sciences, Northeastern University</span>,
            pursuing my Master's in Artificial Intelligence. My research interests span across
            computer vision, blockchain technology, and healthcare applications of AI.
          </p>
          <p>
            With a strong foundation in machine learning and deep learning, I'm passionate about
            building impactful AI systems that solve real-world problems. My work focuses on developing
            <span className="text-purple-400 dark:text-purple-400 light:text-purple-600 font-medium"> trustworthy and reliable intelligent systems</span> for
            critical applications like healthcare and autonomous systems.
          </p>
          <p>
            Currently, I'm preparing for <span className="text-green-400 dark:text-green-400 light:text-green-600 font-medium">Full-Time AI/ML opportunities</span> beginning Summer '26 with
            a focus on machine learning engineering, large language model applications, and production AI systems.
          </p>
        </div>
      </div>

      <Timeline />
      <TechStack />
    </section>
  );
}
