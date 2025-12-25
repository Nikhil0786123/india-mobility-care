import { Link } from "react-router-dom";
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

  const testimonials = [
    {
      name: "Anita Desai",
      age: "45 years",
      location: "Mumbai",
      condition: "Below Knee Prosthesis",
      story:
        "After losing my leg in an accident, I thought my life was over. The team at MobilityFirst not only gave me a prosthetic leg but also gave me hope. Within months, I was walking again, attending my daughter's wedding on my own feet. The care and support I received was beyond anything I expected.",
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
        "Losing my arm was devastating, especially as a young professional. MobilityFirst provided me with a functional prosthetic that allows me to work, drive, and live independently. Their follow-up care has been exceptional—they're always there when I need adjustments.",
      highlight: "Regained independence at work",
    },
    {
      name: "Rajesh Sharma",
      age: "10 years",
      location: "Nagpur",
      condition: "Pediatric Prosthesis",
      story:
        "Our son was born with a limb difference. The pediatric team at MobilityFirst created a colorful prosthetic that Rajesh loves. He proudly shows it to his friends and plays cricket with other children. The adjustable design means we don't worry about outgrowing it too quickly.",
      highlight: "Active child enjoying sports",
      parent: "- Shared by his parents",
    },
  ];

  return (
    <div className="min-h-screen bg-background font-outfit">
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
              Patient <span className="text-primary">Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: "100ms" }}>
              Real stories of transformation and hope. These are the journeys of
              patients who found new mobility and independence with our solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
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

      {/* Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <div className="text-center mb-12">
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
                <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 h-full flex flex-col">
                  <div className="mb-6">
                    <div className="inline-block bg-secondary/20 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {testimonial.highlight}
                    </div>
                    <p className="text-foreground leading-relaxed italic">
                      "{testimonial.story}"
                    </p>
                    {testimonial.parent && (
                      <p className="text-muted-foreground text-sm mt-2">
                        {testimonial.parent}
                      </p>
                    )}
                  </div>
                  <div className="mt-auto pt-6 border-t border-border">
                    <h4 className="font-semibold text-foreground">
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
      <section className="section-padding border-t border-border">
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
