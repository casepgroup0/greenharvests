import { Truck, Shield, DollarSign, Leaf, Clock, Award } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Farm Fresh",
    description: "Harvested daily from our fields for maximum freshness and nutrition.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Quality produce at fair prices, making healthy eating accessible.",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every vegetable meets our strict quality standards before delivery.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Same-day delivery to ensure your produce arrives garden-fresh.",
  },
  {
    icon: Clock,
    title: "Year-Round Supply",
    description: "Consistent availability of your favorite vegetables all year.",
  },
  {
    icon: Award,
    title: "Trusted by Many",
    description: "Join 500+ satisfied customers who choose GreenHarvest.",
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            The GreenHarvest{" "}
            <span className="text-primary">Difference</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're not just farmers — we're your partners in healthy living. 
            Here's what sets us apart.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
