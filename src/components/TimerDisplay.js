import MuteToggle from "./MuteToggle";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import useSound from 'use-sound'
import startSfx from '../sounds/startTimer.mp3'
import pauseSfx from '../sounds/pauseTimer.mp3'
import styled from "@emotion/styled";

const TimerDisplay = ({
  timerMode,
  percentage,
  timeLeft,
  isActive,
  setIsActive,
  buttonText,
  setButtonText,
  volume,
  setVolume,
}) => {
  const [play] = useSound(startSfx, {
    interrupt: true,
    volume: volume,
  })
const [pause] = useSound(pauseSfx, {
    interupt: true,
    volume: volume,
  })

  const handleClick = (event) => {
    if (event.target.id === "muteButton") {
      return null;
    }

    if (timeLeft === "0:00") {
      return null;
    }

    if (isActive) {
      pause();
    } else {
      play();
    }
    setIsActive(!isActive);
    setButtonText(
      buttonText === "START" || buttonText === "RESUME" ? "PAUSE" : "RESUME"
    );
  };

  let timesUpMsg = timerMode === "pomo" ? "time for a break" : "back to work!";

  let timeText = timeLeft === "0:00" ? timesUpMsg : timeLeft;

  let textSize = timeLeft === "0:00" ? "12px" : "28px";

  return (
    <StyledTimer className="timer">
      <StyledTimerDisplay className="timer__display">
        <CircularProgressbarWithChildren
          value={percentage}
          text={timeText}
          strokeWidth={4}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: 'var(--accent-color)',
            textColor: 'var(--text)',
            textSize: textSize,
            fontFamily: 'var(--font-current)',
            trailColor: 'none',
          })}>
          <MuteToggle
            value={percentage}
            volume={volume}
            setVolume={setVolume}
          />
          <StyledStartPauseBtn className="display__start-pause" onClick={handleClick}>
            {buttonText}
          </StyledStartPauseBtn>
        </CircularProgressbarWithChildren>
      </StyledTimerDisplay>
    </StyledTimer>
  );
};

export default TimerDisplay;

const StyledTimer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  width: 300px;
  height: 300px;
  border-radius: 90%;
  color: #fff;
  cursor: pointer;
  & :active{
    transform: scale(0.98);
  }
`
const StyledTimerDisplay = styled.div`
  width: 100%;
  padding: 11px;
  border-radius: 90%;
`
const StyledStartPauseBtn = styled.button`
  margin-top: 50%;
  font-family: var(--font-default);
  font-weight: bold;
  font-size: 16px;
  background-color: var(--background-timer);
  border: 0;
  color: var(--text);
  line-height: 16px;
  letter-spacing: 15px;
  margin-right: -15px;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
`