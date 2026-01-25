import { Link } from "react-router-dom";
import { Target, Heart, Users, Award, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

import doctorPatient from "@/assets/doctor-patient.jpg";
import workshop from "@/assets/workshop.jpg";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Compassion",
      description:
        "We understand the emotional journey of our patients and provide care with empathy and understanding.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We strive for the highest standards in prosthetic and orthotic solutions and patient care.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accessibility",
      description:
        "Making quality prosthetic and orthotic care affordable and accessible to all Indians.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Continuously adopting the latest technologies to provide the best outcomes for our patients.",
    },
  ];

  const milestones = [
    { year: "2008", event: "Founded in Mumbai with a mission to serve Indian patients" },
    { year: "2012", event: "Opened our advanced prosthetics workshop" },
    { year: "2015", event: "Launched pediatric prosthetics program" },
    { year: "2018", event: "Introduced advanced microprocessor-controlled prosthetics" },
    { year: "2022", event: "Served 5000+ patients across India" },
    { year: "2024", event: "Expanded to multiple centers across Maharashtra" },
  ];

  return (
    <div className="min-h-screen bg-background font-outfit">
      <SEOHead
        title="About P&O ROBOTICS | Leading Prosthetics Provider in India"
        description="Learn about P&O ROBOTICS Artificial Limbs Solutions - 15+ years of providing advanced prosthetic and orthotic care to patients across India. Trusted rehabilitation services in Delhi."
        keywords="about P&O ROBOTICS, artificial limbs company India, prosthetics provider Delhi, orthotic solutions India, rehabilitation center"
        canonicalUrl="/about"
      />
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
              About <span className="text-primary">P&O ROBOTICS ARTIFICIAL LIMBS SOLUTIONS</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
              For over 15 years, we have been dedicated to restoring mobility and
              independence to thousands of patients across India. Our mission is to
              provide world-class prosthetic and orthotic solutions that are
              customized for Indian lifestyles and accessible to all.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="relative">
                <img
                  src={doctorPatient}
                  alt="Doctor consulting with patient"
                  className="rounded-2xl shadow-large w-full"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-large max-w-xs hidden md:block">
                  <p className="font-semibold text-lg">
                    "Every patient deserves the chance to walk again with dignity."
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div>
                <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Our Mission
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  We believe that every person deserves the opportunity to live an
                  active, independent life. Our mission is to improve the quality of
                  life for individuals with limb loss or mobility challenges by
                  providing personalized, high-quality prosthetic and orthotic
                  solutions.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Understanding the unique needs of Indian patients—from climate
                  considerations to cultural activities—we design solutions that
                  truly fit the Indian lifestyle.
                </p>

                <ul className="space-y-3">
                  {[
                    "Customized solutions for Indian body types",
                    "Affordable care without compromising quality",
                    "Comprehensive rehabilitation support",
                    "Lifetime after-care and adjustments",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                These principles guide everything we do at P&O ROBOTICS Artificial Limbs Solutions.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <ScrollReveal key={value.title} delay={index * 100}>
                <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 text-center h-full">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary">
                    {value.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-xl text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div className="order-2 lg:order-1">
                <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Our State-of-the-Art Workshop
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our modern workshop is equipped with the latest technology for
                  creating custom prosthetic and orthotic devices. Every product is
                  crafted with precision by our skilled technicians who combine
                  traditional craftsmanship with cutting-edge technology.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  From initial measurement to final fitting, we maintain strict
                  quality control to ensure every device meets our high standards
                  and your specific needs.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="order-1 lg:order-2">
                <img
                  src={workshop}
                  alt="Our prosthetics workshop"
                  className="rounded-2xl shadow-large w-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                From humble beginnings to serving thousands of patients across India.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <ScrollReveal key={milestone.year} delay={index * 100}>
                <div className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {milestone.year}
                    </div>
                    {index < milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pt-4">
                    <p className="text-foreground text-lg">{milestone.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Our team of experts is here to help you find the perfect solution
              for your needs.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Book a Consultation</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
