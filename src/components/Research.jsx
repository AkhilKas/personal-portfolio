import { useState } from 'react';

export default function Research() {

  const publications = [
    {
      title: "Proof-of-Trust-in-Expertise (PoTE): A Consensus Mechanism for Healthcare based Consortium Blockchains",
      authors: ["Akhilesh Kasturi", "Beena B.M"],
      venue: "Proceedings of the International Conference on Innovative Computing & Communication (ICICC 2024)",
      year: "2024",
      type: "Conference Paper",
      abstract: "The growing adoption of blockchain in healthcare promotes reliable patient data management. Establishing a consortium blockchain network interconnecting hospitals, diagnostic laboratories, and pharmaceutical entities ensures real-time tamper-evident access to patient records. This decentralized model enhances the data exchange efficiency and fortifies security through immutable audit trails. Beyond expediting emergency access to comprehensive medical histories, blockchains prevent authoritative data control and commercial exploitation. Patient empowerment and trust are pivotal, prompting our paper to introduce Proof-of-Trust-in-Expertise (PoTE), a consensus mechanism leveraging medical professionals' trust and expertise, an innovative departure from Proof-of-Work (PoW) and Proof-of-Stake (PoS).",
      keywords: ["Blockchain", "Consensus Mechanism", "Healthcare", "Proof-of-Trust", "Consortium Blockchain", "Trust Management"],
      ssrnId: "4804243",
      status: "Published",
      metrics: {
        downloads: "50+",
        citations: "1",
        views: "300+"
      },
      links: {
        ssrn: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4804243",
        pdf: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4804243"
      }
    }
  ];

  const researchAreas = [
    {
      title: "Machine Learning",
      description: "Developing novel algorithms and architectures for complex AI problems",
      icon: "🧠",
      projects: ["Multi-frame Depth Estimation", "Neural Architecture Search"]
    },
    {
      title: "Computer Vision",
      description: "Advanced perception systems for autonomous vehicles and robotics",
      icon: "👁️",
      projects: ["LiDAR Point Cloud Processing", "3D Object Detection"]
    },
    {
      title: "Audio Processing",
      description: "Signal processing and machine learning for acoustic analysis",
      icon: "🎵",
      projects: ["Voice Classification", "Audio Feature Extraction"]
    }
  ];

  const getMetricColor = (type) => {
    switch (type) {
      case 'downloads': return 'text-blue-400';
      case 'citations': return 'text-green-400';
      case 'views': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <section className="min-h-screen p-10 scroll-mt-16 md:scroll-mt-20 lg:scroll-mt-24" id="research">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4 text-center">
            Research & Publications
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Exploring the frontiers of artificial intelligence through rigorous research, 
            with focus on machine learning, computer vision, and practical AI applications.
          </p>
        </div>

        {/* Published Research */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
            <svg className="w-6 h-6 mr-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h8a1 1 0 100-2H5z" clipRule="evenodd" />
            </svg>
            Published Research
          </h3>

          {publications.map((paper, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-lg mb-8">
              {/* Paper Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium mr-3 ${
                      paper.status === 'Published' 
                        ? 'bg-green-600/20 text-green-400 border border-green-600/30' 
                        : 'bg-yellow-600/20 text-yellow-400 border border-yellow-600/30'
                    }`}>
                      {paper.status}
                    </span>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 rounded-full text-xs font-medium">
                      {paper.type}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2 leading-tight">
                    {paper.title}
                  </h4>
                  
                  <div className="text-gray-300 mb-2">
                    <span className="font-medium">{paper.authors.join(", ")}</span>
                  </div>
                  
                  <div className="text-gray-400 text-sm">
                    <span className="font-medium">{paper.venue}</span> • {paper.year}
                    {paper.ssrnId && (
                      <span className="ml-2">• SSRN ID: {paper.ssrnId}</span>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="flex mt-4 md:mt-0 md:ml-6 space-x-6">
                  {Object.entries(paper.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className={`text-lg font-bold ${getMetricColor(key)}`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Abstract */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-400 mb-2">ABSTRACT</h5>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {paper.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-gray-400 mb-2">KEYWORDS</h5>
                <div className="flex flex-wrap gap-2">
                  {paper.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md font-medium"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={paper.links.ssrn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h8a1 1 0 100-2H5z" clipRule="evenodd" />
                  </svg>
                  View on SSRN
                </a>

                <button 
                  onClick={() => {
                    const citation = "Bagga, Karan Singh and Kasturi, Akhilesh and Kunrarasu, Sonaakshi Shri and B.M, Beena, Proof-of-Trust-in-Expertise (PoTE): A Consensus Mechanism for Healthcare based Consortium Blockchains (April 23, 2024). Proceedings of the International Conference on Innovative Computing & Communication (ICICC 2024), Available at SSRN: https://ssrn.com/abstract=4804243 or http://dx.doi.org/10.2139/ssrn.4804243";
                    navigator.clipboard.writeText(citation);
                    // Optional: Show a brief success message
                    const button = event.target.closest('button');
                    const originalText = button.innerHTML;
                    button.innerHTML = '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>Copied!';
                    setTimeout(() => {
                      button.innerHTML = originalText;
                    }, 2000);
                  }}
                  className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Cite Paper
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>  

        {/* Research Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white flex items-center">
            <svg className="w-6 h-6 mr-3 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Research Areas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors">
                <div className="text-3xl mb-4">{area.icon}</div>
                <h4 className="text-xl font-semibold text-white mb-3">{area.title}</h4>
                <p className="text-gray-300 text-sm mb-4">{area.description}</p>
                <div className="space-y-2">
                  {area.projects.map((project, idx) => (
                    <div key={idx} className="text-xs text-gray-400 flex items-center">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-2"></span>
                      {project}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}