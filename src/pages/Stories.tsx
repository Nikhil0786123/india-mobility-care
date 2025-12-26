import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const Stories = () => {
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

  const transformations = [
    {
      name: "Priya Sharma",
      age: "32 years",
      location: "Mumbai",
      condition: "Below Knee Amputation",
      challenge: "Lost her leg in a road accident",
      solution: "Custom below-knee prosthesis with energy-returning foot",
      result: "Walking independently within 3 months",
      timeline: "3 months",
    },
    {
      name: "Ramesh Kumar",
      age: "58 years",
      location: "Pune",
      condition: "Above Knee Amputation",
      challenge: "Diabetic complication led to amputation",
      solution: "Microprocessor-controlled knee prosthesis",
      result: "Returned to farming work and daily activities",
      timeline: "4 months",
    },
    {
      name: "Arun Patel",
      age: "45 years",
      location: "Delhi",
      condition: "Upper Limb Prosthesis",
      challenge: "Industrial accident caused arm loss",
      solution: "Functional myoelectric prosthetic arm",
      result: "Back to independent living and light work",
      timeline: "5 months",
    },
  ];

  const testimonials = [
    {
      name: "Anita Desai",
      age: "45 years",
      location: "Mumbai",
      condition: "Below Knee Prosthesis",
      story:
        "After losing my leg in an accident, I thought my life was over. The team at P&O Robotics not only gave me a prosthetic leg but also gave me hope. Within months, I was walking again, attending my daughter's wedding on my own feet. The care and support I received was beyond anything I expected.",
      highlight: "Back to daily activities within 4 months",
    },
    {
      name: "Suresh Patil",
      age: "52 years",
      location: "Pune",
      condition: "Above Knee Prosthesis",
      story:
        "As a farmer, I was worried I would never be able to work in my fields again. The team understood my needs and designed a prosthetic that works perfectly for my lifestyle. Today, I walk through my fields with confidence. They truly understood what mobility means to me.",
      highlight: "Returned to farming work",
    },
    {
      name: "Meera Singh",
      age: "28 years",
      location: "Delhi",
      condition: "Upper Limb Prosthesis",
      story:
        "Losing my arm was devastating, especially as a young professional. P&O Robotics provided me with a functional prosthetic that allows me to work, drive, and live independently. Their follow-up care has been exceptional—they're always there when I need adjustments.",
      highlight: "Regained independence at work",
    },
    {
      name: "Rajesh Sharma",
      age: "10 years",
      location: "Nagpur",
      condition: "Pediatric Prosthesis",
      story:
        "Our son was born with a limb difference. The pediatric team at P&O Robotics created a colorful prosthetic that Rajesh loves. He proudly shows it to his friends and plays cricket with other children. The adjustable design means we don't worry about outgrowing it too quickly.",
      highlight: "Active child enjoying sports",
      parent: "- Shared by his parents",
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
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                Real Stories of Hope
              </div>
              <h1 className="font-outfit font-bold text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Patient <span className="text-primary">Stories</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Real stories of transformation and hope. These are the journeys of
                patients who found new mobility and independence with our solutions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Real Patients. Real Transformation.
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Drag the slider to see the before and after transformation.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <BeforeAfterSlider slides={beforeAfterSlides} />
          </ScrollReveal>
        </div>
      </section>

      {/* Transformation Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Transformation Journey
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                See how our patients went from challenge to triumph.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {transformations.map((item, index) => (
              <ScrollReveal key={item.name} delay={index * 100}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 h-full border border-border/50">
                  <div className="bg-primary/10 p-6">
                    <h3 className="font-outfit font-semibold text-xl text-foreground mb-1">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.age} • {item.location}
                    </p>
                    <div className="mt-3 inline-block bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {item.condition}
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Challenge</div>
                      <p className="text-foreground">{item.challenge}</p>
                    </div>
                    <div>
                      <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">Solution</div>
                      <p className="text-foreground">{item.solution}</p>
                    </div>
                    <div className="pt-4 border-t border-border">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-medium text-secondary uppercase tracking-wide mb-1">Result</div>
                          <p className="text-foreground font-medium">{item.result}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{item.timeline}</div>
                          <div className="text-xs text-muted-foreground">Recovery</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block bg-secondary/20 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
                In Their Words
              </div>
              <h2 className="font-outfit font-bold text-3xl md:text-4xl text-foreground mb-4">
                Stories of Hope
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Read about the journeys of our patients and how they regained their
                mobility and independence.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={testimonial.name} delay={index * 100}>
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col relative">
                  <Quote className="w-10 h-10 text-primary/20 absolute top-6 right-6" />
                  <div className="mb-6">
                    <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {testimonial.highlight}
                    </div>
                    <p className="text-foreground leading-relaxed">
                      "{testimonial.story}"
                    </p>
                    {testimonial.parent && (
                      <p className="text-muted-foreground text-sm mt-3 italic">
                        {testimonial.parent}
                      </p>
                    )}
                  </div>
                  <div className="mt-auto pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.age} • {testimonial.location}
                    </p>
                    <p className="text-primary text-sm font-medium mt-1">
                      {testimonial.condition}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 border-t border-border">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground text-sm">
              <strong>Note:</strong> All patient stories are shared with consent.
              Names may have been changed to protect privacy. Individual results may
              vary based on condition, lifestyle, and other factors.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-outfit font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              Start Your Transformation Journey
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Your story of mobility and independence could be next. Take the first
              step today.
            </p>
            <Button variant="cta" size="xl" asChild>
              <Link to="/contact">Book Your Consultation</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Stories;
