
import { Code2 } from 'lucide-react';

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background text-primary">
      <div className="splash-animation">
        <Code2 className="w-24 h-24" />
      </div>
    </div>
  );
}
