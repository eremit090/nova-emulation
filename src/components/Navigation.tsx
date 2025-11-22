import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Home, Gamepad2, Download, HelpCircle } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const menuItems = [
    { id: 'games', label: 'Games', icon: Gamepad2 },
    { id: 'features', label: 'Features', icon: Home },
    { id: 'download', label: 'Download', icon: Download },
    { id: 'support', label: 'Support', icon: HelpCircle },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-primary/20 backdrop-blur-xl" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group touch-manipulation" aria-label="PS2 Emulator Home">
            <div className="w-12 h-12 sm:w-10 sm:h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110 group-hover:rotate-3 glow-blue">
              PS2
            </div>
            <span className="text-xl sm:text-xl font-bold text-glow">Emulator</span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
            ))}
          </div>
          
          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button 
                size="icon" 
                variant="ghost" 
                className="md:hidden hover:bg-primary/20 w-12 h-12 touch-manipulation glow-blue" 
                aria-label="Open menu"
              >
                <Menu className="w-7 h-7 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[85vw] sm:w-[350px] glass border-primary/20 p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-6 border-b border-primary/20">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-lg glow-blue">
                      PS2
                    </div>
                    <span className="text-lg font-bold text-glow">Menu</span>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setMobileMenuOpen(false)}
                    className="hover:bg-primary/20 touch-manipulation"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-primary" />
                  </Button>
                </div>

                {/* Mobile Menu Items */}
                <div className="flex-1 px-4 py-6 space-y-3">
                  {menuItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg bg-card/50 hover:bg-primary/10 border border-primary/20 transition-all touch-manipulation group hover:shadow-lg hover:shadow-primary/20"
                      >
                        <Icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                        <span className="text-base font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Mobile Menu Footer */}
                <div className="p-4 border-t border-primary/20">
                  <Button 
                    onClick={() => scrollToSection('download')}
                    className="w-full h-12 text-base font-bold bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-all touch-manipulation glow-blue"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
