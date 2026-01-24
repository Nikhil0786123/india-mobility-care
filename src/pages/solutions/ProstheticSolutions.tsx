import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Settings, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageLoader from "@/components/PageLoader";
import AnimatedImage from "@/components/AnimatedImage";

import aboveKneeProsthesis from "@/assets/above-knee-prosthesis.jpg";
import belowKneeProsthesis from "@/assets/below-knee-prosthesis.jpg";
import upperLimbProsthesis from "@/assets/upper-limb-prosthesis.jpg";
import partialCosmeticProsthesis from "@/assets/partial-cosmetic-prosthesis.jpg";

const ProstheticSolutions = () => {
  const products = [
    {
      id: "above-knee",
      title: "Above Knee Prosthesis",
      tagline: "Advanced mobility for above-knee amputees",
      description: "Our above-knee prosthetics feature advanced microprocessor-controlled knee joints that provide natural walking patterns, stability on uneven terrain, and smooth transitions between activities.",
      image: aboveKneeProsthesis,
      whoIsItFor: [
        "Individuals with above-knee (transfemoral) amputation",
        "Those seeking active lifestyle restoration",
        "Patients requiring high stability and control",
        "Both traumatic and medical amputation patients",
      ],
      benefits: [
        "Natural walking gait and movement",
        "Microprocessor-controlled knee for safety",
        "Energy-efficient design reduces fatigue",
        "Suitable for varied terrain and activities",
        "Custom socket for Indian body types",
        "Waterproof options available",
      ],
      technology: [
        "Microprocessor knee units",
        "Carbon fiber components",
        "Energy-storing feet",
        "Silicone liners for comfort",
      ],
      fittingProcess: [
        "Initial consultation and assessment",
        "Precise measurement and casting",
        "Custom socket fabrication",
        "Fitting and alignment",
        "Gait training and rehabilitation",
        "Follow-up adjustments",
      ],
    },
    {
      id: "below-knee",
      title: "Below Knee Prosthesis",
      tagline: "Lightweight comfort for active living",
      description: "Designed for below-knee amputees, our prosthetics offer exceptional comfort with lightweight construction and energy-return technology for an active lifestyle.",
      image: belowKneeProsthesis,
      whoIsItFor: [
        "Individuals with below-knee (transtibial) amputation",
        "Active individuals and athletes",
        "Diabetic amputation patients",
        "Working professionals seeking mobility",
      ],
      benefits: [
        "Ultra-lightweight design",
        "Energy-returning foot for efficient walking",
        "All-day comfort with custom socket",
        "Quick donning and doffing",
        "Suitable for Indian climate",
        "Activity-specific options available",
      ],
      technology: [
        "Dynamic response feet",
        "Flexible socket systems",
        "Pin lock and suction suspension",
        "Breathable liners",
      ],
      fittingProcess: [
        "Comprehensive evaluation",
        "Residual limb assessment",
        "Custom socket design",
        "Component selection",
        "Final fitting and training",
        "Ongoing support",
      ],
    },
    {
      id: "upper-limb",
      title: "Upper Limb Prosthesis",
      tagline: "Restore hand function and independence",
      description: "Our upper limb prosthetics range from body-powered to advanced myoelectric options, designed to restore hand function and enhance daily living activities.",
      image: upperLimbProsthesis,
      whoIsItFor: [
        "Individuals with arm or hand amputation",
        "Those needing functional restoration",
        "Patients seeking cosmetic solutions",
        "Working professionals",
      ],
      benefits: [
        "Multiple grip patterns",
        "Intuitive control systems",
        "Lightweight and durable",
        "Customizable appearance",
        "Activity-specific options",
        "Improved independence",
      ],
      technology: [
        "Myoelectric control",
        "Body-powered options",
        "Silicone cosmetic covers",
        "3D printed components",
      ],
      fittingProcess: [
        "Functional assessment",
        "Control site evaluation",
        "Socket fabrication",
        "Device training",
        "Occupational therapy",
        "Regular follow-ups",
      ],
    },
    {
      id: "cosmetic",
      title: "Partial & Cosmetic Prosthesis",
      tagline: "Natural-looking restoration",
      description: "Highly realistic cosmetic prosthetics that match your skin tone, texture, and appearance perfectly. Ideal for those seeking natural-looking restoration.",
      image: partialCosmeticProsthesis,
      whoIsItFor: [
        "Partial hand or finger amputees",
        "Those prioritizing cosmetic appearance",
        "Individuals with partial foot amputation",
        "Patients seeking psychological confidence",
      ],
      benefits: [
        "Highly realistic appearance",
        "Custom skin tone matching",
        "Nail and vein details",
        "Lightweight and comfortable",
        "Weather resistant",
        "Boosts confidence",
      ],
      technology: [
        "Medical-grade silicone",
        "Color matching systems",
        "Custom molding techniques",
        "Durable materials",
      ],
      fittingProcess: [
        "Detailed assessment",
        "Color and texture matching",
        "Impression taking",
        "Custom fabrication",
        "Final fitting",
        "Care instructions",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-outfit">
      <PageLoader minDuration={500} />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom section-padding !pt-0 relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Our Solutions
            </div>
            <h1 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-6 animate-fade-up">
              Prosthetic <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
              Advanced artificial limbs designed for natural movement, comfort, and durability. 
              Each prosthetic is custom-made for Indian patients, considering body type, lifestyle, 
              and climate conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      {products.map((product, productIndex) => (
        <section 
          key={product.id}
          id={product.id}
          className={`section-padding ${productIndex % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
        >
          <div className="container-custom">
            <ScrollReveal>
              <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
                <div className="order-2 lg:order-1">
                  <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-3">
                    {product.title}
                  </h2>
                  <p className="text-primary font-medium text-lg mb-4">{product.tagline}</p>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {product.description}
                  </p>
                  
                  <Button variant="cta" size="lg" asChild>
                    <Link to="/contact">Book Consultation</Link>
                  </Button>
                </div>
                
                <div className="order-1 lg:order-2">
                  <AnimatedImage
                    src={product.image}
                    alt={product.title}
                    className="w-full max-w-md mx-auto rounded-2xl shadow-xl bg-white p-4"
                    animation={productIndex % 2 === 0 ? "slide-right" : "slide-left"}
                    containerClassName="flex justify-center"
                  />
                </div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Who Is It For */}
              <ScrollReveal delay={100}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-outfit font-semibold text-xl text-foreground">
                      Who Is It For?
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {product.whoIsItFor.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Key Benefits */}
              <ScrollReveal delay={200}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h3 className="font-outfit font-semibold text-xl text-foreground">
                      Key Benefits
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {product.benefits.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Technology Used */}
              <ScrollReveal delay={300}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="font-outfit font-semibold text-xl text-foreground">
                      Technology Used
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.technology.map((tech) => (
                      <span 
                        key={tech}
                        className="bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Fitting Process */}
              <ScrollReveal delay={400}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <Settings className="w-6 h-6" />
                    </div>
                    <h3 className="font-outfit font-semibold text-xl text-foreground">
                      Custom Fitting Process
                    </h3>
                  </div>
                  <ol className="space-y-3">
                    {product.fittingProcess.map((step, index) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Ready to Restore Your Mobility?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Our experts will assess your needs and recommend the perfect prosthetic solution 
              tailored to your lifestyle.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProstheticSolutions;
