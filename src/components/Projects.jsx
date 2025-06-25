export default function Projects() {
  const projects = [
    {
      title: "Bird's Eye View Visualizations from NuScenes LiDAR",
      description: "Developed advanced computer vision pipeline to transform 3D LiDAR point clouds into interpretable bird's eye view representations. Implemented semantic segmentation and object detection algorithms optimized for autonomous vehicle perception systems.",
      technologies: ["Python", "PyTorch", "Open3D", "NumPy", "OpenCV"],
      category: "Computer Vision",
      status: "In Progress",
      image: "/api/placeholder/400/250", // Placeholder for now
      github: "#", // Replace with actual links
      demo: "#",
      highlights: [
        "Multi-sensor fusion with camera and radar data",
        "Real-time processing pipeline achieving 30+ FPS",
        "Custom loss functions for depth estimation accuracy"
      ]
    },
    {
      title: "DepthAnything-based Multi-frame Depth Estimation",
      description: "Enhanced monocular depth estimation by leveraging temporal consistency across video frames. Built upon DepthAnything foundation model with custom architectural improvements for robust depth prediction in dynamic scenes.",
      technologies: ["PyTorch", "Transformers", "CUDA", "OpenCV", "Matplotlib"],
      category: "Deep Learning",
      status: "Completed",
      image: "/api/placeholder/400/250",
      github: "#",
      demo: "#",
      highlights: [
        "40% improvement in depth accuracy over baseline",
        "Novel temporal attention mechanism",
        "Optimized for edge deployment with TensorRT"
      ]
    },
    {
      title: "Voice-based Age and Gender Classification",
      description: "Implemented multi-task deep learning model for simultaneous age and gender prediction from audio signals. Applied advanced signal processing techniques and transformer architectures for robust acoustic feature extraction.",
      technologies: ["TensorFlow", "Librosa", "Scikit-learn", "Pandas", "Streamlit"],
      category: "Audio ML",
      status: "Completed",
      image: "/api/placeholder/400/250",
      github: "#",
      demo: "#",
      highlights: [
        "91% accuracy on age classification",
        "95% accuracy on gender classification",
        "Real-time inference with web interface"
      ]
    }
  ];

  return (
    <section className="min-h-screen p-10 scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Exploring the frontiers of AI and machine learning through hands-on research and development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-blue-500/50"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                <div className="text-4xl text-blue-400/30">
                  {project.category === 'Computer Vision' && '👁️'}
                  {project.category === 'Deep Learning' && '🧠'}
                  {project.category === 'Audio ML' && '🎵'}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/90 text-white text-sm rounded-full font-medium">
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 text-xs rounded-full font-medium ${
                    project.status === 'Completed' 
                      ? 'bg-green-600/90 text-white' 
                      : 'bg-yellow-600/90 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-xs text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md font-medium hover:bg-gray-600 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                    </svg>
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}