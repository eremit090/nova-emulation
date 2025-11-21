import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass border-b border-primary/20 backdrop-blur-xl" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group" aria-label="PS2 Emulator Home">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110 group-hover:rotate-3">
              PS2
            </div>
            <span className="text-xl font-bold text-glow">Emulator</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('games')} 
              className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
            >
              Games
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('download')} 
              className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
            >
              Download
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('support')} 
              className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
            >
              Support
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </button>
          </div>
          
          <Button 
            size="icon" 
            variant="ghost" 
            className="md:hidden hover:bg-primary/10" 
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
