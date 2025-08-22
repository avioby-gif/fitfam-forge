import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, ShoppingCart, Users, TrendingUp, Dumbbell, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Gym Time Tracking",
      description: "Automatically track your time in the gym and monitor your workout duration for better consistency.",
      color: "text-neon-purple"
    },
    {
      icon: ShoppingCart,
      title: "Protein Shake Shop",
      description: "Order premium protein shakes and supplements directly through the app for post-workout nutrition.",
      color: "text-electric-blue"
    },
    {
      icon: Dumbbell,
      title: "Book Personal Trainers",
      description: "Connect with certified trainers and book sessions that fit your schedule and fitness goals.",
      color: "text-hot-pink"
    },
    {
      icon: TrendingUp,
      title: "Progress Dashboard",
      description: "Visualize your fitness journey with detailed analytics and share progress with your trainers.",
      color: "text-purple-secondary"
    },
    {
      icon: Users,
      title: "Find Gym Partners",
      description: "Match with like-minded fitness enthusiasts and schedule workout sessions together.",
      color: "text-neon-purple"
    },
    {
      icon: Heart,
      title: "Health Monitoring",
      description: "Track your health metrics and get insights to optimize your fitness routine.",
      color: "text-electric-blue"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-primary to-hot-pink bg-clip-text text-transparent">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive fitness tools designed for the modern gym enthusiast
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-purple-primary/50 transition-all duration-300 hover:shadow-card group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-gradient-to-br from-purple-primary/20 to-hot-pink/20">
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold group-hover:text-purple-primary transition-colors">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                {feature.description}
              </p>
              <Button variant="ghost" className="text-purple-primary hover:text-hot-pink transition-colors">
                Learn More →
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;