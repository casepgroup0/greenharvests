import { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    content: "GreenHarvest has transformed our menu. The freshness of their vegetables is unmatched, and our customers can taste the difference. Truly exceptional quality!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Health Food Store Manager",
    content: "As someone who's picky about produce quality, I can confidently say GreenHarvest exceeds expectations. Their commitment to sustainable farming shows in every delivery.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Home Chef",
    content: "Finally, vegetables that taste like they should! The tomatoes are so flavorful, and the leafy greens stay fresh for days. GreenHarvest is now my only choice.",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "Wholesale Buyer",
    content: "Reliable, consistent, and always fresh. GreenHarvest has been our trusted supplier for months. Their customer service is just as good as their produce.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-primary">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            What Our <span className="text-accent">Customers Say</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            Don't just take our word for it — hear from the people who trust 
            GreenHarvest for their fresh produce needs.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-3xl p-8 md:p-12 shadow-card">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-primary/10" />
            
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].content}"
              </p>

              {/* Author */}
              <div>
                <p className="font-display text-xl font-bold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentIndex ? "w-8 bg-primary" : "bg-muted-foreground/30"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
