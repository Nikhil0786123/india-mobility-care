import { Link } from "react-router-dom";
import { CheckCircle, Users, Settings, Heart, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageLoader from "@/components/PageLoader";
import AnimatedImage from "@/components/AnimatedImage";
import SEOHead from "@/components/SEOHead";

import kneeBraces from "@/assets/knee-braces.jpg";
import ankleFootOrthosis from "@/assets/ankle-foot-orthosis.jpg";
import spinalOrthosis from "@/assets/spinal-orthosis.jpg";

const OrthoticSolutions = () => {
  const products = [
    {
      id: "knee-braces",
      title: "Knee Braces",
      tagline: "Support, stability, and pain relief",
      description: "Comprehensive range of knee braces designed for ligament injuries, arthritis management, post-surgical recovery, and sports activities. Custom-fitted for maximum support and comfort.",
      image: kneeBraces,
      whoIsItFor: [
        "ACL/PCL/MCL injury patients",
        "Arthritis and joint pain sufferers",
        "Post-surgery rehabilitation",
        "Sports persons and athletes",
        "Those with knee instability",
      ],
      benefits: [
        "Provides medial-lateral stability",
        "Reduces pain and swelling",
        "Supports healing process",
        "Allows controlled movement",
        "Prevents further injury",
        "Comfortable for all-day wear",
      ],
      technology: [
        "Hinged knee systems",
        "Adjustable strapping",
        "Breathable materials",
        "Lightweight aluminum frames",
      ],
      fittingProcess: [
        "Clinical assessment",
        "Knee measurement",
        "Brace selection",
        "Custom adjustments",
        "Usage training",
        "Follow-up care",
      ],
    },
    {
      id: "afo",
      title: "Ankle Foot Orthosis (AFO)",
      tagline: "Restore walking confidence",
      description: "Custom-molded ankle foot orthoses designed for drop foot, stroke recovery, cerebral palsy, and other conditions affecting ankle and foot function. Lightweight and effective for daily use.",
      image: ankleFootOrthosis,
      whoIsItFor: [
        "Drop foot patients",
        "Stroke survivors",
        "Cerebral palsy patients",
        "Muscular dystrophy patients",
        "Peripheral neuropathy cases",
      ],
      benefits: [
        "Prevents foot drop during walking",
        "Improves gait pattern",
        "Reduces risk of falls",
        "Custom fit for comfort",
        "Suitable for Indian footwear",
        "Durable for daily use",
      ],
      technology: [
        "Carbon fiber construction",
        "Custom thermoplastic molding",
        "Dynamic ankle joints",
        "Articulating designs",
      ],
      fittingProcess: [
        "Gait analysis",
        "Casting/3D scanning",
        "Material selection",
        "Orthosis fabrication",
        "Final fitting",
        "Gait training",
      ],
    },
    {
      id: "spinal-orthosis",
      title: "Spinal Orthosis",
      tagline: "Support your spine, improve your life",
      description: "Comprehensive spinal support solutions including lumbar supports, thoraco-lumbar braces, and cervical orthoses. Designed for posture correction, pain management, and post-injury recovery.",
      image: spinalOrthosis,
      whoIsItFor: [
        "Lower back pain patients",
        "Scoliosis patients",
        "Post-spinal surgery patients",
        "Compression fracture patients",
        "Those with poor posture",
      ],
      benefits: [
        "Reduces back pain",
        "Provides spinal support",
        "Improves posture",
        "Aids surgical recovery",
        "Prevents further damage",
        "Comfortable design",
      ],
      technology: [
        "Rigid frame systems",
        "Semi-rigid designs",
        "Soft lumbar supports",
        "Custom molded shells",
      ],
      fittingProcess: [
        "Spinal assessment",
        "X-ray review if needed",
        "Measurement taking",
        "Brace fitting",
        "Wear schedule",
        "Progress monitoring",
      ],
    },
    {
      id: "custom-supports",
      title: "Custom Orthotic Supports",
      tagline: "Tailored solutions for unique needs",
      description: "Specialized custom orthotic supports for various conditions including wrist splints, elbow braces, and other supportive devices. Each solution is individually crafted for your specific needs.",
      image: kneeBraces,
      whoIsItFor: [
        "Carpal tunnel syndrome patients",
        "Tennis/golfer's elbow patients",
        "Post-fracture rehabilitation",
        "Repetitive strain injury cases",
        "Specialized medical needs",
      ],
      benefits: [
        "100% custom fit",
        "Condition-specific design",
        "Optimal support level",
        "Comfortable materials",
        "Promotes healing",
        "Long-lasting durability",
      ],
      technology: [
        "3D printing",
        "Custom molding",
        "Advanced composites",
        "Breathable fabrics",
      ],
      fittingProcess: [
        "Detailed evaluation",
        "Custom measurement",
        "Design consultation",
        "Orthosis creation",
        "Fitting session",
        "Adjustment as needed",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-outfit">
      <SEOHead
        title="Orthotic Solutions India | Knee Braces & Spinal Supports | P&O ROBOTICS"
        description="Custom orthotic solutions in India - knee braces, ankle foot orthosis (AFO), spinal orthosis, and supportive braces. Expert orthotic care for mobility and pain relief in Delhi."
        keywords="knee braces India, AFO brace Delhi, spinal orthosis, orthotic supports, ankle foot orthosis India, back brace, orthotic solutions"
        canonicalUrl="/solutions/orthotics"
      />
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
              Orthotic <span className="text-primary">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
              Supportive braces and orthoses designed to improve mobility, reduce pain, and aid recovery. 
              Every orthotic is custom-fitted for maximum comfort and effectiveness.
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
              Get the Support You Need
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Our specialists will evaluate your condition and recommend the right orthotic solution 
              for optimal recovery and comfort.
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

export default OrthoticSolutions;
