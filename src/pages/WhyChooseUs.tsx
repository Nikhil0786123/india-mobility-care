import { Link } from "react-router-dom";
import { 
  Users, 
  Sparkles, 
  Wrench, 
  HeartHandshake, 
  Phone, 
  Shield, 
  Target, 
  Award,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Custom Fit for Indian Body Types",
      description:
        "Every prosthetic and orthotic solution is meticulously designed and fitted specifically for Indian physiology, lifestyle, and daily activities. We understand the unique needs of Indian patients.",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Advanced Prosthetic Technology",
      description:
        "We utilize the latest globally available prosthetic technologies including microprocessor-controlled knees, energy-returning feet, and lightweight carbon fiber components for superior mobility.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Experienced Medical Team",
      description:
        "Our team comprises certified prosthetists and orthotists with decades of combined experience, ensuring you receive expert care backed by extensive clinical knowledge.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8" />,
      title: "Patient-Centered Care",
      description:
        "Your comfort, well-being, and independence are at the heart of everything we do. We take time to understand your goals and create personalized treatment plans.",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Post-Fitting Support & Follow-Up",
      description:
        "Our commitment doesn't end at fitting. We provide ongoing support, adjustments, and maintenance to ensure long-term comfort and optimal functionality.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ethical & Transparent Approach",
      description:
        "We believe in honest communication and transparent practices. You'll always know what to expect with clear explanations and no hidden surprises.",
    },
  ];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5000+", label: "Patients Served" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "24/7", label: "Support Available" },
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
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                Why Patients Trust Us
              </div>
              <h1 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Why Choose <span className="text-primary">P&O Robotics?</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                We combine advanced technology with compassionate care to deliver prosthetic 
                and orthotic solutions that truly transform lives. Here's what sets us apart.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reasons Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                What Makes Us Different
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our commitment to excellence in every aspect of patient care.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <ScrollReveal key={reason.title} delay={index * 100}>
                <div className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 group h-full border border-border/50 hover:border-primary/30">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    {reason.icon}
                  </div>
                  <h3 className="font-outfit font-semibold text-xl text-foreground mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <div>
                <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-6">
                  Our Promise to You
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  At P&O Robotics, we believe that every patient deserves the highest quality 
                  care and the best possible outcomes. Our promise is simple: to treat you 
                  like family and work tirelessly until you're satisfied.
                </p>
                <div className="space-y-4">
                  {[
                    "Comprehensive assessment and personalized treatment plan",
                    "Use of only certified, high-quality components",
                    "Regular follow-ups and adjustments at no extra cost",
                    "Lifetime support and guidance for all our patients",
                    "Honest pricing with no hidden charges",
                  ].map((promise, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{promise}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 text-center shadow-xl">
                <Target className="w-16 h-16 text-primary-foreground mx-auto mb-6" />
                <h3 className="font-outfit font-bold text-2xl text-primary-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-primary-foreground/90 text-lg leading-relaxed">
                  "To restore mobility, independence, and hope to every patient 
                  who walks through our doors, using the best technology and 
                  the most compassionate care."
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards better mobility. Book a free consultation 
              with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="xl" asChild>
                <Link to="/contact">Book Free Consultation</Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/doctor">Meet Our Doctor</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WhyChooseUs;
