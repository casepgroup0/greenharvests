import tomatoesImg from "@/assets/tomatoes.jpg";
import peppersImg from "@/assets/peppers.jpg";
import onionsImg from "@/assets/onions.jpg";
import leafyGreensImg from "@/assets/leafy-greens.jpg";
import carrotsImg from "@/assets/carrots.jpg";
import cucumbersImg from "@/assets/cucumbers.jpg";

const vegetables = [
  {
    name: "Fresh Tomatoes",
    description: "Vine-ripened, juicy, and perfect for any dish",
    image: tomatoesImg,
  },
  {
    name: "Bell Peppers",
    description: "Colorful and crunchy, bursting with flavor",
    image: peppersImg,
  },
  {
    name: "Premium Onions",
    description: "The foundation of every great recipe",
    image: onionsImg,
  },
  {
    name: "Leafy Greens",
    description: "Fresh spinach, lettuce, and kale daily",
    image: leafyGreensImg,
  },
  {
    name: "Organic Carrots",
    description: "Sweet and tender, straight from the soil",
    image: carrotsImg,
  },
  {
    name: "Crisp Cucumbers",
    description: "Cool, refreshing, and garden-fresh",
    image: cucumbersImg,
  },
];

export function ProduceSection() {
  return (
    <section id="produce" className="py-24 nature-gradient">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Fresh Produce
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Farm-Fresh <span className="text-primary">Vegetables</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From our fields to your kitchen, discover our selection of premium 
            vegetables grown with care and harvested at peak freshness.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vegetables.map((veg, index) => (
            <div
              key={veg.name}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover-lift cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={veg.image}
                  alt={veg.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {veg.name}
                </h3>
                <p className="text-muted-foreground">{veg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
