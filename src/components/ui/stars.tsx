'use client';

import { useState, useEffect } from 'react';

const Stars = () => {
  const [stars, setStars] = useState<{ x: number; y: number; size: number; speed: number; delay: number }[]>([]);

  useEffect(() => {
    const numStars = 75;
    const newStars = Array.from({ length: numStars }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: Math.random() * 2 + 1,
      speed: Math.random() * 0.4 + 0.1,
      delay: Math.random() * 3,
    }));
    setStars(newStars);

    let animationFrameId: number;

    const animate = () => {
      setStars((prevStars) =>
        prevStars.map((star) => {
          let newY = star.y - star.speed * 0.003;
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
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <svg style={{ width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="star-gradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
        </defs>
        {stars.map((star, i) => (
          <circle
            key={i}
            cx={`${star.x * 100}%`}
            cy={`${star.y * 100}%`}
            r={star.size}
            fill="url(#star-gradient)"
            opacity={0.7}
          />
        ))}
      </svg>
    </div>
  );
};

export { Stars };
