import React, { useState } from "react";

interface Props {
  children: string;
  maxLen?: number;
}
const ExpandableText = ({ children, maxLen = 20 }: Props) => {
  const [state, setState] = useState(
    children.length > maxLen ? "Small" : "Large"
  );
  const clicked = () => {
    if (state === "Small") {
      setState("Large");
    } else {
      setState("Small");
    }
  };
  {
    if (state === "Small") {
      return (
        <div>
          {children.substring(0, maxLen) + "..."}
          <button onClick={clicked}>More</button>
        </div>
      );
    } else {
      return (
        <div>
          {children}
          <button onClick={clicked}>Less</button>
        </div>
      );
    }
  }
};

export default ExpandableText;
