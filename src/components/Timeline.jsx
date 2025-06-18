import { useState } from 'react';

export default function Timeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const timelineData = [
    {
      id: 1,
      year: "2021",
      title: "Undergraduate Studies",
      description: "Completed Bachelor's degree, discovered passion for AI",
      details: "During my undergraduate studies, I was first introduced to the fascinating world of artificial intelligence. Key courses in algorithms, data structures, and introductory machine learning sparked my interest in pursuing advanced research in this field.",
      type: "education",
      icon: "🎓",
      color: "blue"
    },
    {
      id: 2,
      year: "2022",
      title: "Started MS at Northeastern",
      description: "Began graduate studies at Khoury College",
      details: "Joined Northeastern University's prestigious AI program. Started working with cutting-edge research in machine learning, computer vision, and deep learning. Began collaborating with faculty and fellow researchers on challenging AI problems.",
      type: "education", 
      icon: "🏛️",
      color: "purple"
    },
    {
      id: 3,
      year: "2023",
      title: "First Research Projects",
      description: "Started working on LiDAR and computer vision",
      details: "Dove deep into computer vision research, specifically working on bird's eye view visualizations from NuScenes LiDAR data. Developed expertise in 3D point cloud processing, semantic segmentation, and real-time perception systems.",
      type: "research",
      icon: "🔬",
      color: "green"
    },
    {
      id: 4,
      year: "2024",
      title: "PoTE Paper Published",
      description: "Published blockchain consensus research",
      details: "Co-authored 'Proof-of-Trust-in-Expertise (PoTE): A Consensus Mechanism for Healthcare based Consortium Blockchains' - a novel approach to securing healthcare data through blockchain technology. Paper presented at ICICC 2024 conference.",
      type: "publication",
      icon: "📄",
      color: "red"
    },
    {
      id: 5,
      year: "2025",
      title: "Advanced Research",
      description: "Multi-modal AI systems research",
      details: "Currently advancing research in multiple domains: DepthAnything-based multi-frame depth estimation, voice-based age and gender classification, and exploring the intersection of computer vision and audio processing.",
      type: "research",
      icon: "🧠",
      color: "indigo"
    },
    {
      id: 6,
      year: "Future",
      title: "PhD Aspirations",
      description: "Planning PhD in AI research",
      details: "Preparing for PhD applications with a focus on AI applications in healthcare. Interested in developing trustworthy AI systems, exploring the intersection of machine learning and medical applications.",
      type: "goal",
      icon: "🚀",
      color: "yellow"
    }
  ];

  const getColorClasses = (color, isSelected = false) => {
    const colors = {
      blue: {
        bg: isSelected ? 'bg-blue-500' : 'bg-blue-600',
        text: 'text-blue-400',
        border: 'border-blue-500',
        hover: 'hover:bg-blue-500',
        ring: 'ring-blue-400'
      },
      purple: {
        bg: isSelected ? 'bg-purple-500' : 'bg-purple-600',
        text: 'text-purple-400',
        border: 'border-purple-500',
        hover: 'hover:bg-purple-500',
        ring: 'ring-purple-400'
      },
      green: {
        bg: isSelected ? 'bg-green-500' : 'bg-green-600',
        text: 'text-green-400',
        border: 'border-green-500',
        hover: 'hover:bg-green-500',
        ring: 'ring-green-400'
      },
      red: {
        bg: isSelected ? 'bg-red-500' : 'bg-red-600',
        text: 'text-red-400',
        border: 'border-red-500',
        hover: 'hover:bg-red-500',
        ring: 'ring-red-400'
      },
      indigo: {
        bg: isSelected ? 'bg-indigo-500' : 'bg-indigo-600',
        text: 'text-indigo-400',
        border: 'border-indigo-500',
        hover: 'hover:bg-indigo-500',
        ring: 'ring-indigo-400'
      },
      yellow: {
        bg: isSelected ? 'bg-yellow-500' : 'bg-yellow-600',
        text: 'text-yellow-400',
        border: 'border-yellow-500',
        hover: 'hover:bg-yellow-500',
        ring: 'ring-yellow-400'
      }
    };
    return colors[color] || colors.blue;
  };

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(selectedMilestone?.id === milestone.id ? null : milestone);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 mt-8 scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24" id="about">
      {/* Timeline Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold mb-4 text-center">About Me</h2>
        <p className="text-gray-400">Click on any year to explore that milestone</p>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative mb-8">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 transform -translate-y-1/2"></div>
        
        {/* Timeline Points */}
        <div className="flex justify-between items-center relative">
          {timelineData.map((milestone, index) => (
            <div key={milestone.id} className="flex flex-col items-center group">
              {/* Year Label */}
              <div className={`text-xs font-medium mb-2 transition-colors ${
                selectedMilestone?.id === milestone.id 
                  ? getColorClasses(milestone.color).text 
                  : 'text-gray-400 group-hover:text-gray-300'
              }`}>
                {milestone.year}
              </div>
              
              {/* Timeline Dot */}
              <button
                onClick={() => handleMilestoneClick(milestone)}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg transition-all duration-300 transform hover:scale-110 ${
                  selectedMilestone?.id === milestone.id 
                    ? `${getColorClasses(milestone.color, true).bg} ring-4 ${getColorClasses(milestone.color).ring} ring-opacity-30 scale-110` 
                    : `${getColorClasses(milestone.color).bg} ${getColorClasses(milestone.color).hover} shadow-lg hover:shadow-xl`
                } z-10 relative`}
              >
                {milestone.icon}
              </button>
              
              {/* Title Below */}
              <div className={`text-xs text-center mt-2 max-w-20 leading-tight transition-colors ${
                selectedMilestone?.id === milestone.id 
                  ? 'text-white font-medium' 
                  : 'text-gray-500 group-hover:text-gray-400'
              }`}>
                {milestone.title.split(' ').slice(0, 2).join(' ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Details */}
      {selectedMilestone && (
        <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-lg transition-all duration-300 transform">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl mr-4 ${
                getColorClasses(selectedMilestone.color, true).bg
              } shadow-lg`}>
                {selectedMilestone.icon}
              </div>
              <div>
                <div className={`text-sm font-medium ${getColorClasses(selectedMilestone.color).text}`}>
                  {selectedMilestone.year}
                </div>
                <h4 className="text-xl font-bold text-white mb-1">
                  {selectedMilestone.title}
                </h4>
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                  getColorClasses(selectedMilestone.color).bg
                } text-white`}>
                  {selectedMilestone.type.toUpperCase()}
                </div>
              </div>
            </div>
            
            <button
              onClick={() => setSelectedMilestone(null)}
              className="text-gray-400 hover:text-white transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <p className="text-gray-300 leading-relaxed mb-4">
            {selectedMilestone.details}
          </p>

          {selectedMilestone.type === 'publication' && (
            <div className="pt-4 border-t border-gray-700">
              <a
                href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4804243"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h8a1 1 0 100-2H5z" clipRule="evenodd" />
                </svg>
                View Publication
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
}