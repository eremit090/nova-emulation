import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Star, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface GameCardProps {
  id: string;
  title: string;
  cover: string;
  rating: number;
  category: string;
}

const GameCard = ({ id, title, cover, rating, category }: GameCardProps) => {
  return (
    <article className="group">
      <Card className="glass overflow-hidden group-hover:scale-[1.02] transition-all duration-500 card-3d border-primary/20 hover:border-primary/40 hover:glow-blue">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img 
            src={cover} 
            alt={`${title} - PS2 game cover`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Hover overlay with quick actions */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg glow-blue transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
              aria-label={`Download ${title}`}
            >
              <Download className="w-5 h-5" />
            </Button>
            <Link to={`/game/${id}`}>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 bg-background/80 backdrop-blur-sm hover:bg-primary/10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75"
                aria-label={`View ${title} details`}
              >
                <Info className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-primary font-semibold uppercase tracking-wider">{category}</span>
            <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-3 h-3 transition-colors ${i < rating ? 'fill-primary text-primary' : 'text-muted'}`}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
          
          <h3 className="font-bold text-foreground line-clamp-2 min-h-[3rem] text-base leading-tight group-hover:text-primary transition-colors">
            {title}
          </h3>
          
          <div className="flex gap-2 pt-2">
            <Button 
              size="sm" 
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/50"
              aria-label={`Download ${title}`}
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Link to={`/game/${id}`} className="flex-1">
              <Button 
                size="sm" 
                variant="outline"
                className="w-full border-primary/30 hover:bg-primary/10 hover:border-primary/50 transition-all"
                aria-label={`View ${title} details`}
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </article>
  );
};

export default GameCard;
