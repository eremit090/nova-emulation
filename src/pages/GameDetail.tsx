import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { useParams, Link } from "react-router-dom";
import { Download, ArrowLeft, Star, Cpu, HardDrive, MonitorPlay } from "lucide-react";
import gameAction1 from "@/assets/game-action-1.jpg";

const GameDetail = () => {
  const { id } = useParams();

  // Mock data - in real app, fetch based on id
  const game = {
    title: "Cyber Warriors: Neon Strike",
    cover: gameAction1,
    rating: 5,
    category: "Action",
    description: "Immerse yourself in a futuristic world of high-octane combat and cutting-edge technology. Take control of elite cyber warriors as they battle through neon-lit cities in this action-packed adventure. Experience intense combat, stunning visuals, and an unforgettable storyline.",
    screenshots: [gameAction1, gameAction1, gameAction1],
    requirements: {
      cpu: "Intel Core i5 or AMD Ryzen 5",
      ram: "8 GB RAM",
      gpu: "NVIDIA GTX 1060 or AMD RX 580",
      storage: "4 GB available space",
    },
    controls: {
      movement: "WASD / Left Stick",
      attack: "Mouse Click / X Button",
      jump: "Space / A Button",
      special: "E / Y Button",
    },
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <Link to="/">
            <Button variant="outline" className="glass mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Games
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-8 animate-slide-up">
            {/* Left Column - Cover & Actions */}
            <div className="space-y-6">
              <Card className="glass overflow-hidden border-border/50">
                <img 
                  src={game.cover} 
                  alt={game.title}
                  className="w-full aspect-[4/5] object-cover"
                />
              </Card>
              
              <Button 
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl py-8 glow-blue"
              >
                <Download className="w-6 h-6 mr-3" />
                Download Game
              </Button>
            </div>
            
            {/* Right Column - Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-5xl font-bold mb-4 text-glow">{game.title}</h1>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={`w-5 h-5 ${i < game.rating ? 'fill-primary text-primary' : 'text-muted'}`}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-primary font-semibold uppercase tracking-wider">
                    {game.category}
                  </span>
                </div>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  {game.description}
                </p>
              </div>
              
              {/* System Requirements */}
              <Card className="glass p-6 border-border/50">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-primary" />
                  System Requirements
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">CPU:</span>
                    <span className="font-medium">{game.requirements.cpu}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">RAM:</span>
                    <span className="font-medium">{game.requirements.ram}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">GPU:</span>
                    <span className="font-medium">{game.requirements.gpu}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Storage:</span>
                    <span className="font-medium">{game.requirements.storage}</span>
                  </div>
                </div>
              </Card>
              
              {/* Controls */}
              <Card className="glass p-6 border-border/50">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MonitorPlay className="w-6 h-6 text-primary" />
                  Controls
                </h3>
                <div className="space-y-3">
                  {Object.entries(game.controls).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-muted-foreground capitalize">{key}:</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </Card>
              
              {/* Screenshots */}
              <Card className="glass p-6 border-border/50">
                <h3 className="text-2xl font-bold mb-4">Screenshots</h3>
                <div className="grid grid-cols-3 gap-4">
                  {game.screenshots.map((screenshot, index) => (
                    <img 
                      key={index}
                      src={screenshot}
                      alt={`Screenshot ${index + 1}`}
                      className="w-full aspect-video object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetail;
