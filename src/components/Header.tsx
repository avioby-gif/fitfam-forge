import { Button } from "@/components/ui/button";
import { Menu, Bell, User } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <img src={logo} alt="FitFam Forge" className="h-10 w-10" />
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-primary to-hot-pink bg-clip-text text-transparent">
            FitFam Forge
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <a href="#dashboard" className="text-foreground hover:text-purple-primary transition-colors">
            Dashboard
          </a>
          <a href="#shop" className="text-foreground hover:text-purple-primary transition-colors">
            Shop
          </a>
          <a href="#trainers" className="text-foreground hover:text-purple-primary transition-colors">
            Trainers
          </a>
          <a href="#partners" className="text-foreground hover:text-purple-primary transition-colors">
            Partners
          </a>
        </nav>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-hot-pink rounded-full"></span>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;