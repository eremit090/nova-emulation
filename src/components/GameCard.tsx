import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Eye, Star } from "lucide-react";
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
    <Card className="glass group card-3d overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-500">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Actions on Hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Link to={`/game/${id}`}>
            <Button 
              size="lg"
              variant="outline"
              className="glass glow-blue"
            >
              <Eye className="w-5 h-5 mr-2" />
              Details
            </Button>
          </Link>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 glow-blue"
          >
            <Download className="w-5 h-5 mr-2" />
            Download
          </Button>
        </div>
      </div>
      
      <div className="p-4 space-y-3">
        <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i}
                className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-muted'}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground uppercase tracking-wider">
            {category}
          </span>
        </div>
      </div>
    </Card>
  );
};

export default GameCard;
