import _ from "lodash";

export default function BingoHeader(props) {
  const { currentBingoNumber, bingoButton, lastFive, showButton } = props;
  return (
    <div className="column">
      <div className="flex-center">
        {currentBingoNumber && (
          <div className="bingo-ball">{currentBingoNumber || ""}</div>
        )}
      </div>
      <div>
        {showButton && (
          <button className="bingo-button" type="button" onClick={bingoButton}>
            Generate Bingo Ball
          </button>
        )}
      </div>
      <div className="last-five">
        <div className="text">{lastFive.length !== 0 && "Last Five"}</div>
        <div className="flex-center">
          {_.map(lastFive, (bingoNum) => {
            return <div className="small-bingo-ball">{bingoNum}</div>;
          })}
        </div>
      </div>
    </div>
  );
}
