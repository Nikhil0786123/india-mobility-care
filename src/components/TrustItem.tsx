import { ReactNode } from "react";

interface TrustItemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const TrustItem = ({ icon, title, description }: TrustItemProps) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card hover:shadow-medium transition-all duration-300 group">
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
        <div className="text-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
      </div>
      <h3 className="font-outfit font-semibold text-lg mb-2 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default TrustItem;
