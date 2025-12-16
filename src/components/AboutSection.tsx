import { Heart, Leaf, Users } from "lucide-react";
import farmHarvest from "@/assets/farm-harvest.jpg";

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img
                src={farmHarvest}
                alt="Farmers working in the vegetable fields"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-hover max-w-[280px] hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-foreground">100%</p>
                  <p className="text-muted-foreground text-sm">Sustainable Farming</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              About GreenHarvests
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Journey to{" "}
              <span className="text-primary">Fresh Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              What started as a passion project one year ago has blossomed into a 
              trusted name in fresh produce. At GreenHarvests, we believe that 
              vegetables should be more than just food — they should be a 
              celebration of nature's finest gifts.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Every vegetable we grow is nurtured with care, harvested at peak 
              ripeness, and delivered with the promise of unmatched freshness. 
              Our sustainable farming practices ensure that we give back to the 
              earth as much as we take.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Customer Satisfaction</h3>
                  <p className="text-muted-foreground text-sm">
                    Your happiness is our harvest. Every delivery is a promise kept.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Sustainable Practices</h3>
                  <p className="text-muted-foreground text-sm">
                    We farm responsibly, preserving the land for future generations.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-earth/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-earth" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Community Focused</h3>
                  <p className="text-muted-foreground text-sm">
                    Supporting local families and building lasting relationships.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
