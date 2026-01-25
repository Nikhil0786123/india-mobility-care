import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Settings, Heart, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageLoader from "@/components/PageLoader";
import AnimatedImage from "@/components/AnimatedImage";

import aboveKneeProsthesis from "@/assets/above-knee-prosthesis-new.jpg";
import prostheticLegSilicone from "@/assets/prosthetic-leg-silicone.png";
import belowKneeProsthesis from "@/assets/below-knee-prosthesis.jpg";
import upperLimbProsthesis from "@/assets/upper-limb-prosthesis.jpg";
import partialCosmeticProsthesis from "@/assets/partial-cosmetic-prosthesis.jpg";

const ProstheticSolutions = () => {
  const products = [
    {
      id: "above-knee",
      title: "Above Knee Prosthesis",
      tagline: "Advanced mobility for above-knee amputees",
      description: "Our above-knee prosthetics are designed with advanced microprocessor-controlled knee joints that provide natural walking patterns, superior stability on varied terrain, and seamless transitions between daily activities. Crafted specifically for Indian patients, these prosthetics account for local climate conditions, lifestyle requirements, and body types. The silicone liners ensure all-day comfort while the lightweight carbon fiber components reduce fatigue during extended use.",
      image: aboveKneeProsthesis,
      whoIsItFor: [
        "Individuals with above-knee (transfemoral) amputation due to trauma, diabetes, or vascular conditions",
        "Active patients seeking to return to sports, work, or daily activities",
        "Patients requiring high stability and confidence while walking",
        "Both young adults and elderly patients needing reliable mobility solutions",
      ],
      benefits: [
        "Natural walking gait that mimics biological movement",
        "Microprocessor-controlled knee for enhanced safety on stairs and slopes",
        "Energy-efficient design that reduces fatigue during long walks",
        "Suitable for Indian terrain including uneven roads and wet surfaces",
        "Custom socket designed for Indian body types and comfort",
        "Waterproof and dust-resistant options for Indian climate",
      ],
      technology: [
        "Microprocessor knee units",
        "Carbon fiber components",
        "Energy-storing feet",
        "Silicone liners for comfort",
      ],
      fittingProcess: [
        "Initial consultation and comprehensive assessment",
        "Precise measurement using 3D scanning technology",
        "Custom socket fabrication in our workshop",
        "Fitting, alignment, and fine-tuning",
        "Gait training and rehabilitation support",
        "Lifetime follow-up adjustments and care",
      ],
    },
    {
      id: "silicone-prosthetic",
      title: "Silicone Prosthetic Liner",
      tagline: "Superior comfort with natural look and feel",
      description: "Our premium silicone prosthetic liners provide the ultimate combination of comfort, durability, and natural appearance. Made from medical-grade silicone, these liners create a secure cushioned interface between the residual limb and prosthetic socket. The silicone material mimics natural skin texture and flexibility, ensuring all-day comfort even in India's warm and humid climate. Designed specifically for Indian patients, these liners offer excellent breathability and moisture management.",
      image: prostheticLegSilicone,
      whoIsItFor: [
        "Prosthetic users seeking enhanced comfort and fit",
        "Patients with sensitive residual limbs requiring cushioning",
        "Active individuals needing secure suspension during movement",
        "Those looking for natural skin-like appearance and feel",
      ],
      benefits: [
        "Natural look and feel that mimics real skin texture",
        "Superior cushioning for all-day comfort",
        "Excellent moisture management for Indian climate",
        "Secure suspension that prevents pistoning",
        "Hypoallergenic material safe for sensitive skin",
        "Durable construction for long-lasting performance",
      ],
      technology: [
        "Medical-grade silicone",
        "Moisture-wicking fabric backing",
        "Pin or suction suspension options",
        "Anatomical shaping",
      ],
      fittingProcess: [
        "Residual limb assessment and measurement",
        "Selection of appropriate liner type and size",
        "Trial fitting and comfort evaluation",
        "Custom modifications if needed",
        "Training on proper donning and care",
        "Regular follow-ups for optimal fit",
      ],
    },
    {
      id: "below-knee",
      title: "Below Knee Prosthesis",
      tagline: "Lightweight comfort for active living",
      description: "Designed specifically for below-knee amputees, our prosthetics offer exceptional comfort through ultra-lightweight construction combined with advanced energy-return technology. These prosthetics are ideal for Indian patients who lead active lifestyles, whether working in offices, factories, or agricultural settings. The breathable liners are designed to handle India's warm climate, while the durable components withstand daily wear and tear.",
      image: belowKneeProsthesis,
      whoIsItFor: [
        "Individuals with below-knee (transtibial) amputation",
        "Active professionals, athletes, and sports enthusiasts",
        "Diabetic patients who have undergone partial leg amputation",
        "Working professionals in all sectors seeking restored mobility",
      ],
      benefits: [
        "Ultra-lightweight design for all-day comfort",
        "Energy-returning foot technology for efficient walking",
        "Custom socket with breathable materials for Indian climate",
        "Quick donning and doffing for convenience",
        "Activity-specific options for sports, work, and daily life",
        "Affordable maintenance with locally available components",
      ],
      technology: [
        "Dynamic response feet",
        "Flexible socket systems",
        "Pin lock and suction suspension",
        "Breathable liners",
      ],
      fittingProcess: [
        "Comprehensive evaluation and lifestyle assessment",
        "Residual limb measurement and casting",
        "Custom socket design and fabrication",
        "Component selection based on activity level",
        "Final fitting and walking training",
        "Ongoing support and adjustments",
      ],
    },
    {
      id: "upper-limb",
      title: "Upper Limb Prosthesis",
      tagline: "Restore hand function and independence",
      description: "Our upper limb prosthetics range from simple body-powered devices to advanced myoelectric options that respond to muscle signals. These prosthetics are designed to restore hand and arm function, enabling patients to perform daily tasks independently. Whether you need a prosthetic for work, household activities, or personal care, we offer solutions that match Indian lifestyle needs and occupational requirements.",
      image: upperLimbProsthesis,
      whoIsItFor: [
        "Individuals with arm, hand, or finger amputation at any level",
        "Patients seeking functional restoration for work and daily activities",
        "Those preferring cosmetic solutions for social confidence",
        "Working professionals requiring specific grip functions",
      ],
      benefits: [
        "Multiple grip patterns for various tasks",
        "Intuitive myoelectric control systems",
        "Lightweight construction for all-day wear",
        "Customizable cosmetic appearance matching skin tone",
        "Activity-specific terminal devices available",
        "Improved independence in daily living",
      ],
      technology: [
        "Myoelectric control",
        "Body-powered options",
        "Silicone cosmetic covers",
        "3D printed components",
      ],
      fittingProcess: [
        "Functional needs assessment",
        "Muscle control site evaluation",
        "Socket fabrication and fitting",
        "Device operation training",
        "Occupational therapy integration",
        "Regular follow-ups and adjustments",
      ],
    },
    {
      id: "cosmetic",
      title: "Partial & Cosmetic Prosthesis",
      tagline: "Natural-looking restoration for confidence",
      description: "Our cosmetic prosthetics are crafted with medical-grade silicone to achieve remarkably realistic appearance. Each prosthetic is custom-made to match your exact skin tone, texture, and features including nails and veins. Ideal for patients who prioritize natural appearance, these prosthetics restore confidence in social and professional settings. They are particularly suitable for Indian patients, with specialized color matching for diverse Indian skin tones.",
      image: partialCosmeticProsthesis,
      whoIsItFor: [
        "Individuals with partial hand or finger amputations",
        "Patients prioritizing cosmetic appearance and social confidence",
        "Those with partial foot or toe amputations",
        "Patients seeking psychological well-being through restored appearance",
      ],
      benefits: [
        "Highly realistic appearance indistinguishable from natural limbs",
        "Custom skin tone matching for all Indian complexions",
        "Detailed nail, vein, and texture replication",
        "Lightweight and comfortable for all-day wear",
        "Weather-resistant and durable for Indian climate",
        "Significant boost to self-confidence and mental well-being",
      ],
      technology: [
        "Medical-grade silicone",
        "Advanced color matching systems",
        "Custom molding techniques",
        "Durable weather-resistant materials",
      ],
      fittingProcess: [
        "Detailed assessment and expectations discussion",
        "Precise color and texture matching session",
        "Impression taking of affected and unaffected areas",
        "Custom fabrication by skilled technicians",
        "Final fitting and appearance adjustments",
        "Care instructions and maintenance guidance",
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
              and climate conditions. Our solutions restore mobility and independence for patients across India.
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
              tailored to your lifestyle and requirements.
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