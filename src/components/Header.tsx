import { useState, useEffect } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Produce", href: "#produce" },
  { name: "Why Us", href: "#why-us" },
  { name: "Gallery", href: "#gallery" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-primary' : 'bg-primary-foreground/20'}`}>
            <Leaf className={`h-6 w-6 transition-colors ${isScrolled ? 'text-primary-foreground' : 'text-primary-foreground'}`} />
          </div>
          <span className={`font-display text-2xl font-bold transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
            Green<span className="text-accent">Harvests</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-accent ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant={isScrolled ? "default" : "hero"} 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-card animate-fade-up">
          <nav className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-medium text-foreground hover:text-primary py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="default" 
              size="lg" 
              className="mt-2"
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
