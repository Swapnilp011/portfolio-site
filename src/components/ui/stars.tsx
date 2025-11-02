'use client';
import { useState, useEffect } from 'react';

const Stars = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; speed: number; }[]>([]);

  useEffect(() => {
    const numStars = 100;
    const newStars = Array.from({ length: numStars }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.5 + 0.2,
    }));
    setStars(newStars);

    let animationFrameId: number;

    const animate = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          let newY = star.y - star.speed * 0.005;
          if (newY < 0) {
            newY = 1;
          }
          return { ...star, y: newY };
        })
      );
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <svg className="h-full w-full">
        <defs>
          <radialGradient id="star-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>
        </defs>
        {stars.map((star, i) => (
          <circle
            key={i}
            cx={star.x * 100 + '%'}
            cy={star.y * 100 + '%'}
            r={star.size}
            fill="url(#star-gradient)"
            className="opacity-70 animate-pulse"
            style={{ animationDelay: `${Math.random() * 3}s`, animationDuration: '2s' }}
          />
        ))}
      </svg>
    </div>
  );
};

export { Stars };
