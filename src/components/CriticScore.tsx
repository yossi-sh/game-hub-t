import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const criticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} borderRadius={4} paddingX={2} fontSize={"25px"}>
      {score}
    </Badge>
  );
};

export default criticScore;
