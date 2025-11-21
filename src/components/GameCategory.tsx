import GameCard from "./GameCard";

interface Game {
  id: string;
  title: string;
  cover: string;
  rating: number;
  category: string;
}

interface GameCategoryProps {
  title: string;
  games: Game[];
}

const GameCategory = ({ title, games }: GameCategoryProps) => {
  return (
    <section className="py-12 animate-slide-up">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-1 w-12 bg-gradient-to-r from-primary to-secondary rounded" />
          <h2 className="text-4xl font-bold text-glow">
            {title}
          </h2>
          <div className="h-1 flex-1 bg-gradient-to-r from-secondary to-transparent rounded" />
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategory;
