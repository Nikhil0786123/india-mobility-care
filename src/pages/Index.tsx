import { Link } from "react-router-dom";
import { Footprints, ShieldCheck, Baby, Heart, Users, Wrench, Phone, Sparkles, HeartHandshake, MessageCircle, ArrowRight, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SolutionCard from "@/components/SolutionCard";
import TrustItem from "@/components/TrustItem";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import PageLoader from "@/components/PageLoader";
import AnimatedImage from "@/components/AnimatedImage";

import heroPatient from "@/assets/hero-patient.jpg";
import prostheticLegSilicone from "@/assets/prosthetic-leg-silicone.png";
import ankleFootOrthosis from "@/assets/ankle-foot-orthosis.jpg";
import childFriendlyProsthetics from "@/assets/child-friendly-prosthetics.png";
import therapeuticInsoles from "@/assets/therapeutic-insoles.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import drAbhinav from "@/assets/dr-abhinav.png";
import logo from "@/assets/logo.png";

const Index = () => {
  const solutions = [
    {
      icon: <Footprints className="w-6 h-6" />,
      title: "Prosthetic Limbs",
      description:
        "Advanced artificial limbs designed for comfort and natural movement, customized for Indian body types and lifestyle.",
      image: prostheticLegSilicone,
      link: "/solutions/prosthetics",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Orthotic Supports",
      description:
        "Braces and supports for knees, ankles, and spine that help improve mobility and reduce pain.",
      image: ankleFootOrthosis,
      link: "/solutions/orthotics",
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Pediatric Solutions",
      description:
        "Child-friendly prosthetics with growth-adjustable designs that grow with your child.",
      image: childFriendlyProsthetics,
      link: "/solutions/pediatric",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Diabetic Foot Care",
      description:
        "Specialized footwear and insoles for diabetic patients to prevent complications and ensure comfort.",
      image: therapeuticInsoles,
      link: "/solutions/diabetic-footcare",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-7 h-7" />,
      title: "Custom Fit for Indian Body Types",
      description:
        "Every solution is tailored specifically for Indian physiology and lifestyle needs.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Advanced Technology",
      description:
        "We use the latest prosthetic and orthotic technologies available globally.",
    },
    {
      icon: <Award className="w-7 h-7" />,
      title: "Experienced Professionals",
      description:
        "Our team includes certified prosthetists with decades of experience.",
    },
    {
      icon: <HeartHandshake className="w-7 h-7" />,
      title: "Patient-Centered Care",
      description:
        "Your comfort and well-being are at the heart of everything we do.",
    },
    {
      icon: <Phone className="w-7 h-7" />,
      title: "Post-Fitting Support",
      description:
        "Ongoing support and adjustments to ensure long-term comfort.",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Ethical & Transparent",
      description:
        "Honest communication with no hidden costs or surprises.",
    },
  ];

  const beforeAfterSlides = [
    {
      before: before1,
      after: after1,
      name: "Priya Sharma",
      age: "32 years",
      condition: "Below Knee Amputation",
      result: "Walking independently within 3 months",
    },
    {
      before: before2,
      after: after2,
      name: "Ramesh Kumar",
      age: "58 years",
      condition: "Above Knee Amputation",
      result: "Regained active lifestyle",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-outfit">
      <PageLoader minDuration={600} />
      <Header />

      {/* Brand Hero Section - TOP OF PAGE */}
      <section className="pt-28 sm:pt-32 md:pt-36 pb-16 md:pb-24 bg-gradient-to-b from-sky-50 via-white to-teal-50/30 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
            {/* Premium Large Logo with Enhanced Visibility */}
            <div className="relative mb-8 md:mb-12">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 blur-3xl scale-125 rounded-full"></div>
              
              <AnimatedImage 
                src={logo} 
                alt="P&O ROBOTICS Artificial Limbs Solutions" 
                className="relative h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[28rem] w-auto object-contain drop-shadow-2xl"
                animation="zoom"
                hoverEffect={false}
              />
            </div>
            
            {/* Organization Name - Bold & Prominent */}
            <h1 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary mb-3 tracking-tight drop-shadow-sm">
              P&O ROBOTICS
            </h1>
            <h2 className="font-outfit font-semibold text-xl sm:text-2xl md:text-3xl text-foreground/80 uppercase tracking-widest mb-8">
              Artificial Limbs Solutions
            </h2>
            
            {/* Decorative divider */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary/50"></div>
              <div className="w-4 h-4 rounded-full bg-primary/60 animate-pulse"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
            
            {/* About Heading */}
            <h3 className="font-outfit font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-6">
              About Us
            </h3>
            
            {/* About Description */}
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mb-10">
              P&O ROBOTICS Artificial Limbs Solutions is dedicated to improving mobility and quality of life through advanced prosthetic and orthotic care. We provide customized artificial limb and support solutions designed specifically for Indian patients, combining medical expertise, modern technology, and compassionate care. Our focus is on comfort, functionality, and long-term support for every patient.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/solutions">Explore Our Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section className="bg-white border-y border-border py-6 md:py-8">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { icon: <Users className="w-5 h-5" />, text: "Indian Patient Focused" },
              { icon: <Wrench className="w-5 h-5" />, text: "Custom Prosthetic Solutions" },
              { icon: <Award className="w-5 h-5" />, text: "Expert Medical Care" },
              { icon: <HeartHandshake className="w-5 h-5" />, text: "Consultation Based" },
            ].map((badge) => (
              <div key={badge.text} className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  {badge.icon}
                </div>
                <span className="font-medium text-xs sm:text-sm text-foreground">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="relative min-h-[70vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background Image with Better Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroPatient}
            alt="Happy patient with prosthetic limb"
            className="w-full h-full object-cover animate-scale-in"
            style={{ animationDuration: '1.2s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>

        {/* Content */}
        <div className="relative container-custom px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm border border-white/30">
                P&O ROBOTICS Artificial Limbs Solutions
              </span>
            </div>
            <h2 className="font-outfit font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-6">
              Trusted Prosthetic &
              <br />
              <span className="text-accent">Orthotic Care in India</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-xl">
              Advanced Artificial Limb & Orthotic Solutions Designed for Indian Patients
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button variant="cta" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button variant="heroOutline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/solutions">Explore Our Solutions</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-10 md:mt-12 grid grid-cols-3 gap-4 sm:gap-8">
              {[
                { value: "15+", label: "Years Experience" },
                { value: "5000+", label: "Patients Served" },
                { value: "98%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Comprehensive Care
              </div>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
                Our Solutions
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                Comprehensive prosthetic and orthotic solutions designed to restore
                independence and improve quality of life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 100}>
                <SolutionCard {...solution} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10 md:mt-12">
              <Button variant="default" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/solutions">View All Solutions <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Why Patients Trust Us
              </div>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
                Why Choose P&O ROBOTICS?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                We are committed to providing the highest quality care with a
                patient-first approach.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="bg-muted/50 p-5 md:p-6 rounded-2xl hover:shadow-medium transition-all duration-300 group h-full border border-border hover:border-primary/30">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-base md:text-lg text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-10 md:mt-12">
              <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/why-choose-us">Learn More About Us <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Patient Transformations
              </div>
              <h2 className="font-outfit font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
                Real Patients. Real Transformation.
              </h2>
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
                See the life-changing difference our solutions have made for
                patients across India.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <BeforeAfterSlider slides={beforeAfterSlides} />
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-10 md:mt-12">
              <Button variant="default" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/stories">View All Stories <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Doctor Highlight Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <ScrollReveal>
              <div className="relative max-w-md mx-auto lg:max-w-none">
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-muted to-primary/10">
                  <AnimatedImage
                    src={drAbhinav}
                    alt="Dr. Abhinav Bhatnagar"
                    className="w-full aspect-[4/5] object-cover object-top"
                    animation="fade-up"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 bg-primary text-white p-4 md:p-5 rounded-xl md:rounded-2xl shadow-xl">
                  <div className="text-2xl md:text-3xl font-bold">15+</div>
                  <div className="text-xs opacity-90">Years Experience</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="text-center lg:text-left">
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Meet Our Expert
                </div>
                <h2 className="font-outfit font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
                  Dr. Abhinav Bhatnagar
                </h2>
                <p className="text-lg md:text-xl text-primary font-medium mb-4">
                  Prosthetics & Orthotics Specialist
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  With over 15 years of experience, Dr. Abhinav Bhatnagar has helped
                  thousands of patients regain mobility and independence. His
                  patient-centered approach and expertise in advanced prosthetic
                  technology have made him one of the most trusted specialists in India.
                </p>
                <Button variant="default" size="lg" className="w-full sm:w-auto" asChild>
                  <Link to="/doctor">Learn More About Dr. Bhatnagar <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-6">
              Ready to Take the First Step?
            </h2>
            <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation with our experts and discover how we can help
              you regain your mobility and independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <a
                href="tel:+919717661811"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors"
              >
                <Phone className="w-5 h-5" />
                +91 97176 61811
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;