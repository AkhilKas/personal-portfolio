import { useEffect, useState } from 'react';

export default function TabAttention() {
  const [isVisible, setIsVisible] = useState(true);
  const [blinkCount, setBlinkCount] = useState(0);

  const originalTitle = "🧬 Akhilesh Kasturi | Pioneering Healthcare AI";
  const attentionTitles = [
    "Come back! | View my Portfolio",
    "Hiring? Check my work!",
    "Machine Learning Expert"
  ];

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
      setBlinkCount(0);
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  useEffect(() => {
    let interval;
    
    if (!isVisible) {
      // Start attention-grabbing animation when tab is not visible
      interval = setInterval(() => {
        const randomTitle = attentionTitles[Math.floor(Math.random() * attentionTitles.length)];
        document.title = randomTitle;
        
        setBlinkCount(prev => {
          if (prev >= 10) { // Stop after 10 blinks
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      // Restore original title when tab becomes visible
      document.title = originalTitle;
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isVisible, attentionTitles, originalTitle]);

  return null; // This component doesn't render anything
}