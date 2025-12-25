import { ReactNode } from "react";

interface SolutionCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
  delay?: number;
}

const SolutionCard = ({ icon, title, description, image, delay = 0 }: SolutionCardProps) => {
  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-large transition-all duration-500 hover:-translate-y-2"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
          {icon}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-outfit font-semibold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default SolutionCard;
