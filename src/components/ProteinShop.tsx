import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";

const ProteinShop = () => {
  const products = [
    {
      id: 1,
      name: "Power Whey Protein",
      flavor: "Chocolate Deluxe",
      price: 45.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400&h=400&fit=crop",
      tags: ["Best Seller", "25g Protein"]
    },
    {
      id: 2,
      name: "Pre-Workout Blast",
      flavor: "Berry Explosion",
      price: 32.99,
      originalPrice: 39.99,
      rating: 4.9,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
      tags: ["Energy Boost", "Natural"]
    },
    {
      id: 3,
      name: "Recovery Smoothie",
      flavor: "Tropical Mango",
      price: 28.99,
      originalPrice: 34.99,
      rating: 4.7,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      tags: ["Post-Workout", "Electrolytes"]
    },
    {
      id: 4,
      name: "Plant-Based Power",
      flavor: "Vanilla Dream",
      price: 41.99,
      originalPrice: 49.99,
      rating: 4.6,
      reviews: 98,
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop",
      tags: ["Vegan", "Organic"]
    }
  ];

  return (
    <section id="shop" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-electric-blue to-purple-primary bg-clip-text text-transparent">
            Protein Shop
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fuel your workouts with premium supplements delivered right to the gym
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-electric-blue/50 transition-all duration-300 hover:shadow-card group">
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {product.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-electric-blue/20 text-electric-blue text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-1 group-hover:text-electric-blue transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{product.flavor}</p>
                
                <div className="flex items-center gap-1 mb-3">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-electric-blue">${product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                </div>
                
                <Button variant="premium" className="w-full">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="neon" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProteinShop;