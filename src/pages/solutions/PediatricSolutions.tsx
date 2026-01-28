import { Link } from "react-router-dom";
import { CheckCircle, Users, Settings, Heart, Zap, Smile, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PageLoader from "@/components/PageLoader";
import AnimatedImage from "@/components/AnimatedImage";
import SEOHead from "@/components/SEOHead";

import childFriendlyProsthetics from "@/assets/child-friendly-prosthetics.png";

const PediatricSolutions = () => {
  const features = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Fun & Colorful Designs",
      description: "Children love our vibrant prosthetics with their favorite colors and patterns.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Growth-Adjustable",
      description: "Modular designs that grow with your child, reducing replacement frequency.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Comfort First",
      description: "Lightweight materials ensure all-day comfort for active play.",
    },
    {
      icon: <Smile className="w-6 h-6" />,
      title: "Child Psychology",
      description: "Designed considering children's emotional and psychological needs.",
    },
  ];

  const products = [
    {
      id: "child-prosthetics",
      title: "Child-Friendly Prosthetics",
      tagline: "Designed for play, built for life",
      description: "Our pediatric prosthetics are specifically designed for children, featuring colorful, fun designs that kids love while maintaining the highest standards of functionality and comfort.",
      image: childFriendlyProsthetics,
      whoIsItFor: [
        "Children with congenital limb differences",
        "Pediatric amputation patients",
        "Children of all age groups",
        "Active and playful kids",
      ],
      benefits: [
        "Colorful and fun designs",
        "Super lightweight for comfort",
        "Durable for active play",
        "Easy to clean and maintain",
        "Water-resistant options",
        "Boosts confidence and self-esteem",
      ],
      parentInfo: [
        "Comprehensive parental guidance",
        "Regular growth assessments",
        "Emotional support resources",
        "School coordination assistance",
        "Activity recommendations",
      ],
    },
    {
      id: "growth-adjustable",
      title: "Growth-Adjustable Solutions",
      tagline: "Grows with your child",
      description: "Our innovative modular prosthetics and orthotics can be adjusted as your child grows, providing optimal fit and function throughout their development while being cost-effective.",
      image: childFriendlyProsthetics,
      whoIsItFor: [
        "Growing children needing long-term solutions",
        "Parents seeking cost-effective options",
        "Children requiring frequent size adjustments",
        "Families wanting sustainable solutions",
      ],
      benefits: [
        "Extends device lifespan significantly",
        "Reduces overall treatment costs",
        "Quick adjustments as child grows",
        "Maintains optimal fit always",
        "Minimal disruption to child's life",
        "Sustainable and eco-friendly approach",
      ],
      parentInfo: [
        "Growth milestone tracking",
        "Adjustment scheduling",
        "Component upgrade options",
        "Trade-in programs",
        "Sibling discount programs",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-outfit">
      <SEOHead
        title="Pediatric Prosthetic Leg & Hand Delhi | Child Artificial Limbs | P&O ROBOTICS"
        description="Pediatric prosthetic leg and prosthetic hand solutions for children in Delhi, Begumpur. Child-friendly artificial limbs with growth-adjustable designs. Expert rehabilitation and care. Prosthetic clinic near me."
        keywords="pediatric prosthetic leg, child prosthetic hand, artificial limbs for children, prosthetic clinic near me, rehabilitation Delhi, Begumpur pediatric prosthetics, children artificial limbs India"
        canonicalUrl="/solutions/pediatric"
      />
      <PageLoader minDuration={500} />
      <Header />

      {/* Hero Section - Softer colors for pediatric */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom section-padding !pt-0 relative">
          <div className="max-w-3xl">
            <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4 animate-fade-in">
              Pediatric Care
            </div>
            <h1 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-6 animate-fade-up">
              Pediatric <span className="text-secondary">Solutions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
              Specialized prosthetic and orthotic solutions for children that combine fun, colorful 
              designs with advanced functionality. Because every child deserves to play, run, and 
              explore without limits.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Why Choose Our Pediatric Solutions?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We understand children's unique needs - physical, emotional, and psychological.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 100}>
                <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center h-full group">
                  <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-secondary group-hover:bg-secondary group-hover:text-primary-foreground transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
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
                  <p className="text-secondary font-medium text-lg mb-4">{product.tagline}</p>
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
                    animation={productIndex % 2 === 0 ? "zoom" : "fade-up"}
                    containerClassName="flex justify-center"
                  />
                </div>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Who Is It For */}
              <ScrollReveal delay={100}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
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
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Key Benefits */}
              <ScrollReveal delay={200}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
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
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* For Parents */}
              <ScrollReveal delay={300}>
                <div className="bg-card p-8 rounded-2xl shadow-soft h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center text-accent">
                      <Smile className="w-6 h-6" />
                    </div>
                    <h3 className="font-outfit font-semibold text-xl text-foreground">
                      For Parents
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {product.parentInfo.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      {/* Parent Support Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/10 to-accent/10">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-6">
                We Support the Whole Family
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                We understand that when a child needs prosthetic or orthotic care, the entire family 
                is affected. That's why we provide comprehensive support not just for children, but 
                for parents and caregivers too. From emotional guidance to practical tips for daily 
                activities, we're here for your family every step of the way.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">Schedule a Family Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/stories">Read Parent Testimonials</Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Give Your Child the Freedom to Play
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Every child deserves to run, jump, and explore. Let us help your child embrace 
              their full potential.
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

export default PediatricSolutions;
