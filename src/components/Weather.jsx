import React, { useEffect, useRef, useState } from 'react';

export default function WeatherBackgroundSystem() {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const [weather, setWeather] = useState({ condition: 'sunny', temp: 72 });
  const [loading, setLoading] = useState(true);
  const elementsRef = useRef([]);

  // Weather API call
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Using a free weather API (you'll need to get an API key)
        // For demo purposes, I'll use a mock function that simulates weather
        const mockWeather = getMockWeather();
        setWeather(mockWeather);
        setLoading(false);
      } catch (error) {
        console.error('Weather fetch failed:', error);
        // Fallback to time-based weather
        setWeather(getTimeBasedWeather());
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  // Mock weather function (replace with real API)
  const getMockWeather = () => {
    const conditions = ['sunny', 'rainy', 'cloudy', 'snowy', 'stormy', 'foggy'];
    const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
    return {
      condition: randomCondition,
      temp: Math.floor(Math.random() * 40) + 40, // 40-80°F
      humidity: Math.floor(Math.random() * 40) + 30,
      windSpeed: Math.floor(Math.random() * 20) + 2
    };
  };

  // Fallback to time-based weather
  const getTimeBasedWeather = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour <= 18) {
      return { condition: 'sunny', temp: 75 };
    } else {
      return { condition: 'cloudy', temp: 65 };
    }
  };

  // Particle/Element classes for different weather
  class WeatherElement {
    constructor(canvas, type) {
      this.canvas = canvas;
      this.type = type;
      this.reset();
    }

    reset() {
      switch (this.type) {
        case 'rain':
          this.x = Math.random() * (this.canvas.width + 100) - 50;
          this.y = -10;
          this.speed = 8 + Math.random() * 6;
          this.length = 10 + Math.random() * 20;
          this.opacity = 0.3 + Math.random() * 0.4;
          break;
        case 'snow':
          this.x = Math.random() * (this.canvas.width + 100) - 50;
          this.y = -10;
          this.speed = 1 + Math.random() * 2;
          this.size = 2 + Math.random() * 4;
          this.drift = (Math.random() - 0.5) * 2;
          this.opacity = 0.6 + Math.random() * 0.4;
          break;
        case 'cloud':
          this.x = Math.random() * this.canvas.width;
          this.y = Math.random() * this.canvas.height * 0.3;
          this.speed = 0.2 + Math.random() * 0.5;
          this.size = 60 + Math.random() * 100;
          this.opacity = 0.1 + Math.random() * 0.2;
          break;
        case 'sunbeam':
          this.x = Math.random() * this.canvas.width;
          this.y = Math.random() * this.canvas.height;
          this.angle = Math.random() * Math.PI * 2;
          this.length = 100 + Math.random() * 200;
          this.opacity = 0.05 + Math.random() * 0.1;
          this.pulse = Math.random() * Math.PI * 2;
          break;
        case 'fog':
          this.x = Math.random() * this.canvas.width;
          this.y = Math.random() * this.canvas.height;
          this.size = 200 + Math.random() * 300;
          this.speed = 0.1 + Math.random() * 0.3;
          this.opacity = 0.02 + Math.random() * 0.05;
          break;
        case 'lightning':
          this.x = Math.random() * this.canvas.width;
          this.y = 0;
          this.segments = this.generateLightningSegments();
          this.opacity = 1;
          this.life = 10; // frames
          break;
      }
    }

    generateLightningSegments() {
      const segments = [];
      let currentX = this.x;
      let currentY = this.y;
      const targetY = this.canvas.height * 0.6;
      
      while (currentY < targetY) {
        const nextX = currentX + (Math.random() - 0.5) * 60;
        const nextY = currentY + 20 + Math.random() * 40;
        segments.push({ x1: currentX, y1: currentY, x2: nextX, y2: nextY });
        currentX = nextX;
        currentY = nextY;
      }
      return segments;
    }

    update() {
      switch (this.type) {
        case 'rain':
          this.y += this.speed;
          this.x -= 2; // Wind effect
          if (this.y > this.canvas.height + 10) this.reset();
          break;
        case 'snow':
          this.y += this.speed;
          this.x += this.drift;
          if (this.y > this.canvas.height + 10) this.reset();
          break;
        case 'cloud':
          this.x += this.speed;
          if (this.x > this.canvas.width + this.size) {
            this.x = -this.size;
            this.y = Math.random() * this.canvas.height * 0.3;
          }
          break;
        case 'sunbeam':
          this.pulse += 0.02;
          this.opacity = (0.05 + Math.random() * 0.1) * (0.5 + 0.5 * Math.sin(this.pulse));
          break;
        case 'fog':
          this.x += this.speed;
          if (this.x > this.canvas.width + this.size) {
            this.x = -this.size;
          }
          break;
        case 'lightning':
          this.life--;
          this.opacity = this.life / 10;
          if (this.life <= 0) this.reset();
          break;
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = this.opacity;

      switch (this.type) {
        case 'rain':
          ctx.strokeStyle = '#4FC3F7';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(this.x - 3, this.y + this.length);
          ctx.stroke();
          break;
        
        case 'snow':
          ctx.fillStyle = '#FFFFFF';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          // Snowflake details
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 0.5;
          for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(
              this.x + Math.cos(angle) * this.size,
              this.y + Math.sin(angle) * this.size
            );
            ctx.stroke();
          }
          break;
        
        case 'cloud':
          ctx.fillStyle = '#E0E0E0';
          // Draw cloud as multiple circles
          for (let i = 0; i < 5; i++) {
            const offsetX = (i - 2) * this.size * 0.3;
            const offsetY = Math.sin(i) * this.size * 0.1;
            const radius = this.size * (0.4 + Math.random() * 0.3);
            ctx.beginPath();
            ctx.arc(this.x + offsetX, this.y + offsetY, radius, 0, Math.PI * 2);
            ctx.fill();
          }
          break;
        
        case 'sunbeam':
          const gradient = ctx.createLinearGradient(
            this.x, this.y,
            this.x + Math.cos(this.angle) * this.length,
            this.y + Math.sin(this.angle) * this.length
          );
          gradient.addColorStop(0, 'rgba(255, 223, 0, 0)');
          gradient.addColorStop(0.5, 'rgba(255, 223, 0, 0.1)');
          gradient.addColorStop(1, 'rgba(255, 193, 7, 0)');
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(this.x, this.y);
          ctx.lineTo(
            this.x + Math.cos(this.angle) * this.length,
            this.y + Math.sin(this.angle) * this.length
          );
          ctx.stroke();
          break;
        
        case 'fog':
          const fogGradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size
          );
          fogGradient.addColorStop(0, 'rgba(200, 200, 200, 0.1)');
          fogGradient.addColorStop(1, 'rgba(200, 200, 200, 0)');
          
          ctx.fillStyle = fogGradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        
        case 'lightning':
          ctx.strokeStyle = '#FFFFFF';
          ctx.lineWidth = 3;
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#4FC3F7';
          
          this.segments.forEach(segment => {
            ctx.beginPath();
            ctx.moveTo(segment.x1, segment.y1);
            ctx.lineTo(segment.x2, segment.y2);
            ctx.stroke();
          });
          break;
      }
      
      ctx.restore();
    }
  }

  useEffect(() => {
    if (loading) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize weather elements based on condition
    const initializeWeatherElements = () => {
      elementsRef.current = [];
      
      switch (weather.condition) {
        case 'rainy':
          for (let i = 0; i < 100; i++) {
            elementsRef.current.push(new WeatherElement(canvas, 'rain'));
          }
          break;
        case 'snowy':
          for (let i = 0; i < 50; i++) {
            elementsRef.current.push(new WeatherElement(canvas, 'snow'));
          }
          break;
        case 'cloudy':
          for (let i = 0; i < 8; i++) {
            elementsRef.current.push(new WeatherElement(canvas, 'cloud'));
          }
          break;
        case 'sunny':
          for (let i = 0; i < 20; i++) {
            elementsRef.current.push(new WeatherElement(canvas, 'sunbeam'));
          }
          break;
        case 'foggy':
          for (let i = 0; i < 15; i++) {
            elementsRef.current.push(new WeatherElement(canvas, 'fog'));
          }
          break;
        case 'stormy':
          for (let i = 0; i < 80; i++) {
            elementsRef.current.push(new WeatherElement(canvas, 'rain'));
          }
          // Add occasional lightning
          if (Math.random() < 0.01) {
            elementsRef.current.push(new WeatherElement(canvas, 'lightning'));
          }
          break;
      }
    };

    initializeWeatherElements();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background color based on weather
      let bgColor = 'transparent';
      switch (weather.condition) {
        case 'sunny':
          bgColor = 'rgba(255, 248, 220, 0.05)';
          break;
        case 'rainy':
        case 'stormy':
          bgColor = 'rgba(70, 130, 180, 0.05)';
          break;
        case 'cloudy':
          bgColor = 'rgba(128, 128, 128, 0.03)';
          break;
        case 'snowy':
          bgColor = 'rgba(240, 248, 255, 0.05)';
          break;
        case 'foggy':
          bgColor = 'rgba(211, 211, 211, 0.08)';
          break;
      }
      
      if (bgColor !== 'transparent') {
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Update and draw weather elements
      elementsRef.current.forEach(element => {
        element.update();
        element.draw(ctx);
      });

      // Add new lightning for stormy weather
      if (weather.condition === 'stormy' && Math.random() < 0.005) {
        elementsRef.current.push(new WeatherElement(canvas, 'lightning'));
        // Remove old lightning
        elementsRef.current = elementsRef.current.filter(el => 
          el.type !== 'lightning' || el.life > 0
        );
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [weather, loading]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div className="text-gray-400 text-sm animate-pulse">Loading weather...</div>
      </div>
    );
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ background: 'transparent' }}
      />
      
      {/* Weather Info Display */}
      <div className="fixed top-6 right-6 z-10 pointer-events-none">
        <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">
              {weather.condition === 'sunny' && '☀️'}
              {weather.condition === 'rainy' && '🌧️'}
              {weather.condition === 'cloudy' && '☁️'}
              {weather.condition === 'snowy' && '❄️'}
              {weather.condition === 'stormy' && '⛈️'}
              {weather.condition === 'foggy' && '🌫️'}
            </div>
            <div>
              <div className="text-white font-semibold capitalize">
                {weather.condition}
              </div>
              <div className="text-gray-400 text-sm">
                {weather.temp}°F
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}