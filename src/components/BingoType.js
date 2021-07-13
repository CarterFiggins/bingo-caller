import _ from "lodash";
import BingoTypeButton from "./BingoTypeButton";

export default function BingoType(props) {
  const bingoGrid = () =>
    _.map(_.range(5), (row) => {
      return (
        <div key={row} className="flex-center">
          {_.map(_.range(5), (col) => {
            return (
              <BingoTypeButton
                key={col}
                text={row === 2 && col === 2 ? "FREE" : ""}
              />
            );
          })}
        </div>
      );
    });

  // create box with circles that you can click and show what type of bingo we are doing.
  return <div className="bingo-grid">{bingoGrid()}</div>;
}
