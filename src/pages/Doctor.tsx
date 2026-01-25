import { Link } from "react-router-dom";
import { Award, Heart, Users, Shield, BookOpen, Stethoscope, GraduationCap, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

import drAbhinav from "@/assets/dr-abhinav.png";

const Doctor = () => {
  const expertise = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Artificial Limb Fitting",
      description: "Expert fitting and alignment of above and below knee prosthetics for optimal comfort and mobility.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Advanced Prosthetic Solutions",
      description: "Specialized in microprocessor-controlled knees and energy-returning feet for enhanced movement.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Orthotic Care",
      description: "Comprehensive orthotic solutions including spinal braces, AFOs, and custom supports.",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Patient Rehabilitation",
      description: "Holistic approach to rehabilitation focusing on physical, emotional, and functional recovery.",
    },
  ];

  const qualifications = [
    "Bachelor of Prosthetics & Orthotics (BPO)",
    "Master's in Rehabilitation Science",
    "15+ Years of Clinical Experience",
    "Member - Indian Association of P&O",
    "Advanced Training in Microprocessor Prosthetics",
    "Certified in Pediatric Prosthetics",
  ];

  const philosophy = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Empathy-Driven Treatment",
      description: "Understanding each patient's unique journey and providing compassionate care every step of the way.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Custom Care for Every Patient",
      description: "No two patients are the same. Every solution is tailored to individual needs, lifestyle, and goals.",
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Continuous Learning",
      description: "Staying updated with the latest advancements in prosthetics and orthotics to offer the best solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-outfit">
      <SEOHead
        title="Dr. Abhinav Bhatnagar | Prosthetics Expert Delhi | P&O ROBOTICS"
        description="Meet Dr. Abhinav Bhatnagar, a leading prosthetist and orthotist with 15+ years experience. Expert in artificial limbs, prosthetic leg fitting, and rehabilitation in Delhi, India."
        keywords="Dr. Abhinav Bhatnagar, prosthetics expert Delhi, orthotist India, artificial limbs specialist, prosthetic fitting doctor, rehabilitation expert"
        canonicalUrl="/doctor"
      />
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-3xl" />
        </div>
        
        <div className="container-custom section-padding !pt-0 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-muted to-primary/10">
                  <img
                    src={drAbhinav}
                    alt="Dr. Abhinav Bhatnagar - Prosthetics & Orthotics Specialist"
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
                  <div className="text-4xl font-bold">15+</div>
                  <div className="text-sm opacity-90">Years Experience</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Meet Our Expert
                </div>
                <h1 className="font-outfit font-bold text-4xl md:text-5xl text-foreground mb-4">
                  Dr. Abhinav Bhatnagar
                </h1>
                <p className="text-xl text-primary font-medium mb-6">
                  Prosthetics & Orthotics Specialist
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Dr. Abhinav Bhatnagar is a leading prosthetist and orthotist with over 15 years of 
                  experience in helping patients regain mobility and independence. His patient-centered 
                  approach and expertise in advanced prosthetic technology have transformed thousands 
                  of lives across India.
                </p>

                <Button variant="cta" size="lg" asChild>
                  <Link to="/contact">Book Appointment with Dr. Bhatnagar</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Qualifications & Credentials
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Years of dedicated training and continuous education ensure the highest standard of care.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-4">
              {qualifications.map((qual, index) => (
                <ScrollReveal key={qual} delay={index * 100}>
                  <div className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft">
                    <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{qual}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Expertise */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Areas of Expertise
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Specialized skills developed through years of clinical practice and advanced training.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group h-full">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-xl text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Treatment Philosophy
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A patient-first approach that combines clinical expertise with genuine care and understanding.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {philosophy.map((item, index) => (
              <ScrollReveal key={item.title} delay={index * 100}>
                <div className="bg-card p-8 rounded-2xl shadow-soft text-center h-full hover:shadow-medium transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary-foreground">
                    {item.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-xl text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonial Quote */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <p className="text-primary-foreground text-xl md:text-2xl font-medium leading-relaxed mb-6 italic">
                  "My goal is not just to fit a prosthetic limb, but to restore hope, independence, 
                  and the confidence to live life fully. Every patient's journey is unique, and 
                  I am honored to be part of their transformation."
                </p>
                <div className="text-primary-foreground/90 font-semibold">
                  — Dr. Abhinav Bhatnagar
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Schedule Your Consultation
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards better mobility. Dr. Bhatnagar is ready to understand 
              your needs and recommend the perfect solution for you.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Book Appointment with Dr. Bhatnagar</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctor;
