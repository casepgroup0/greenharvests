import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12 md:py-20">
        <Link to="/">
          <Button variant="ghost" className="mb-8 text-primary hover:text-primary/80">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms & Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p>
              By accessing, browsing, or using the website, platforms, products, or services provided by GREENHARVESTS, a United States–based agri-business organization, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and Conditions. GREENHARVESTS provides agricultural products, agri-business services, advisory support, logistics coordination, digital platforms, and related solutions intended to support farmers, suppliers, partners, and customers, and all such offerings are subject to availability and may be modified, updated, suspended, or discontinued at any time without prior notice.
            </p>
            
            <p>
              You agree to use all GREENHARVESTS services only for lawful purposes and in full compliance with applicable federal, state, and local laws, regulations, and industry standards, and you agree not to misuse, interfere with, or attempt to gain unauthorized access to any systems, data, or networks operated by GREENHARVESTS.
            </p>
            
            <p>
              All content made available through the GREENHARVESTS website or platforms, including but not limited to text, images, graphics, logos, trademarks, videos, software, and design elements, is the exclusive property of GREENHARVESTS or its licensors and is protected under United States intellectual property laws, and no portion of such content may be copied, reproduced, republished, transmitted, or distributed without prior written authorization from GREENHARVESTS.
            </p>
            
            <p>
              Any orders, service requests, or transactions submitted through GREENHARVESTS are subject to review and acceptance, and GREENHARVESTS reserves the right to refuse, cancel, or limit transactions at its sole discretion, including in cases of suspected fraud, pricing errors, supply constraints, or violations of these Terms. Payments must be made in accordance with agreed pricing and payment terms, and failure to meet payment obligations may result in service suspension or termination.
            </p>
            
            <p>
              All services and information provided by GREENHARVESTS are offered on an "as is" and "as available" basis, without warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a particular purpose, accuracy, or uninterrupted availability, to the fullest extent permitted by law.
            </p>
            
            <p>
              GREENHARVESTS shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or related to your use of or inability to use its website, services, or products, even if advised of the possibility of such damages.
            </p>
            
            <p>
              The GREENHARVESTS website may contain links to third-party websites or services provided solely for convenience, and GREENHARVESTS assumes no responsibility for the content, accuracy, or practices of such third parties.
            </p>
            
            <p>
              GREENHARVESTS reserves the right to suspend, restrict, or terminate access to its services or platforms at any time, with or without notice, for conduct that violates these Terms or applicable laws.
            </p>
            
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the United States and the state in which GREENHARVESTS is registered, without regard to conflict-of-law principles, and continued use of GREENHARVESTS services following any updates constitutes acceptance of the revised Terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
