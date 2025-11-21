import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8 animate-slide-up">
        <h1 className="text-6xl md:text-8xl font-bold text-glow">
          PS2 <span className="text-primary">Emulator</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
          Experience the legendary PlayStation 2 library with cutting-edge emulation technology
        </p>
        
        <div className="pt-4">
          <Button 
            size="lg"
            className="text-xl px-12 py-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl glow-blue animate-glow-pulse transition-all duration-300 hover:scale-105 shadow-2xl"
          >
            <Download className="w-8 h-8 mr-3" />
            Download PS2 Emulator
          </Button>
        </div>
        
        <div className="pt-8 flex justify-center gap-12 text-sm text-muted-foreground">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">5000+</span>
            <span>Games Available</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">60 FPS</span>
            <span>Smooth Performance</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold text-primary">4K</span>
            <span>HD Upscaling</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
