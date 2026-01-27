
import Image from 'next/image';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-primary">
      <div className="splash-animation">
        <Image
          src="https://raw.githubusercontent.com/Swapnilp011/profile-pictures/main/profile%20logo.png"
          alt="Swapnil Pawar Logo"
          width={96}
          height={96}
          className="w-24 h-24"
        />
      </div>
    </div>
  );
}
