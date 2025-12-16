import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-farm.jpg";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Lush organic vegetable farm at golden hour"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Trusted by 500+ Happy Customers
          </span>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 animate-fade-up stagger-1">
            Fresh Vegetables,{" "}
            <span className="text-accent">Grown with Care</span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl animate-fade-up stagger-2">
            From our fields to your table — premium, sustainably grown vegetables 
            that deliver unmatched freshness, quality, and taste. One year of 
            excellence, a lifetime of trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up stagger-3">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => document.getElementById('produce')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Produce
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-primary-foreground/20 animate-fade-up stagger-4">
            <div>
              <p className="font-display text-4xl font-bold text-accent">1+</p>
              <p className="text-primary-foreground/80 text-sm">Year of Excellence</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-accent">500+</p>
              <p className="text-primary-foreground/80 text-sm">Happy Customers</p>
            </div>
            <div>
              <p className="font-display text-4xl font-bold text-accent">100%</p>
              <p className="text-primary-foreground/80 text-sm">Fresh & Organic</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
