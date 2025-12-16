import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 nature-gradient">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Ready to Get Started?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partner with Us for{" "}
            <span className="text-primary">Fresh Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Whether you're a restaurant, retailer, or health-conscious consumer, 
            we're ready to deliver the freshest vegetables right to your doorstep. 
            Let's grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="xl">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="xl">
              View Our Catalog
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
