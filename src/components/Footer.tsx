import { Instagram, Twitter, Facebook, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-dark via-card to-purple-dark border-t border-border/50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-primary to-hot-pink bg-clip-text text-transparent mb-4">
              FitFam Forge
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              The ultimate fitness companion for tracking progress, connecting with trainers, and achieving your goals with a supportive community.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hover:text-purple-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-electric-blue">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-hot-pink">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-neon-purple">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-purple-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#dashboard" className="text-muted-foreground hover:text-foreground transition-colors">Dashboard</a></li>
              <li><a href="#shop" className="text-muted-foreground hover:text-foreground transition-colors">Protein Shop</a></li>
              <li><a href="#trainers" className="text-muted-foreground hover:text-foreground transition-colors">Trainers</a></li>
              <li><a href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">Find Partners</a></li>
              <li><a href="#progress" className="text-muted-foreground hover:text-foreground transition-colors">Progress</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold text-purple-primary mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#help" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 FitFam Forge. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Made with 💜 for the fitness community
          </p>
        </div>
      </div>
      
      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="hero" 
          size="icon" 
          className="h-14 w-14 rounded-full shadow-intense hover:shadow-intense animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;