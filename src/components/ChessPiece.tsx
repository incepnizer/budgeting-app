import React, { useState } from "react";
import {
  FaChessBishop,
  FaChessKing,
  FaChessKnight,
  FaChessQueen,
  FaChessRook,
  FaChessPawn,
} from "react-icons/fa";
interface pieceProps {
  children?: string;
}

const ChessPiece = ({ children }: pieceProps) => {
  const [state, setState] = useState(false);
  const toggle = () => {
    setState(!state);
  };
  if (children === "King") {
    if (state) {
      return (
        <div className="fst-italic" onClick={() => toggle()}>
          "The pawn who lived"
        </div>
      );
    } else {
      return <FaChessKing size={40} onClick={() => toggle()}></FaChessKing>;
    }
  } else if (children === "Queen") {
    if (state) {
      return (
        <div className="fst-italic" onClick={() => toggle()}>
          "The strongest; yet second in command"
        </div>
      );
    } else {
      return <FaChessQueen size={40} onClick={() => toggle()}></FaChessQueen>;
    }
  } else if (children === "Bishop") {
    if (state) {
      return (
        <div className="fst-italic" onClick={() => toggle()}>
          "A sniper from days past"
        </div>
      );
    } else {
      return <FaChessBishop size={40} onClick={() => toggle()}></FaChessBishop>;
    }
  } else if (children === "Rook") {
    if (state) {
      return (
        <div className="fst-italic" onClick={() => toggle()}>
          "Runs hard and hits harder"
        </div>
      );
    } else {
      return <FaChessRook size={40} onClick={() => toggle()}></FaChessRook>;
    }
  } else if (children === "Knight") {
    if (state) {
      return (
        <div className="fst-italic" onClick={() => toggle()}>
          "Shining armor is its thing"
        </div>
      );
    } else {
      return <FaChessKnight size={40} onClick={() => toggle()}></FaChessKnight>;
    }
  } else if (children === "Pawn") {
    if (state) {
      return (
        <div className="fst-italic" onClick={() => toggle()}>
          "The weakest; yet holding the potential to be the strongest"
        </div>
      );
    } else {
      return <FaChessPawn size={40} onClick={() => toggle()}></FaChessPawn>;
    }
  } else {
    return <div></div>;
  }
};

export default ChessPiece;
