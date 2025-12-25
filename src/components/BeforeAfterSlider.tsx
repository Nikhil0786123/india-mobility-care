import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BeforeAfterSlide {
  before: string;
  after: string;
  name: string;
  age: string;
  condition: string;
  result: string;
}

interface BeforeAfterSliderProps {
  slides: BeforeAfterSlide[];
}

const BeforeAfterSlider = ({ slides }: BeforeAfterSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setSliderPosition(50);
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  const slide = slides[currentSlide];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative rounded-2xl overflow-hidden shadow-large">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* After Image (Background) */}
          <img
            src={slide.after}
            alt="After treatment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Before Image (Overlay with clip) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img
              src={slide.before}
              alt="Before treatment"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: `${100 / (sliderPosition / 100)}%`, maxWidth: "none" }}
            />
          </div>

          {/* Slider Line */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-primary-foreground shadow-lg z-10"
            style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center shadow-lg">
              <div className="flex gap-0.5">
                <ChevronLeft className="w-4 h-4 text-foreground" />
                <ChevronRight className="w-4 h-4 text-foreground" />
              </div>
            </div>
          </div>

          {/* Slider Input */}
          <input
            type="range"
            min="5"
            max="95"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
          />

          {/* Labels */}
          <div className="absolute bottom-4 left-4 bg-foreground/80 text-primary-foreground px-3 py-1 rounded-lg text-sm font-medium z-10">
            Before
          </div>
          <div className="absolute bottom-4 right-4 bg-secondary/90 text-secondary-foreground px-3 py-1 rounded-lg text-sm font-medium z-10">
            After
          </div>
        </div>

        {/* Patient Info */}
        <div className="bg-card p-6">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-outfit font-semibold text-lg text-foreground">
                {slide.name}
              </h4>
              <p className="text-muted-foreground text-sm">
                {slide.age} • {slide.condition}
              </p>
            </div>
            <p className="text-secondary font-medium text-right max-w-xs">
              {slide.result}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      {slides.length > 1 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setSliderPosition(50);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-primary/50"
                }`}
              />
            ))}
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default BeforeAfterSlider;
