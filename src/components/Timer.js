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

  const url = "https://www.youtube.com/watch?v=ebvtJCu33vM";

  return (
    <div>
      <div>
        <button className="timer-button" onClick={() => history.goBack()}>
          Back
        </button>
      </div>

      <iframe
        className="video-timer"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ebvtJCu33vM"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

//   <div className="time">{time}</div>
//   <button
//     className="timer-button"
//     onClick={() => setStartTimer((startTimer) => !startTimer)}
//   >
//     {startTimer ? "Pause" : "Start"}
//   </button>
//   <button className="timer-button" onClick={() => resetTimer()}>
//     Reset
//   </button>
