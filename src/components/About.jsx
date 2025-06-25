import Timeline from './Timeline';
import TechStack from './TechStack';

export default function About() {
  return (
    <section className="min-h-screen p-10 scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24" id="about">
      {/* About Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4 text-center">
          About Me
        </h2>
        
        {/* About Content */}
        <div className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto space-y-4">
          <p>
            I'm a graduate student at <span className="text-blue-400 font-medium">Khoury College of Computer Sciences, Northeastern University</span>, 
            pursuing my Master's in Artificial Intelligence. My research interests span across 
            computer vision, blockchain technology, and healthcare applications of AI.
          </p>
          <p>
            With a strong foundation in machine learning and deep learning, I'm passionate about 
            building impactful AI systems that solve real-world problems. My work focuses on developing 
            <span className="text-purple-400 font-medium"> trustworthy and reliable intelligent systems</span> for 
            critical applications like healthcare and autonomous systems.
          </p>
          <p>
            Currently, I'm preparing for <span className="text-green-400 font-medium">PhD applications</span> with 
            a focus on AI applications in healthcare, particularly interested in the intersection of 
            machine learning and medical applications.
          </p>
        </div>
      </div>

      {/* Journey Timeline */}
      <Timeline />
      
      {/* Tech Stack */}
      <TechStack />
    </section>
  );
}