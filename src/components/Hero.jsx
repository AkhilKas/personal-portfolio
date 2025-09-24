import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "am pursuing my master's in AI @ Northeastern.",
    "am working on ways to predict the onset on cancer.",
    "am actively looking to collaborate on research in the heathcare industry.",
    "love playing tennis during the weekends!"
  ];

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isDeleting) {
        // Deleting text
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypingSpeed(75); // Faster deletion
      } else {
        // Typing text
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypingSpeed(150); // Normal typing speed
      }

      // Check if word is complete
      if (!isDeleting && currentText === currentRole) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        // Move to next word
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-10 pt-32 scroll-mt-20 relative overflow-hidden" id="hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Mathematical Symbols */}
        <div className="absolute top-20 left-10 opacity-20 text-blue-400 text-2xl font-serif animate-float">
          ∑
        </div>
        <div className="absolute top-32 right-16 opacity-15 text-purple-400 text-xl font-serif animate-float-delayed">
          λ
        </div>
        <div className="absolute top-1/4 left-1/4 opacity-25 text-green-400 text-lg font-serif animate-float-slow">
          ∇
        </div>
        <div className="absolute top-1/3 right-1/3 opacity-20 text-indigo-400 text-2xl font-serif animate-float">
          θ
        </div>
        <div className="absolute bottom-1/3 left-1/5 opacity-15 text-cyan-400 text-xl font-serif animate-float-delayed">
          ∫
        </div>
        <div className="absolute bottom-1/4 right-1/4 opacity-20 text-teal-400 text-lg font-serif animate-float-slow">
          α
        </div>
        <div className="absolute top-1/2 left-1/6 opacity-25 text-rose-400 text-xl font-serif animate-float">
          π
        </div>
        <div className="absolute bottom-1/2 right-1/6 opacity-15 text-amber-400 text-2xl font-serif animate-float-delayed">
          Σ
        </div>
        <div className="absolute top-3/4 left-1/3 opacity-20 text-violet-400 text-lg font-serif animate-float-slow">
          δ
        </div>
        <div className="absolute bottom-1/5 right-1/5 opacity-25 text-emerald-400 text-xl font-serif animate-float">
          ε
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.2;
          }
          25% { 
            transform: translateY(-10px) rotate(5deg); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-15px) rotate(0deg); 
            opacity: 0.25;
          }
          75% { 
            transform: translateY(-8px) rotate(-3deg); 
            opacity: 0.28;
          }
        }
        
        @keyframes float-delayed {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.15;
          }
          33% { 
            transform: translateY(-12px) rotate(-4deg); 
            opacity: 0.25;
          }
          66% { 
            transform: translateY(-8px) rotate(2deg); 
            opacity: 0.2;
          }
        }
        
        @keyframes float-slow {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.2;
          }
          50% { 
            transform: translateY(-20px) rotate(8deg); 
            opacity: 0.3;
          }
        }
        
        @keyframes rotate-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
          animation-delay: 4s;
        }
        
        .animate-rotate-slow {
          animation: rotate-slow 25s linear infinite;
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 6s ease-in-out infinite;
        }
      `}</style>

      {/* Profile Image */}
      <div className="relative mb-8 group">
        <div className="absolute inset-0"></div>
        <img
          src="./profile.jpeg"
          alt="Akhilesh Kasturi"
          className="relative w-64 h-64 rounded-full shadow-lg object-cover border-4 border-gray-700"
        />
      </div>

      {/* Name */}
      <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">
        <span className="text-gray-300 mr-2">
          Akhilesh Kasturi
        </span>
      </h1>

      {/* Typewriter Effect */}
      <div className="text-xl md:text-2xl text-center mb-8 h-16 flex items-center">
        <span className="text-gray-300 mr-2">I </span>
        <span className="text-gray-300 mr-2">
          {currentText}
          <span className="animate-pulse text-blue-400 ml-1">|</span>
        </span>
      </div>
    </section>
  );
}