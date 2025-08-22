import { Button } from "@/components/ui/button";
import { Clock, ShoppingCart, Users, TrendingUp } from "lucide-react";
import heroImage from "@/assets/fitness-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-dark/90 via-purple-dark/70 to-transparent"></div>
      </div>
      
      <div className="relative z-10 container px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-purple via-electric-blue to-hot-pink bg-clip-text text-transparent leading-tight">
            Level Up Your
            <br />
            Fitness Journey
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Track your progress, book trainers, shop supplements, and connect with gym partners - all in one powerful app
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              Start Your Journey
            </Button>
            <Button variant="neon" size="lg" className="text-lg px-8 py-4">
              Explore Features
            </Button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="bg-card/20 backdrop-blur rounded-lg p-4 mb-2">
                <Clock className="h-8 w-8 text-neon-purple mx-auto" />
              </div>
              <p className="text-sm font-medium">Time Tracking</p>
            </div>
            <div className="text-center">
              <div className="bg-card/20 backdrop-blur rounded-lg p-4 mb-2">
                <ShoppingCart className="h-8 w-8 text-electric-blue mx-auto" />
              </div>
              <p className="text-sm font-medium">Protein Shop</p>
            </div>
            <div className="text-center">
              <div className="bg-card/20 backdrop-blur rounded-lg p-4 mb-2">
                <Users className="h-8 w-8 text-hot-pink mx-auto" />
              </div>
              <p className="text-sm font-medium">Find Partners</p>
            </div>
            <div className="text-center">
              <div className="bg-card/20 backdrop-blur rounded-lg p-4 mb-2">
                <TrendingUp className="h-8 w-8 text-purple-secondary mx-auto" />
              </div>
              <p className="text-sm font-medium">Track Progress</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;