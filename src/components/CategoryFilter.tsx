import { Button } from "@/components/ui/button";
import { Gamepad2, Car, Trophy, Compass, Wand2, Swords } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CategoryFilterProps {
  onCategoryClick: (categoryId: string) => void;
}

const CategoryFilter = ({ onCategoryClick }: CategoryFilterProps) => {
  const categories = [
    { id: "action-games", label: "Action", icon: Gamepad2, color: "text-primary" },
    { id: "racing-games", label: "Racing", icon: Car, color: "text-accent" },
    { id: "sports-games", label: "Sports", icon: Trophy, color: "text-secondary" },
    { id: "adventure-games", label: "Adventure", icon: Compass, color: "text-primary" },
    { id: "rpg-games", label: "RPG", icon: Wand2, color: "text-accent" },
    { id: "fighting-games", label: "Fighting", icon: Swords, color: "text-secondary" },
  ];

  return (
    <section className="py-6 sm:py-8 sticky top-16 sm:top-20 z-40 bg-background/95 backdrop-blur-lg border-b border-border/50" aria-label="Game category filter">
      <div className="container mx-auto px-4">
        <ScrollArea className="w-full">
          <div className="flex gap-2 sm:gap-3 pb-2 min-w-max sm:justify-center">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  onClick={() => onCategoryClick(category.id)}
                  className="glass flex-shrink-0 px-4 sm:px-6 py-3 sm:py-4 h-auto text-base sm:text-lg font-semibold hover:bg-primary/20 hover:border-primary/50 border-border/30 transition-all duration-300 hover:scale-105 hover:glow-blue"
                  variant="outline"
                  aria-label={`View ${category.label} games`}
                >
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 mr-2 ${category.color}`} />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </section>
  );
};

export default CategoryFilter;
