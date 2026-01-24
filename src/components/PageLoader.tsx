import { useEffect, useState } from "react";

interface PageLoaderProps {
  minDuration?: number;
}

const PageLoader = ({ minDuration = 800 }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 400);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [minDuration]);

  if (!isLoading) return null;

  return (
    <div 
      className={`fixed inset-0 z-[9999] bg-gradient-to-br from-white via-sky-50 to-teal-50 flex items-center justify-center transition-opacity duration-400 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Animated Medical Cross / Pulse */}
        <div className="relative">
          {/* Outer pulse ring */}
          <div className="absolute inset-0 w-20 h-20 rounded-full bg-primary/20 animate-ping" />
          
          {/* Inner circle with medical icon */}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
            {/* Medical cross */}
            <div className="relative w-8 h-8">
              <div className="absolute top-1/2 left-0 w-full h-2 bg-white rounded-full transform -translate-y-1/2" />
              <div className="absolute top-0 left-1/2 w-2 h-full bg-white rounded-full transform -translate-x-1/2" />
            </div>
          </div>
          
          {/* Rotating dots */}
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-secondary rounded-full transform -translate-x-1/2 -translate-y-1" />
          </div>
          <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s', animationDelay: '1s' }}>
            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-accent rounded-full transform -translate-x-1/2 translate-y-1" />
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <p className="text-primary font-outfit font-semibold text-lg">P&O Robotics</p>
          <div className="flex items-center gap-1 justify-center mt-1">
            <span className="text-muted-foreground text-sm">Loading</span>
            <span className="flex gap-0.5">
              <span className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1 h-1 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
