import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Trainers from "@/components/Trainers";
import ProteinShop from "@/components/ProteinShop";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <ProteinShop />
      <Trainers />
      <Footer />
    </div>
  );
};

export default Index;
