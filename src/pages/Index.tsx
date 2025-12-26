import { Link } from "react-router-dom";
import { Footprints, ShieldCheck, Baby, Heart, Users, Wrench, Phone, Sparkles, HeartHandshake, MessageCircle, ArrowRight, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SolutionCard from "@/components/SolutionCard";
import TrustItem from "@/components/TrustItem";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import heroPatient from "@/assets/hero-patient.jpg";
import prostheticLeg from "@/assets/prosthetic-leg.jpg";
import orthoticBrace from "@/assets/orthotic-brace.jpg";
import pediatricProsthetic from "@/assets/pediatric-prosthetic.jpg";
import diabeticFootcare from "@/assets/diabetic-footcare.jpg";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import drAbhinav from "@/assets/dr-abhinav.png";

const Index = () => {
  const solutions = [
    {
      icon: <Footprints className="w-6 h-6" />,
      title: "Prosthetic Limbs",
      description:
        "Advanced artificial limbs designed for comfort and natural movement, customized for Indian body types and lifestyle.",
      image: prostheticLeg,
      link: "/solutions/prosthetics",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Orthotic Supports",
      description:
        "Braces and supports for knees, ankles, and spine that help improve mobility and reduce pain.",
      image: orthoticBrace,
      link: "/solutions/orthotics",
    },
    {
      icon: <Baby className="w-6 h-6" />,
      title: "Pediatric Solutions",
      description:
        "Child-friendly prosthetics with growth-adjustable designs that grow with your child.",
      image: pediatricProsthetic,
      link: "/solutions/pediatric",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Diabetic Foot Care",
      description:
        "Specialized footwear and insoles for diabetic patients to prevent complications and ensure comfort.",
      image: diabeticFootcare,
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
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={heroPatient}
            alt="Happy patient with prosthetic limb"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative container-custom section-padding pt-32">
          <div className="max-w-2xl">
            <h1 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground leading-tight mb-6 animate-fade-up">
              Restoring Mobility.
              <br />
              <span className="text-accent">Rebuilding Lives.</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
              Advanced Artificial Limb & Orthotic Solutions Designed for Indian Patients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
              <Button variant="cta" size="lg" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/solutions">Explore Our Solutions</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 animate-fade-up" style={{ animationDelay: "300ms" }}>
              {[
                { value: "15+", label: "Years Experience" },
                { value: "5000+", label: "Patients Served" },
                { value: "98%", label: "Satisfaction Rate" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Comprehensive Care
              </div>
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Solutions
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive prosthetic and orthotic solutions designed to restore
                independence and improve quality of life.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <ScrollReveal key={solution.title} delay={index * 100}>
                <SolutionCard {...solution} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button variant="default" size="lg" asChild>
                <Link to="/solutions">View All Solutions <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Why Patients Trust Us
              </div>
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Why Choose P&O Robotics?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We are committed to providing the highest quality care with a
                patient-first approach.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="bg-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group h-full border border-border/50 hover:border-primary/30">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-lg text-foreground mb-2">
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
            <div className="text-center mt-12">
              <Button variant="outline" size="lg" asChild>
                <Link to="/why-choose-us">Learn More About Us <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Before & After */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                Patient Transformations
              </div>
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Real Patients. Real Transformation.
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See the life-changing difference our solutions have made for
                patients across India.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <BeforeAfterSlider slides={beforeAfterSlides} />
          </ScrollReveal>

          <ScrollReveal>
            <div className="text-center mt-12">
              <Button variant="default" size="lg" asChild>
                <Link to="/stories">View All Stories <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Doctor Highlight Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gradient-to-b from-muted to-primary/10">
                  <img
                    src={drAbhinav}
                    alt="Dr. Abhinav Bhatnagar"
                    className="w-full aspect-[4/5] object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-5 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-xs opacity-90">Years Experience</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Meet Our Expert
                </div>
                <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                  Dr. Abhinav Bhatnagar
                </h2>
                <p className="text-xl text-primary font-medium mb-4">
                  Prosthetics & Orthotics Specialist
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  With over 15 years of experience, Dr. Bhatnagar has transformed thousands of 
                  lives across India. His patient-centered approach combines cutting-edge technology 
                  with compassionate care.
                </p>
                <blockquote className="border-l-4 border-primary pl-4 italic text-foreground mb-8">
                  "My goal is not just to fit a prosthetic limb, but to restore hope, independence, 
                  and the confidence to live life fully."
                </blockquote>
                <Button variant="default" size="lg" asChild>
                  <Link to="/doctor">Meet Our Doctor <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
                Your Journey Towards Better Mobility Starts Here
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Take the first step towards regaining your independence. Our team of
                experts is ready to help you find the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cta" size="xl" asChild>
                  <Link to="/contact">Book Your Consultation</Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild className="group">
                  <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
