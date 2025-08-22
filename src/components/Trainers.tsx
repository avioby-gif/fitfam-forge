import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Calendar, MapPin } from "lucide-react";

const Trainers = () => {
  const trainers = [
    {
      name: "Alex Rodriguez",
      specialty: "Strength Training",
      rating: 4.9,
      experience: "8 years",
      location: "Main Floor",
      price: "$75/session",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      certifications: ["NASM-CPT", "CSCS"]
    },
    {
      name: "Maya Chen",
      specialty: "Yoga & Flexibility",
      rating: 5.0,
      experience: "6 years",
      location: "Studio 2",
      price: "$60/session",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      certifications: ["RYT-500", "ACSM"]
    },
    {
      name: "Marcus Johnson",
      specialty: "HIIT & Cardio",
      rating: 4.8,
      experience: "5 years",
      location: "Cardio Zone",
      price: "$65/session",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      certifications: ["ACSM-CPT", "HIIT Specialist"]
    },
    {
      name: "Sophie Williams",
      specialty: "Nutrition & Wellness",
      rating: 4.9,
      experience: "10 years",
      location: "Consultation Room",
      price: "$80/session",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400&h=400&fit=crop",
      certifications: ["RD", "NASM-CPT"]
    }
  ];

  return (
    <section id="trainers" className="py-20 px-4 bg-gradient-to-b from-background to-purple-dark/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-primary to-hot-pink bg-clip-text text-transparent">
            Expert Trainers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Work with certified professionals who will guide you to achieve your fitness goals
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-purple-primary/50 transition-all duration-300 hover:shadow-card group">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{trainer.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{trainer.rating}</span>
                  </div>
                </div>
                
                <Badge variant="secondary" className="mb-3 bg-purple-primary/20 text-purple-primary">
                  {trainer.specialty}
                </Badge>
                
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{trainer.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{trainer.location}</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {trainer.certifications.map((cert, certIndex) => (
                    <Badge key={certIndex} variant="outline" className="text-xs">
                      {cert}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-purple-primary">{trainer.price}</span>
                  <Button variant="premium" size="sm">
                    Book Session
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;