import { useState } from "react";

export default function BingoGridButton(props) {
  const [isFilled, setIsFilled] = useState(false);

  // create box with circles that you can click and show what type of bingo we are doing.
  return (
    <span
      onClick={() => setIsFilled(!isFilled)}
      className={`bingo-space ${isFilled ? "filled" : ""}`}
    >
      {props.text}
    </span>
  );
}
