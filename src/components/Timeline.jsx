import { useState } from 'react';

export default function Timeline() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const timelineData = [
    {
      id: 1,
      year: "Jan '23",
      title: "ML Engineer",
      details: (
        <div>
          <ul className="list-disc list-inside space-y-1 text-gray-300 dark:text-gray-300 light:text-gray-700">
            <li>I joined Reliance Jio as an ML Engineer.</li>
            <li>The team was working on gender and age based ad-targeting using the voice captured from the remote's mic.</li>
            <li>Machine learning models were trained using the mozilla common voice dataset on American English which was later extended to some of the Indian regional languages.</li>
          </ul>
        </div>
      ),
      type: "work",
      icon: "🏢",
      color: "purple"
    },
    {
      id: 2,
      year: "Jul '23",
      title: "Bachelor's",
      details: (
        <div>
          <ul className="list-disc list-inside space-y-1 text-gray-300 dark:text-gray-300 light:text-gray-700">
            <li>I earned my Bachelor's degree in Computer Science and Engineering with a specialization in Deep Learning and graduated <i>summa cum laude</i>.</li>
            <li>I received a 90% scholarship throughout my undergraduate studies for academic excellence.</li>
            <li>I took courses such as Machine Learning, Foundations of Data Science, Neural Networks and Deep Learning, Mining of Massive Datasets, and Cloud Computing which laid the foundation for my master's.</li>
          </ul>
        </div>
      ),
      type: "education",
      icon: "🎓",
      color: "blue"
    },
    {
      id: 3,
      year: "Feb '24",
      title: "Data Analyst",
      details: (
        <div>
          <ul className="list-disc list-inside space-y-1 text-gray-300 dark:text-gray-300 light:text-gray-700">
            <li>I joined Ryzklytix Consulting Solutions.</li>
            <li>I developed an end-to-end prototype for a product using Python and Streamlit.</li>
            <li>I was later moved to the R&D team to work on the backend technologies to develop functions and stored procedures on MySQL Server.</li>
          </ul>
        </div>
      ),
      type: "work",
      icon: "💻",
      color: "red"
    },
    {
      id: 4,
      year: "Apr '24",
      title: "Publication",
      details: "I co-authored a paper on Proof-of-Trust-in-Expertise (PoTE): A Consensus Mechanism for Healthcare based Consortium Blockchains which was presented at the International Conference on Innovative Computing & Communication (ICICC) 2024.",
      type: "research",
      icon: "📄",
      color: "green"
    },
    {
      id: 5,
      year: "Sep '24",
      title: "Master's",
      details: (
        <div>
          <ul className="list-disc list-inside space-y-1 text-gray-300 dark:text-gray-300 light:text-gray-700">
            <li>I started my graduate studies at the Khoury College of Computer Sciences, Northeastern University, Boston.</li>
            <li>I am currently pursuing my Master's in Artificial Intelligence.</li>
            <li>The courses I've taken include CS5010: Program Design Paradigms, CS5100: Foundations of AI, CS5180: Reinforcement Learning, and CS5800: Algorithms.</li>
          </ul>
        </div>
      ),
      type: "education",
      icon: "📚",
      color: "indigo"
    },
    {
      id: 6,
      year: "Jun '25",
      title: "AI Intern",
      details: (
        <div>
          <ul className="list-disc list-inside space-y-1 text-gray-300 dark:text-gray-300 light:text-gray-700">
            <li>I joined CognitiveHealth Solutions.</li>
            <li>I built production-ready OCR system with secure API management, cross-platform deployment, and automated testing.</li>
            <li>I reduced healthcare document processing time by 95% through LLM-based n8n pipeline with advanced prompt engineering.</li>
          </ul>
        </div>
      ),
      type: "work",
      icon: "🚀",
      color: "teal"
    },
    {
      id: 7,
      year: "Sep '25",
      title: "TA",
      details: "As a Graduate Teaching Assistant at Northeastern, I work with over 40 undergrads each week, helping them tackle discrete math concepts like graph theory and combinatorics.",
      type: "work",
      icon: "🧠",
      color: "amber"
    },
  ];

  const getColorClasses = (color, isSelected = false) => {
    const colors = {
      blue: {
        bg: isSelected ? 'bg-blue-500' : 'bg-blue-600',
        text: 'text-blue-400 dark:text-blue-400 light:text-blue-600',
        hover: 'hover:bg-blue-500',
        ring: 'ring-blue-400'
      },
      purple: {
        bg: isSelected ? 'bg-purple-500' : 'bg-purple-600',
        text: 'text-purple-400 dark:text-purple-400 light:text-purple-600',
        hover: 'hover:bg-purple-500',
        ring: 'ring-purple-400'
      },
      green: {
        bg: isSelected ? 'bg-green-500' : 'bg-green-600',
        text: 'text-green-400 dark:text-green-400 light:text-green-600',
        hover: 'hover:bg-green-500',
        ring: 'ring-green-400'
      },
      red: {
        bg: isSelected ? 'bg-red-500' : 'bg-red-600',
        text: 'text-red-400 dark:text-red-400 light:text-red-600',
        hover: 'hover:bg-red-500',
        ring: 'ring-red-400'
      },
      indigo: {
        bg: isSelected ? 'bg-indigo-500' : 'bg-indigo-600',
        text: 'text-indigo-400 dark:text-indigo-400 light:text-indigo-600',
        hover: 'hover:bg-indigo-500',
        ring: 'ring-indigo-400'
      },
      teal: {
        bg: isSelected ? 'bg-teal-500' : 'bg-teal-600',
        text: 'text-teal-400 dark:text-teal-400 light:text-teal-600',
        hover: 'hover:bg-teal-500',
        ring: 'ring-teal-400'
      },
      amber: {
        bg: isSelected ? 'bg-amber-500' : 'bg-amber-600',
        text: 'text-amber-400 dark:text-amber-400 light:text-amber-600',
        hover: 'hover:bg-amber-500',
        ring: 'ring-amber-400'
      }
    };
    return colors[color] || colors.blue;
  };

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(selectedMilestone?.id === milestone.id ? null : milestone);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 mt-8 overflow-x-hidden">
      <div className="text-center mb-8">
        <p className="text-gray-400 dark:text-gray-400 light:text-gray-500">Click on any year to explore that milestone</p>
      </div>

      {/* Horizontal Timeline */}
      <div className="relative mb-8 overflow-x-auto px-4">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-600 dark:bg-gray-600 light:bg-gray-300 transform -translate-y-1/2"></div>

        <div className="flex justify-start md:justify-between items-center relative min-w-max md:min-w-0 gap-8 md:gap-0">
          {timelineData.map((milestone) => (
            <div key={milestone.id} className="flex flex-col items-center group flex-shrink-0">
              <div className={`text-xs font-medium mb-2 transition-colors ${
                selectedMilestone?.id === milestone.id
                  ? getColorClasses(milestone.color).text
                  : 'text-gray-400 dark:text-gray-400 light:text-gray-500 group-hover:text-gray-300 dark:group-hover:text-gray-300 light:group-hover:text-gray-700'
              }`}>
                {milestone.year}
              </div>

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

              <div className={`text-xs text-center mt-2 max-w-20 leading-tight transition-colors ${
                selectedMilestone?.id === milestone.id
                  ? 'text-white dark:text-white light:text-gray-900 font-medium'
                  : 'text-gray-500 dark:text-gray-500 group-hover:text-gray-400 dark:group-hover:text-gray-400 light:group-hover:text-gray-600'
              }`}>
                {milestone.title.split(' ').slice(0, 2).join(' ')}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Details */}
      {selectedMilestone && (
        <div className="bg-gray-800 dark:bg-gray-800 light:bg-white rounded-xl p-6 border border-gray-700 dark:border-gray-700 light:border-gray-200 shadow-lg transition-all duration-300">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl mr-4 ${getColorClasses(selectedMilestone.color, true).bg} shadow-lg`}>
                {selectedMilestone.icon}
              </div>
              <div>
                <div className={`text-sm font-medium ${getColorClasses(selectedMilestone.color).text}`}>
                  {selectedMilestone.year}
                </div>
                <h4 className="text-xl font-bold text-white dark:text-white light:text-gray-900 mb-1">
                  {selectedMilestone.title}
                </h4>
                <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getColorClasses(selectedMilestone.color).bg} text-white`}>
                  {selectedMilestone.type.toUpperCase()}
                </div>
              </div>
            </div>

            <button
              onClick={() => setSelectedMilestone(null)}
              className="text-gray-500 dark:text-gray-500 light:text-gray-400 hover:text-white dark:hover:text-white light:hover:text-gray-700 transition-colors p-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div className="text-gray-300 dark:text-gray-300 light:text-gray-700 leading-relaxed mb-4">
            {selectedMilestone.details}
          </div>
        </div>
      )}

      {/* Download Resume */}
      <div className="text-center mt-12 pt-8 border-t border-gray-700 dark:border-gray-700 light:border-gray-200">
        <p className="text-gray-400 dark:text-gray-400 light:text-gray-500 text-sm mb-3">
          Interested in learning more about my background and experience?
        </p>
        <a
          href="https://drive.google.com/file/d/1kZQJwwA91-22L1exEG6hQNksX0IU6MrX/view?usp=sharing"
          download="Akhilesh_Kasturi.pdf"
          className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 light:bg-gray-100 light:hover:bg-gray-200 text-white dark:text-white light:text-gray-900 font-medium py-3 px-6 rounded-lg border-2 border-gray-600 dark:border-gray-600 light:border-gray-300 hover:border-gray-500 dark:hover:border-gray-500 light:hover:border-gray-400 transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span>Download Resume</span>
          <div className="text-xs opacity-75">PDF</div>
        </a>
        <p className="text-gray-500 dark:text-gray-500 light:text-gray-400 text-xs mt-3">
          Updated {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </div>
    </div>
  );
}
