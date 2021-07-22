import _ from "lodash";

export default function BingoTable(props) {
  const { calledNumbers } = props;

  const makeTable = () => {
    _.forEach(calledNumbers, (letterArrays, letter) => {
      // sort letter array of called numbers
      calledNumbers[letter] = _.sortBy(letterArrays, (bingoNum) => {
        return parseInt(_.split(bingoNum, "-")[1], 10);
      });
    });
    return (
      <tbody>
        {_.map(_.range(15), (num) => (
          <tr key={num}>
            <td>{calledNumbers.B[num]}</td>
            <td>{calledNumbers.I[num]}</td>
            <td>{calledNumbers.N[num]}</td>
            <td>{calledNumbers.G[num]}</td>
            <td>{calledNumbers.O[num]}</td>
          </tr>
        ))}
      </tbody>
    );
  };

  return (
    <table className="bingo-table">
      <thead>
        <tr>
          <th>B</th>
          <th>I</th>
          <th>N</th>
          <th>G</th>
          <th>O</th>
        </tr>
      </thead>
      {makeTable()}
    </table>
  );
}
