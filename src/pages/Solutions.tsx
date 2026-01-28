import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageLoader from "@/components/PageLoader";
import AnimatedImage from "@/components/AnimatedImage";
import SEOHead from "@/components/SEOHead";

import aboveKneeProsthesis from "@/assets/above-knee-prosthesis.jpg";
import belowKneeProsthesis from "@/assets/below-knee-prosthesis.jpg";
import upperLimbProsthesis from "@/assets/upper-limb-prosthesis.jpg";
import partialCosmeticProsthesis from "@/assets/partial-cosmetic-prosthesis.jpg";
import kneeBraces from "@/assets/knee-braces.jpg";
import ankleFootOrthosis from "@/assets/ankle-foot-orthosis.jpg";
import spinalOrthosis from "@/assets/spinal-orthosis.jpg";
import childFriendlyProsthetics from "@/assets/child-friendly-prosthetics.png";
import therapeuticInsoles from "@/assets/therapeutic-insoles.jpg";

const Solutions = () => {
  const prostheticSolutions = [
    {
      title: "Above Knee Prosthesis",
      description:
        "Advanced above-knee prosthetic solutions featuring microprocessor-controlled knee joints for natural walking patterns. Designed for stability, comfort, and durability suited to Indian conditions.",
      image: aboveKneeProsthesis,
    },
    {
      title: "Below Knee Prosthesis",
      description:
        "Lightweight and comfortable below-knee prosthetics with energy-return feet that allow for active lifestyles. Custom socket design ensures perfect fit and all-day comfort.",
      image: belowKneeProsthesis,
    },
    {
      title: "Upper Limb Prosthesis",
      description:
        "Functional and cosmetic upper limb prosthetics ranging from body-powered to myoelectric options. Designed to restore hand function and confidence.",
      image: upperLimbProsthesis,
    },
    {
      title: "Cosmetic Prosthesis",
      description:
        "Highly realistic cosmetic prosthetics that match your skin tone and appearance. Perfect for those seeking natural-looking restoration.",
      image: partialCosmeticProsthesis,
    },
  ];

  const orthoticSolutions = [
    {
      title: "Knee Braces",
      description:
        "Supportive knee braces for various conditions including ligament injuries, arthritis, and post-surgical recovery. Adjustable designs for optimal support and mobility.",
      image: kneeBraces,
    },
    {
      title: "Ankle Foot Orthosis (AFO)",
      description:
        "Custom-molded AFOs for drop foot, stroke recovery, and other conditions affecting ankle and foot function. Lightweight materials for comfortable daily wear.",
      image: ankleFootOrthosis,
    },
    {
      title: "Spinal Supports",
      description:
        "Back braces and spinal orthoses for posture correction, scoliosis management, and post-injury support. Designed for comfort during extended wear.",
      image: spinalOrthosis,
    },
  ];

  const pediatricSolutions = [
    {
      title: "Child-Friendly Prosthetics",
      description:
        "Prosthetic limbs designed specifically for children with colorful, fun designs that kids love. Lightweight and durable for active play.",
      image: childFriendlyProsthetics,
    },
    {
      title: "Growth-Adjustable Solutions",
      description:
        "Modular prosthetics that can be adjusted as your child grows, reducing the need for frequent replacements while ensuring proper fit and function.",
      image: childFriendlyProsthetics,
    },
  ];

  const diabeticSolutions = [
    {
      title: "Custom Diabetic Footwear",
      description:
        "Specially designed shoes that accommodate diabetic foot conditions, reducing pressure points and preventing ulcers. Available in various styles.",
      image: therapeuticInsoles,
    },
    {
      title: "Therapeutic Insoles",
      description:
        "Custom-molded insoles that provide cushioning and support for diabetic feet. Helps distribute pressure evenly and prevent complications.",
      image: therapeuticInsoles,
    },
  ];

  const SolutionSection = ({
    title,
    subtitle,
    solutions,
    bgClass = "",
  }: {
    title: string;
    subtitle: string;
    solutions: typeof prostheticSolutions;
    bgClass?: string;
  }) => (
    <section className={`section-padding ${bgClass}`}>
      <div className="container-custom">
        <ScrollReveal>
          <div className="mb-12">
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl">{subtitle}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <ScrollReveal key={solution.title} delay={index * 100}>
              <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 group">
                <div className="grid md:grid-cols-5 h-full">
                  <div className="md:col-span-2 h-48 md:h-full overflow-hidden">
                    <AnimatedImage
                      src={solution.image}
                      alt={solution.title}
                      className="w-full h-full object-cover"
                      animation="fade-in"
                      delay={index * 50}
                    />
                  </div>
                  <div className="md:col-span-3 p-6 flex flex-col justify-center">
                    <h3 className="font-outfit font-semibold text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {solution.description}
                    </p>
                    <Button variant="outline" size="sm" className="w-fit" asChild>
                      <Link to="/contact">Consult Our Expert</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background font-outfit">
      <SEOHead
        title="Prosthetic Leg, Prosthetic Hand & Orthotic Solutions Delhi | P&O ROBOTICS"
        description="Explore prosthetic leg, prosthetic hand, silicone prosthetic, orthotic braces, and rehabilitation solutions at P&O ROBOTICS Delhi. Custom artificial limbs for Indian patients. Prosthetic clinic near Begumpur."
        keywords="prosthetic leg Delhi, prosthetic hand India, silicone prosthetic, artificial limbs, orthotic braces, rehabilitation prosthetics, prosthetic solutions India, prosthetic clinic near me"
        canonicalUrl="/solutions"
      />
      <PageLoader minDuration={500} />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container-custom section-padding !pt-0 relative">
          <div className="max-w-3xl">
            <h1 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-6 animate-fade-up">
              Our <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
              We offer a comprehensive range of prosthetic and orthotic solutions
              designed for Indian patients. Each solution is customized to meet your
              unique needs and lifestyle.
            </p>
          </div>
        </div>
      </section>

      {/* Prosthetic Solutions */}
      <SolutionSection
        title="Prosthetic Solutions"
        subtitle="Advanced artificial limbs designed for natural movement, comfort, and durability. Each prosthetic is custom-made for your specific needs."
        solutions={prostheticSolutions}
      />

      {/* Orthotic Solutions */}
      <SolutionSection
        title="Orthotic Solutions"
        subtitle="Supportive braces and orthoses that help improve mobility, reduce pain, and aid recovery from injuries or conditions."
        solutions={orthoticSolutions}
        bgClass="bg-muted"
      />

      {/* Pediatric Care */}
      <SolutionSection
        title="Pediatric Care"
        subtitle="Specialized solutions for children that combine functionality with fun designs, growing alongside your child."
        solutions={pediatricSolutions}
      />

      {/* Diabetic Foot Care */}
      <SolutionSection
        title="Diabetic Foot Care"
        subtitle="Preventive and therapeutic solutions for diabetic patients to maintain foot health and prevent complications."
        solutions={diabeticSolutions}
        bgClass="bg-muted"
      />

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Not Sure Which Solution Is Right for You?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Our experts will assess your needs and recommend the best solution
              for your lifestyle and goals.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Get Expert Consultation</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
