import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        padding={10}
        columns={{ sm: 1, md: 1, lg: 2, xl: 3 }}
        spacing={10}
      >
        {isLoading &&
          Skeleton.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />{" "}
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer>
            <GameCard key={game.id} game={game} />{" "}
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
