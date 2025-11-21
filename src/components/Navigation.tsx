import { Link } from "react-router-dom";
import { Gamepad2 } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <Gamepad2 className="w-8 h-8 text-primary group-hover:animate-pulse" />
            <span className="text-2xl font-bold">
              PS2 <span className="text-primary">Emu</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              to="/#games" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Games
            </Link>
            <Link 
              to="/#features" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              Features
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
