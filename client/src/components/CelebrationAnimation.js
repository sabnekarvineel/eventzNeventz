import React, { useEffect, useState } from 'react';
import './CelebrationAnimation.css';

function CelebrationAnimation() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 80 }, (_, index) => ({
        id: index,
        left: Math.random() * 100,
        delay: Math.random() * 0.8,
        duration: 3 + Math.random() * 2.5,
        size: 10 + Math.random() * 25,
        type: ['confetti', 'star', 'circle'][Math.floor(Math.random() * 3)],
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="celebration-container">
      {/* Confetti particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`particle ${particle.type}`}
          style={{
            left: `${particle.left}%`,
            '--delay': `${particle.delay}s`,
            '--duration': `${particle.duration}s`,
            '--size': `${particle.size}px`,
          }}
        />
      ))}

      {/* Event emojis floating up */}
      <div className="floating-event floating-event-1">🎉</div>
      <div className="floating-event floating-event-2">🎊</div>
      <div className="floating-event floating-event-3">✨</div>
      <div className="floating-event floating-event-4">🎆</div>
      <div className="floating-event floating-event-5">🏆</div>
      <div className="floating-event floating-event-6">💫</div>
      <div className="floating-event floating-event-7">🎁</div>
      <div className="floating-event floating-event-8">🌟</div>

    </div>
  );
}

export default CelebrationAnimation;
