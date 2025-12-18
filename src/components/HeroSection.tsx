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
      <div className="container relative z-10 pt-20 lg:pt-32">
        <div className="max-w-4xl lg:max-w-5xl">
          <span className="inline-flex items-center gap-2 bg-accent/90 text-accent-foreground px-4 py-2 lg:px-8 lg:py-4 xl:px-10 xl:py-5 rounded-full text-sm lg:text-lg xl:text-xl font-semibold mb-6 lg:mb-8 animate-fade-up">
            <span className="w-2 h-2 lg:w-3 lg:h-3 xl:w-4 xl:h-4 bg-primary rounded-full animate-pulse" />
            Trusted by 500+ Happy Customers
          </span>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary-foreground mb-6 lg:mb-8 animate-fade-up stagger-1">
            Fresh Vegetables,{" "}
            <span className="text-accent">Grown with Care</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-primary-foreground/90 mb-8 lg:mb-12 max-w-2xl lg:max-w-3xl xl:max-w-4xl animate-fade-up stagger-2">
            From our fields to your table — premium, sustainably grown vegetables 
            that deliver unmatched freshness, quality, and taste. One year of 
            excellence, a lifetime of trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 animate-fade-up stagger-3">
            <Button 
              variant="hero" 
              size="xl"
              className="lg:text-xl lg:px-12 lg:py-8 xl:text-2xl xl:px-14 xl:py-9"
              onClick={() => document.getElementById('produce')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Produce
              <ArrowRight className="ml-2 h-5 w-5 lg:h-7 lg:w-7 xl:h-8 xl:w-8" />
            </Button>
            <Button 
              variant="heroOutline" 
              size="xl"
              className="lg:text-xl lg:px-12 lg:py-8 xl:text-2xl xl:px-14 xl:py-9"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-5 w-5 lg:h-7 lg:w-7 xl:h-8 xl:w-8" />
              Watch Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 lg:gap-20 xl:gap-28 mt-16 lg:mt-24 pt-8 lg:pt-12 border-t border-primary-foreground/20 animate-fade-up stagger-4">
            <div>
              <p className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-accent">1+</p>
              <p className="text-primary-foreground/80 text-sm md:text-base lg:text-lg xl:text-xl">Year of Excellence</p>
            </div>
            <div>
              <p className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-accent">500+</p>
              <p className="text-primary-foreground/80 text-sm md:text-base lg:text-lg xl:text-xl">Happy Customers</p>
            </div>
            <div>
              <p className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-accent">100%</p>
              <p className="text-primary-foreground/80 text-sm md:text-base lg:text-lg xl:text-xl">Fresh & Organic</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
