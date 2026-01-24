import { useEffect, useRef, useState } from "react";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  hoverEffect?: boolean;
  animation?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom";
  delay?: number;
}

const AnimatedImage = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  hoverEffect = true,
  animation = "fade-up",
  delay = 0,
}: AnimatedImageProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setIsVisible(true), delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -30px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (!isVisible || !isLoaded) {
      switch (animation) {
        case "fade-up":
          return `${baseClasses} opacity-0 translate-y-8`;
        case "fade-in":
          return `${baseClasses} opacity-0`;
        case "slide-left":
          return `${baseClasses} opacity-0 -translate-x-8`;
        case "slide-right":
          return `${baseClasses} opacity-0 translate-x-8`;
        case "zoom":
          return `${baseClasses} opacity-0 scale-90`;
        default:
          return `${baseClasses} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  const hoverClasses = hoverEffect
    ? "group-hover:scale-105 group-hover:shadow-xl transition-all duration-500"
    : "";

  return (
    <div
      ref={ref}
      className={`overflow-hidden ${hoverEffect ? "group" : ""} ${containerClassName}`}
    >
      <img
        src={src}
        alt={alt}
        onLoad={() => setIsLoaded(true)}
        className={`${getAnimationClasses()} ${hoverClasses} ${className}`}
      />
    </div>
  );
};

export default AnimatedImage;
