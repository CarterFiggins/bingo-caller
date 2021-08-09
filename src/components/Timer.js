import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function Timer() {
  const [startTimer, setStartTimer] = useState(false);
  const [time, setTime] = useState(60);
  const history = useHistory();

  useEffect(() => {
    let timer;
    if (startTimer) {
      timer = setInterval(() => {
        if (time !== 0) {
          setTime((time) => time - 1);
        } else {
          setStartTimer(false);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [startTimer, time]);

  const resetTimer = () => {
    setStartTimer(false);
    setTime(60);
  };

  return (
    <div className="timer">
      <button onClick={() => history.goBack()}>Back</button>
      <button onClick={() => setStartTimer((startTimer) => !startTimer)}>
        {startTimer ? "Pause Timer" : "Start Timer"}
      </button>
      <button onClick={() => resetTimer()}>Reset Timer</button>
      <div className="time">{time}</div>
    </div>
  );
}
