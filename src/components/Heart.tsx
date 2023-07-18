import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

interface HeartProps {
  onSelect: () => void;
}
function Heart({ onSelect }: HeartProps) {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
    onSelect();
  };
  if (state === true) {
    return (
      <AiFillHeart
        color="red"
        size="40"
        onClick={() => {
          toggle();
        }}
      ></AiFillHeart>
    );
  } else {
    return (
      <AiOutlineHeart
        color="black"
        size="40"
        onClick={() => {
          toggle();
        }}
      ></AiOutlineHeart>
    );
  }
}

export default Heart;
