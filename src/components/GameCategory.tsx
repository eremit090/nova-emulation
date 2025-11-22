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
    <section className="py-8 sm:py-12 animate-fade-in" aria-labelledby={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}>
      <div className="container mx-auto px-4 sm:px-6">
        <h2 
          id={`${title.toLowerCase().replace(/\s+/g, '-')}-heading`}
          className="text-4xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-glow relative inline-block"
        >
          {title}
          <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-gradient-to-r from-primary to-transparent rounded-full" aria-hidden="true" />
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
          {games.map((game) => (
            <GameCard key={game.id} {...game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategory;
