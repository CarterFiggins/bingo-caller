import { useState } from "react";
import _ from "lodash";
import BingoTable from "./BingoTable";
import BingoType from "./BingoType";
import BingoHeader from "./BingoHeader";

export default function Bingo(props) {
  const createBingoNumbers = () => {
    let bingoNums = [];
    _.forEach(_.range(1, 16), (num) => {
      bingoNums.push(`B-${num}`);
      bingoNums.push(`I-${num + 15}`);
      bingoNums.push(`N-${num + 30}`);
      bingoNums.push(`G-${num + 45}`);
      bingoNums.push(`O-${num + 60}`);
    });
    return bingoNums;
  };

  const blankTable = {
    B: [],
    I: [],
    N: [],
    G: [],
    O: [],
  };

  const [bingoNumbers, setBingoNumbers] = useState(
    _.shuffle(createBingoNumbers())
  );
  const [count, setCount] = useState(0);
  const [currentBingoNumber, setCurrentBingoNumber] = useState(null);
  const [calledNumbers, setCalledNumbers] = useState(blankTable);
  const [showGrid, setShowGrid] = useState(false);

  const generateBingoNumber = () => {
    if (count < bingoNumbers.length) {
      setCurrentBingoNumber(bingoNumbers[count]);
      const clonedNumbers = _.cloneDeep(calledNumbers);
      clonedNumbers[bingoNumbers[count][0]].push(bingoNumbers[count]);
      setCalledNumbers(clonedNumbers);
      setCount(count + 1);
    }
  };

  const getLastFive = () => {
    return _.reverse(
      _.slice(
        bingoNumbers,
        count - 5 <= 0 ? 0 : count - 6,
        count - 1 <= 0 ? 0 : count - 1
      )
    );
  };

  const resetBingo = () => {
    setBingoNumbers(_.shuffle(createBingoNumbers()));
    setCount(0);
    setCurrentBingoNumber(null);
    setCalledNumbers(blankTable);
  };

  return (
    <div className="App">
      {showGrid && <BingoType />}
      <button className="grid-button" onClick={() => setShowGrid(!showGrid)}>
        Show Bingo Grid
      </button>
      <div className="bingo-title">High Stakes Bingo</div>
      <BingoHeader
        bingoButton={generateBingoNumber}
        currentBingoNumber={currentBingoNumber}
        bingoNumbers={bingoNumbers}
        showButton={count < bingoNumbers.length}
        lastFive={getLastFive()}
      />
      <div className="flex-center">
        <BingoTable calledNumbers={calledNumbers} />
      </div>
      <button className="bingo-button bottom-space" onClick={resetBingo}>
        Reset Bingo
      </button>
    </div>
  );
}
