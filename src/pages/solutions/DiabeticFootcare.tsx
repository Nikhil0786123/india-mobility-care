import { Link } from "react-router-dom";
import { CheckCircle, Users, Settings, Heart, AlertTriangle, Shield, Footprints } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

import diabeticFootcare from "@/assets/diabetic-footcare.jpg";

const DiabeticFootcare = () => {
  const awarenessPoints = [
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Why Foot Care Matters",
      description: "Diabetes can cause nerve damage and poor blood flow, making feet vulnerable to injuries that may not heal properly.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Prevention is Key",
      description: "Proper footwear and regular care can prevent up to 85% of diabetes-related foot complications.",
    },
    {
      icon: <Footprints className="w-6 h-6" />,
      title: "Indian Lifestyle Considerations",
      description: "Our solutions are designed for Indian living - suitable for walking on varied surfaces and comfortable in warm climates.",
    },
  ];

  const products = [
    {
      id: "diabetic-footwear",
      title: "Custom Diabetic Footwear",
      tagline: "Protection and comfort for diabetic feet",
      description: "Specially designed therapeutic footwear that accommodates diabetic foot conditions, reduces pressure points, and prevents ulcers. Available in various comfortable styles suitable for Indian lifestyle.",
      image: diabeticFootcare,
      whoIsItFor: [
        "Type 1 and Type 2 diabetes patients",
        "Those with peripheral neuropathy",
        "Patients with foot deformities",
        "People with history of foot ulcers",
        "Preventive care seekers",
      ],
      benefits: [
        "Extra depth for custom insoles",
        "Seamless interior prevents friction",
        "Wide toe box for comfort",
        "Non-binding uppers",
        "Protective and cushioned sole",
        "Available in traditional and modern styles",
      ],
      features: [
        "Rocker sole design",
        "Moisture-wicking materials",
        "Lightweight construction",
        "Easy closure systems",
      ],
      careAdvice: [
        "Check feet daily for any cuts or sores",
        "Wear shoes that fit properly",
        "Never walk barefoot",
        "Keep feet clean and dry",
        "Trim nails carefully",
        "Regular check-ups with your doctor",
      ],
    },
    {
      id: "therapeutic-insoles",
      title: "Therapeutic Insoles",
      tagline: "Custom support for every step",
      description: "Custom-molded insoles specifically designed for diabetic feet, providing optimal cushioning, pressure redistribution, and support. Helps prevent complications and ensures comfortable walking.",
      image: diabeticFootcare,
      whoIsItFor: [
        "All diabetic patients",
        "Those with plantar pressure issues",
        "Patients with foot pain",
        "People requiring arch support",
        "Prevention-focused individuals",
      ],
      benefits: [
        "Reduces peak plantar pressure",
        "Custom molded to your foot",
        "Shock-absorbing materials",
        "Promotes even weight distribution",
        "Fits in diabetic footwear",
        "Long-lasting and durable",
      ],
      features: [
        "Multi-density construction",
        "Antimicrobial materials",
        "Heat-moldable options",
        "Various thickness options",
      ],
      careAdvice: [
        "Replace insoles every 6-12 months",
        "Air them out daily",
        "Check for wear patterns",
        "Use with appropriate footwear",
        "Bring to every foot check-up",
        "Report any discomfort immediately",
      ],
    },
    {
      id: "preventive-solutions",
      title: "Preventive Foot Care Solutions",
      tagline: "Stay one step ahead of complications",
      description: "Comprehensive preventive solutions including protective socks, foot care products, and regular assessment programs designed to keep diabetic feet healthy and complication-free.",
      image: diabeticFootcare,
      whoIsItFor: [
        "Newly diagnosed diabetics",
        "All diabetes patients",
        "Those with family history",
        "Health-conscious individuals",
        "Caregivers of diabetic patients",
      ],
      benefits: [
        "Early problem detection",
        "Reduced complication risk",
        "Better quality of life",
        "Cost savings long-term",
        "Peace of mind",
        "Improved mobility",
      ],
      features: [
        "Regular foot assessments",
        "Diabetic socks",
        "Foot care education",
        "Customized care plans",
      ],
      careAdvice: [
        "Schedule regular foot check-ups",
        "Monitor blood sugar levels",
        "Stay physically active",
        "Maintain healthy weight",
        "Stop smoking",
        "Follow medication regimen",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-outfit">
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
              Specialized Care
            </div>
            <h1 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-6 animate-fade-up">
              Diabetic <span className="text-primary">Foot Care</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
              Specialized footwear and insole solutions designed specifically for diabetic patients. 
              Protect your feet, prevent complications, and maintain an active lifestyle with our 
              comprehensive diabetic foot care solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Awareness Section */}
      <section className="section-padding bg-accent/10">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Understanding Diabetic Foot Care
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                In India, diabetes affects millions of people. Proper foot care is essential to prevent 
                serious complications.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {awarenessPoints.map((point, index) => (
              <ScrollReveal key={point.title} delay={index * 100}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 text-primary">
                    {point.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-xl text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
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
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full rounded-2xl shadow-xl"
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
              {/* Features */}
              <ScrollReveal delay={300}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="font-outfit font-semibold text-xl text-foreground">
                      Features
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.features.map((feature) => (
                      <span 
                        key={feature}
                        className="bg-muted px-4 py-2 rounded-full text-sm font-medium text-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Care Advice */}
              <ScrollReveal delay={400}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      <AlertTriangle className="w-6 h-6" />
                    </div>
                    <h3 className="font-outfit font-semibold text-xl text-foreground">
                      Care Tips
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {product.careAdvice.map((advice) => (
                      <li key={advice} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm">{advice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Statistics Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
                The Importance of Prevention
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "77M+", label: "Indians with Diabetes" },
              { value: "85%", label: "Complications Preventable" },
              { value: "Every 20 sec", label: "A Limb is Lost to Diabetes" },
            ].map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-6">
              Take the First Step Towards Healthier Feet
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Don't wait for complications. Schedule a foot assessment today and let our specialists 
              help you protect your feet.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Book Free Foot Assessment</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiabeticFootcare;
