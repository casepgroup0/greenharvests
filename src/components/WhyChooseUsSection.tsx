import { Leaf, DollarSign, Shield, Truck, Clock, Award, CheckCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
      highlights: ["500+ happy customers", "Restaurant & business partnerships", "5-star average rating", "Dedicated customer support"],
    },
  },
];

const WhyChooseUsSection = () => {
  return (
    <section id="why-us" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Why Choose GreenHarvests?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to bringing you the freshest, highest-quality vegetables 
            while supporting sustainable farming practices.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {features.map((feature) => (
              <AccordionItem 
                key={feature.id} 
                value={feature.id}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="hover:no-underline py-5">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-16 space-y-4">
                    <h4 className="text-xl font-serif font-semibold text-primary">
                      {feature.details.heading}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.details.content}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                      {feature.details.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm text-foreground">
                          <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
