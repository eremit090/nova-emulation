import Hero from "@/components/Hero";
import GameCategory from "@/components/GameCategory";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import gameAction1 from "@/assets/game-action-1.jpg";
import gameRacing1 from "@/assets/game-racing-1.jpg";
import gameRpg1 from "@/assets/game-rpg-1.jpg";
import gameFighting1 from "@/assets/game-fighting-1.jpg";

const Index = () => {
  const actionGames = [
    { id: "action-1", title: "Cyber Warriors: Neon Strike", cover: gameAction1, rating: 5, category: "Action" },
    { id: "action-2", title: "Shadow Operations", cover: gameAction1, rating: 4, category: "Action" },
    { id: "action-3", title: "Urban Combat Zone", cover: gameAction1, rating: 5, category: "Action" },
    { id: "action-4", title: "Elite Force Delta", cover: gameAction1, rating: 4, category: "Action" },
    { id: "action-5", title: "Night Assault", cover: gameAction1, rating: 5, category: "Action" },
  ];

  const racingGames = [
    { id: "racing-1", title: "Neon Speed: Midnight Run", cover: gameRacing1, rating: 5, category: "Racing" },
    { id: "racing-2", title: "Turbo Circuit", cover: gameRacing1, rating: 4, category: "Racing" },
    { id: "racing-3", title: "Street Racer X", cover: gameRacing1, rating: 5, category: "Racing" },
    { id: "racing-4", title: "Velocity Championship", cover: gameRacing1, rating: 4, category: "Racing" },
    { id: "racing-5", title: "Drift Masters Pro", cover: gameRacing1, rating: 5, category: "Racing" },
  ];

  const rpgGames = [
    { id: "rpg-1", title: "Legends of Mystic Realm", cover: gameRpg1, rating: 5, category: "RPG" },
    { id: "rpg-2", title: "Dragon's Chronicle", cover: gameRpg1, rating: 5, category: "RPG" },
    { id: "rpg-3", title: "Fantasy Quest Online", cover: gameRpg1, rating: 4, category: "RPG" },
    { id: "rpg-4", title: "Arcane Warriors", cover: gameRpg1, rating: 5, category: "RPG" },
    { id: "rpg-5", title: "Kingdom Hearts Legacy", cover: gameRpg1, rating: 5, category: "RPG" },
  ];

  const fightingGames = [
    { id: "fighting-1", title: "Ultimate Fighter X", cover: gameFighting1, rating: 5, category: "Fighting" },
    { id: "fighting-2", title: "Street Kombat Pro", cover: gameFighting1, rating: 4, category: "Fighting" },
    { id: "fighting-3", title: "Tekken Masters", cover: gameFighting1, rating: 5, category: "Fighting" },
    { id: "fighting-4", title: "Battle Arena DX", cover: gameFighting1, rating: 4, category: "Fighting" },
    { id: "fighting-5", title: "Martial Arts Champions", cover: gameFighting1, rating: 5, category: "Fighting" },
  ];

  const sportsGames = [
    { id: "sports-1", title: "Pro Football 2002", cover: gameAction1, rating: 4, category: "Sports" },
    { id: "sports-2", title: "NBA Championship", cover: gameAction1, rating: 5, category: "Sports" },
    { id: "sports-3", title: "Tennis Ace", cover: gameAction1, rating: 4, category: "Sports" },
    { id: "sports-4", title: "Extreme Sports X", cover: gameAction1, rating: 5, category: "Sports" },
    { id: "sports-5", title: "Golf Masters Pro", cover: gameAction1, rating: 4, category: "Sports" },
  ];

  const adventureGames = [
    { id: "adventure-1", title: "Lost Temple Explorer", cover: gameRpg1, rating: 5, category: "Adventure" },
    { id: "adventure-2", title: "Jungle Quest", cover: gameRpg1, rating: 4, category: "Adventure" },
    { id: "adventure-3", title: "Island Survival", cover: gameRpg1, rating: 5, category: "Adventure" },
    { id: "adventure-4", title: "Treasure Hunter", cover: gameRpg1, rating: 4, category: "Adventure" },
    { id: "adventure-5", title: "Ancient Mysteries", cover: gameRpg1, rating: 5, category: "Adventure" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <main id="games" className="space-y-12 pb-16">
        <GameCategory title="Action Games" games={actionGames} />
        <GameCategory title="Racing Games" games={racingGames} />
        <GameCategory title="Sports Games" games={sportsGames} />
        <GameCategory title="Adventure Games" games={adventureGames} />
        <GameCategory title="RPG Games" games={rpgGames} />
        <GameCategory title="Fighting Games" games={fightingGames} />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
