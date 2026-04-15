import { useState } from "react";
import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function Footer() {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only - just clear the input
    setEmail("");
    alert("Thank you for subscribing!");
  };

  return (
    <footer id="contact" className="bg-foreground text-background pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-primary rounded-full">
                <Leaf className="h-5 w-5 text-primary-foreground" />
              </div>
            <span className="font-display text-2xl font-bold text-background">
              Green<span className="text-accent">Harvests</span>
            </span>
            </a>
            <p className="text-background/70 mb-6">
              Fresh vegetables grown with care, delivered with love. Your trusted 
              partner in healthy living.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold text-background mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-background/70 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#about" className="text-background/70 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#produce" className="text-background/70 hover:text-accent transition-colors">Our Produce</a></li>
              <li><a href="#why-us" className="text-background/70 hover:text-accent transition-colors">Why Choose Us</a></li>
              <li><a href="#gallery" className="text-background/70 hover:text-accent transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-lg font-bold text-background mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-background/70">98 Farm Road, Green Valley, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-background/70">+1 (523)-774-2161</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-background/70">hello@greenharvests.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-bold text-background mb-6">Newsletter</h3>
            <p className="text-background/70 mb-4">
              Subscribe to get updates on fresh arrivals and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg bg-background/10 border border-background/20 text-background placeholder:text-background/50 focus:outline-none focus:border-accent"
                required
              />
              <Button type="submit" variant="hero" size="icon" className="h-12 w-12">
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2026 GreenHarvests. All rights reserved.
          </p>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-6 text-sm">
              <Link to="/privacy-policy" className="text-background/50 hover:text-accent transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="text-background/50 hover:text-accent transition-colors">Terms & Conditions</Link>
            </div>
            <p className="text-background/40 text-xs">Built by: CASEP GROUP</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
