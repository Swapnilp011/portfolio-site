'use client';

import Image from 'next/image';
import { profileInfo } from '@/lib/data';

export default function SplashScreen() {
  return (
    <div className="splash-container">
      <div className="splash-pulse-ring">
        <div className="splash-ring-anim"></div>
        <div className="splash-glow-core"></div>
        <div className="splash-logo-image">
          <Image
            src={profileInfo.logoUrl}
            alt={`${profileInfo.name} Logo`}
            width={64}
            height={64}
            priority
          />
        </div>
      </div>
      <div className="splash-title-text">
        <span>{profileInfo.name}</span>
        <span className="splash-loading-dots">
          <span className="splash-dot"></span>
          <span className="splash-dot"></span>
          <span className="splash-dot"></span>
        </span>
      </div>
    </div>
  );
}
