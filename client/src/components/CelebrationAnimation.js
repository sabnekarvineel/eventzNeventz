import React, { useEffect, useState } from 'react';
import './CelebrationAnimation.css';

function CelebrationAnimation() {
  const [particles, setParticles] = useState([]);
  const [countdown, setCountdown] = useState(3);
  const [showAnimation, setShowAnimation] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setShowAnimation(true);
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, []);

  useEffect(() => {
    if (showAnimation) {
      // After 3 seconds, mark animation as complete to show page
      const completeTimer = setTimeout(() => {
        setIsComplete(true);
      }, 3000);
      return () => clearTimeout(completeTimer);
    }
  }, [showAnimation]);

  useEffect(() => {
    if (showAnimation) {
      const generateParticles = () => {
        const newParticles = Array.from({ length: 150 }, (_, index) => {
          const centerX = 50;
          const centerY = 50;
          const angle = (Math.random() * Math.PI * 2);
          const velocity = 3 + Math.random() * 5;
          
          return {
            id: index,
            startX: centerX,
            startY: centerY,
            angle: angle,
            velocity: velocity,
            delay: Math.random() * 0.2,
            duration: 2 + Math.random() * 1.5,
            size: 6 + Math.random() * 18,
            type: ['confetti', 'star', 'circle'][Math.floor(Math.random() * 3)],
          };
        });
        setParticles(newParticles);
      };

      generateParticles();
    }
  }, [showAnimation]);

  return (
    <div className={`celebration-container ${isComplete ? 'complete' : ''}`}>
      {/* Countdown Display */}
      {countdown > 0 && !showAnimation && (
        <div className="countdown-display">{countdown}</div>
      )}

      {/* Birthday Popper Blast - Full Page Coverage */}
      {showAnimation && particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.type}`}
          style={{
            left: `${particle.startX}%`,
            top: `${particle.startY}%`,
            '--angle': `${particle.angle}rad`,
            '--velocity': particle.velocity,
            '--delay': `${particle.delay}s`,
            '--duration': `${particle.duration}s`,
            '--size': `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
}

export default CelebrationAnimation;
