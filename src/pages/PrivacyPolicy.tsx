import { Leaf, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-6">
        <div className="container flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="p-2 bg-background/10 rounded-full">
              <Leaf className="h-5 w-5" />
            </div>
            <span className="font-display text-2xl font-bold">
              Green<span className="text-accent">Harvests</span>
            </span>
          </Link>
          <Link to="/">
            <Button variant="heroOutline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container py-12 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-8">
            Privacy Policy Summary
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              GREENHARVEST respects your privacy and is committed to protecting your personal information. We collect information you provide directly, as well as limited technical data (such as cookies and IP addresses), to deliver our agri-business services, process transactions, communicate updates, and improve our website and operations.
            </p>
            
            <p className="text-lg leading-relaxed">
              We do not sell or rent personal information. Information may be shared only with trusted service providers, logistics partners, payment processors, or government authorities when legally required.
            </p>
            
            <p className="text-lg leading-relaxed">
              We use reasonable security measures to safeguard your data and retain it only as long as necessary for business, legal, or regulatory purposes.
            </p>
            
            <p className="text-lg leading-relaxed">
              Depending on applicable U.S. laws, including the California Consumer Privacy Act (CCPA), you may have rights to access, correct, or request deletion of your personal information.
            </p>
            
            <p className="text-lg leading-relaxed font-semibold text-foreground">
              By using our website or services, you agree to this Privacy Policy.
            </p>
            
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact</h2>
              <p className="text-lg">
                GREENHARVEST – <a href="mailto:hello@greenharvests.com" className="text-primary hover:text-accent transition-colors underline">hello@greenharvests.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container text-center">
          <p className="text-background/50 text-sm">
            © 2024 GreenHarvests. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
