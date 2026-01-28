import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    condition: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Consultation Request Sent!",
      description:
        "Our team will contact you within 24 hours to schedule your consultation.",
    });

    setFormData({
      name: "",
      phone: "",
      email: "",
      condition: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: ["+91 97176 61811"],
      action: "tel:+919717661811",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: ["care@porobotics.in"],
      action: "mailto:care@porobotics.in",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: ["1679, Begumpur, Near MCD School,", "Delhi – 110086"],
      action: "https://maps.google.com/?q=Begumpur+Delhi+110086",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sunday: By Appointment"],
    },
  ];

  return (
    <div className="min-h-screen bg-background font-outfit">
      <SEOHead
        title="Contact P&O ROBOTICS | Prosthetic Clinic Near Me Delhi Begumpur"
        description="Contact P&O ROBOTICS for prosthetic leg, prosthetic hand, silicone prosthetic, and rehabilitation services in Delhi. Visit our Begumpur center or call +91-97176-61811. Free consultation available."
        keywords="contact P&O ROBOTICS, prosthetic clinic near me, artificial limbs Delhi, prosthetic leg consultation, prosthetic hand fitting, Begumpur prosthetic center, rehabilitation Delhi"
        canonicalUrl="/contact"
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
              Speak With Our{" "}
              <span className="text-primary">Prosthetic Expert</span> Today
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
              Take the first step towards better mobility. Our team is ready to
              answer your questions and help you find the right solution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal>
              <div className="bg-card rounded-2xl p-8 shadow-medium">
                <h2 className="font-outfit font-bold text-2xl text-foreground mb-2">
                  Book Free Consultation
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="condition"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Type of Solution Needed
                    </label>
                    <Input
                      id="condition"
                      name="condition"
                      value={formData.condition}
                      onChange={handleChange}
                      placeholder="e.g., Below knee prosthesis, Knee brace, etc."
                      className="h-12"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2"
                    >
                      Additional Information
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us more about your needs or any questions you have..."
                      rows={4}
                      className="resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Request Consultation
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <ScrollReveal delay={100}>
                <div className="grid sm:grid-cols-2 gap-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.title}
                      href={info.action}
                      target={info.title === "Address" ? "_blank" : undefined}
                      rel={info.title === "Address" ? "noopener noreferrer" : undefined}
                      className={`bg-card p-6 rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 ${
                        info.action ? "cursor-pointer" : ""
                      }`}
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
                        {info.icon}
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">
                        {info.title}
                      </h3>
                      {info.details.map((detail, index) => (
                        <p key={index} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </a>
                  ))}
                </div>
              </ScrollReveal>

              {/* WhatsApp CTA */}
              <ScrollReveal delay={200}>
                <a
                  href="https://wa.me/919717661811?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20prosthetic%20solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-[hsl(142,70%,45%)] text-primary-foreground p-6 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary-foreground/20 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Chat on WhatsApp</h3>
                    <p className="text-primary-foreground/80">
                      Quick responses • Available Mon-Sat
                    </p>
                  </div>
                </a>
              </ScrollReveal>

              {/* Map */}
              <ScrollReveal delay={300}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft h-64">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0254736454074!2d72.8258!3d19.0596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzM0LjYiTiA3MsKwNDknMzMuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MobilityFirst Location"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
