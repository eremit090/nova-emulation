import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <header className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        aria-hidden="true"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" aria-hidden="true" />
      
      {/* Animated Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-float" aria-hidden="true" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-float" style={{ animationDelay: '3s' }} aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto space-y-6 sm:space-y-8 animate-slide-up">
        <h1 className="text-6xl sm:text-6xl md:text-8xl font-bold text-glow leading-tight">
          PS2 <span className="text-primary">Emulator</span>
        </h1>
        
        <p className="text-xl sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Experience the legendary PlayStation 2 library with cutting-edge emulation technology
        </p>
        
        <div className="pt-4 sm:pt-6">
          <Button 
            size="lg"
            className="text-xl sm:text-2xl px-10 sm:px-12 py-8 sm:py-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-xl glow-blue animate-glow-pulse transition-all duration-300 hover:scale-105 shadow-2xl group w-full sm:w-auto"
            aria-label="Download PS2 Emulator for free"
          >
            <Download className="w-7 h-7 sm:w-8 sm:h-8 mr-3 group-hover:animate-bounce" />
            Download PS2 Emulator
          </Button>
        </div>
        
        <div className="pt-6 sm:pt-8 flex flex-wrap justify-center gap-8 sm:gap-12">
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <span className="text-4xl sm:text-3xl font-bold text-primary">5000+</span>
            <span className="text-muted-foreground text-base sm:text-sm">Games Available</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="text-4xl sm:text-3xl font-bold text-primary">60 FPS</span>
            <span className="text-muted-foreground text-base sm:text-sm">Smooth Performance</span>
          </div>
          <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <span className="text-4xl sm:text-3xl font-bold text-primary">4K</span>
            <span className="text-muted-foreground text-base sm:text-sm">HD Upscaling</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
