import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 glass mt-16" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-xl">
                PS2
              </div>
              <span className="text-xl font-bold text-glow">Emulator</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The ultimate PlayStation 2 emulator for modern gaming.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#games" className="hover:text-primary transition-colors">Browse Games</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
              <li><a href="#download" className="hover:text-primary transition-colors">Download</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Setup Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">License</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2024 PS2 Emulator. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-primary fill-primary" aria-label="love" /> by the community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
