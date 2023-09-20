import React from "react";
import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { ImageProps, Image } from "@chakra-ui/react";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Recomended", boxSize: "25px" },
    5: { src: bullsEye, alt: "Exeptional", boxSize: "35px" },
  };

  if (rating < 3) return null;

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
