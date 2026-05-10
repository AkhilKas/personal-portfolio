import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(50);

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
        setCurrentText(currentRole.substring(0, currentText.length - 1));
        setTypingSpeed(25);
      } else {
        setCurrentText(currentRole.substring(0, currentText.length + 1));
        setTypingSpeed(50);
      }

      if (!isDeleting && currentText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex, typingSpeed, roles]);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center p-4 sm:p-10 pt-32 scroll-mt-20 relative overflow-hidden w-full" id="hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-25 dark:opacity-20 light:opacity-25 text-blue-600 dark:text-blue-400 light:text-blue-600 text-2xl font-serif animate-float">∑</div>
        <div className="absolute top-32 right-16 opacity-20 dark:opacity-15 light:opacity-20 text-purple-600 dark:text-purple-400 light:text-purple-600 text-xl font-serif animate-float-delayed">λ</div>
        <div className="absolute top-1/4 left-1/4 opacity-30 dark:opacity-25 light:opacity-30 text-green-600 dark:text-green-400 light:text-green-600 text-lg font-serif animate-float-slow">∇</div>
        <div className="absolute top-1/3 right-1/3 opacity-25 dark:opacity-20 light:opacity-25 text-indigo-600 dark:text-indigo-400 light:text-indigo-600 text-2xl font-serif animate-float">θ</div>
        <div className="absolute bottom-1/3 left-1/5 opacity-20 dark:opacity-15 light:opacity-20 text-cyan-600 dark:text-cyan-400 light:text-cyan-600 text-xl font-serif animate-float-delayed">∫</div>
        <div className="absolute bottom-1/4 right-1/4 opacity-25 dark:opacity-20 light:opacity-25 text-teal-600 dark:text-teal-400 light:text-teal-600 text-lg font-serif animate-float-slow">α</div>
        <div className="absolute top-1/2 left-1/6 opacity-30 dark:opacity-25 light:opacity-30 text-rose-600 dark:text-rose-400 light:text-rose-600 text-xl font-serif animate-float">π</div>
        <div className="absolute bottom-1/2 right-1/6 opacity-20 dark:opacity-15 light:opacity-20 text-amber-600 dark:text-amber-400 light:text-amber-600 text-2xl font-serif animate-float-delayed">Σ</div>
        <div className="absolute top-3/4 left-1/3 opacity-25 dark:opacity-20 light:opacity-25 text-violet-600 dark:text-violet-400 light:text-violet-600 text-lg font-serif animate-float-slow">δ</div>
        <div className="absolute bottom-1/5 right-1/5 opacity-30 dark:opacity-25 light:opacity-30 text-emerald-600 dark:text-emerald-400 light:text-emerald-600 text-xl font-serif animate-float">ε</div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-15px) rotate(0deg); }
          75% { transform: translateY(-8px) rotate(-3deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-12px) rotate(-4deg); }
          66% { transform: translateY(-8px) rotate(2deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(8deg); }
        }

        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; animation-delay: 2s; }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; animation-delay: 4s; }
      `}</style>

      {/* Profile Image */}
      <div className="relative mb-8">
        <img
          src="./profile.jpeg"
          alt="Akhilesh Kasturi"
          className="relative w-64 h-64 rounded-full shadow-lg object-cover border-4 border-gray-300 dark:border-gray-700 light:border-gray-300"
        />
      </div>

      {/* Name */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-center px-4">
        <span className="text-gray-800 dark:text-gray-200 light:text-gray-800">
          Akhilesh Kasturi
        </span>
      </h1>

      {/* Typewriter Effect */}
      <div className="text-lg sm:text-xl md:text-2xl text-center mb-8 h-16 flex items-center px-4 max-w-full">
        <span className="text-gray-600 dark:text-gray-400 light:text-gray-600 mr-2">I </span>
        <span className="text-gray-700 dark:text-gray-300 light:text-gray-700 mr-2">
          {currentText}
          <span className="animate-pulse text-blue-500 ml-1">|</span>
        </span>
      </div>
    </section>
  );
}
