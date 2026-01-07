import { Truck, Shield, DollarSign, Leaf, Clock, Award } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const features = [
  {
    id: "farm-fresh",
    icon: Leaf,
    title: "100% Farm Fresh",
    description: "Harvested daily from our fields for maximum freshness and nutrition.",
    details: {
      heading: "Straight From Our Fields to Your Table",
      content: "At GreenHarvests, we believe in delivering produce at its peak freshness. Our vegetables are harvested early each morning by our experienced farmers who carefully select only the ripest, most vibrant produce. Within hours of picking, your order is packed and prepared for delivery, ensuring you receive vegetables with maximum nutritional value, crisp texture, and authentic farm-fresh flavor that supermarket produce simply cannot match.",
      highlights: ["Harvested within 24 hours of delivery", "No cold storage or preservatives", "Peak nutritional value guaranteed", "Hand-picked by expert farmers"],
    },
  },
  {
    id: "affordable",
    icon: DollarSign,
    title: "Affordable Prices",
    description: "Quality produce at fair prices, making healthy eating accessible.",
    details: {
      heading: "Premium Quality Without the Premium Price",
      content: "We've eliminated the middlemen to bring you exceptional produce at prices that make sense. By selling directly from our farm, we pass the savings on to you while ensuring our farmers receive fair compensation for their hard work. Our transparent pricing model means no hidden fees or surprise charges – what you see is what you pay.",
      highlights: ["Direct farm-to-consumer pricing", "No middleman markups", "Bulk order discounts available", "Seasonal specials and promotions"],
    },
  },
  {
    id: "quality",
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every vegetable meets our strict quality standards before delivery.",
    details: {
      heading: "Our Commitment to Excellence",
      content: "Every piece of produce that leaves our farm undergoes rigorous quality inspection. Our three-tier quality assurance process ensures that only the finest vegetables reach your kitchen. If you're ever unsatisfied with the quality of your order, our no-questions-asked replacement policy has you covered. We stand behind every delivery because your satisfaction is our reputation.",
      highlights: ["Three-tier quality inspection", "100% satisfaction guarantee", "Free replacement policy", "Certified organic practices"],
    },
  },
  {
    id: "delivery",
    icon: Truck,
    title: "Fast Delivery",
    description: "Same-day delivery to ensure your produce arrives garden-fresh.",
    details: {
      heading: "From Our Farm to Your Door in Hours",
      content: "Our dedicated delivery fleet operates seven days a week to bring fresh produce directly to your doorstep. With our optimized logistics network, we guarantee same-day delivery for orders placed before noon. Our temperature-controlled vehicles maintain the perfect environment for your produce throughout transit, ensuring everything arrives as fresh as the moment it was picked.",
      highlights: ["Same-day delivery available", "Real-time order tracking", "Temperature-controlled transport", "Flexible delivery time slots"],
    },
  },
  {
    id: "year-round",
    icon: Clock,
    title: "Year-Round Supply",
    description: "Consistent availability of your favorite vegetables all year.",
    details: {
      heading: "Fresh Produce Every Season",
      content: "Through strategic crop rotation, greenhouse cultivation, and partnerships with certified local farms, we maintain a consistent supply of fresh vegetables throughout the year. Rain or shine, summer or winter, your favorite produce is always available. Our agricultural planning ensures you never have to compromise on variety or freshness, regardless of the season.",
      highlights: ["Greenhouse & open-field cultivation", "Strategic crop rotation", "Partner farm network", "Seasonal variety programs"],
    },
  },
  {
    id: "trusted",
    icon: Award,
    title: "Trusted by Many",
    description: "Join 500+ satisfied customers who choose GreenHarvests.",
    details: {
      heading: "Building Relationships, One Delivery at a Time",
      content: "Our growing community of over 500 satisfied customers speaks to the quality and reliability of our service. From individual families to restaurants and catering businesses, customers choose GreenHarvests for our consistency, quality, and exceptional customer service. We're proud of every relationship we've built and remain committed to exceeding expectations with every order.",
      highlights: ["500+ happy customers", "Restaurants & businesses served", "98% customer retention rate", "Community partnerships"],
    },
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
            The GreenHarvests{" "}
            <span className="text-primary">Difference</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We're not just farmers — we're your partners in healthy living. 
            Here's what sets us apart.
          </p>
        </div>

        {/* Tabbed Features */}
        <Tabs defaultValue="farm-fresh" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="flex items-center gap-2 px-4 py-3 rounded-xl bg-card border border-border data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary hover:border-primary/50 transition-all duration-300"
              >
                <feature.icon className="w-5 h-5" />
                <span className="hidden sm:inline font-medium">{feature.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent
              key={feature.id}
              value={feature.id}
              className="animate-fade-in"
            >
              <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Icon & Title */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <feature.icon className="w-10 h-10 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {feature.details.heading}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {feature.details.content}
                    </p>

                    {/* Highlights */}
                    <div className="grid sm:grid-cols-2 gap-3">
                      {feature.details.highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                          <span className="text-foreground font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
