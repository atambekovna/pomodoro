import styled from "@emotion/styled";
import useSound from "use-sound";
import clickSfx from "../sounds/slide.mp3";

const Controls = ({
  timerMode,
  setTimerMode,
  setSecondsLeft,
  pomoLength,
  shortLength,
  longLength,
  setIsActive,
  setButtonText,
  volume,
}) => {
  const [playSfx] = useSound(clickSfx, { volume: volume });
  //  const [playSfx] = useState({ volume: volume });

  const handleModeChange = (event) => {
    setTimerMode(event.target.id);
    setIsActive(false);
    setButtonText("START");
    switch (event.target.id) {
      case "short":
        setSecondsLeft(shortLength * 60);
        break;
      case "long":
        setSecondsLeft(longLength * 60);
        break;
      default:
        setSecondsLeft(pomoLength * 60);
    }
  };
  return (
    <StyledFormControl className="controls">
      <StyledControlsInput
        type="radio"
        id="pomo"
        name="mode"
        checked={timerMode === "pomo"}
        onClick={playSfx}
        onChange={handleModeChange}
      />
      <StyledConrolsButton htmlFor="pomo" className="controls__button">
        pomodoro
      </StyledConrolsButton>

      <StyledControlsInput
        type="radio"
        id="short"
        name="mode"
        checked={timerMode === "short"}
        onClick={playSfx}
        onChange={handleModeChange}
      />
      <StyledConrolsButton htmlFor="short" className="controls__button">
        short break
      </StyledConrolsButton>

      <StyledControlsInput
        type="radio"
        id="long"
        name="mode"
        checked={timerMode === "long"}
        onClick={playSfx}
        onChange={handleModeChange}
      />
      <StyledConrolsButton htmlFor="long" className="controls__button">
        long break
      </StyledConrolsButton>
    </StyledFormControl>
  );
};

export default Controls;

const StyledFormControl = styled.form`
  display: flex;
  justify-content: space-between;
  background: var(--background-timer);
  border-radius: 31.5px;
  width: 327px;
  min-height: 63px;
  padding: 8px 6px 8px 6px;
  margin: 45px 0 48px 0;
  z-index: 100;
`;
const StyledConrolsButton = styled.label`
  display: flex;
  align-items: center;
  height: 48px;
  border: none;
  border-radius: 26.5px;
  background: var(--background-timer);
  padding: 0 15px 0 15px;

  font-family: var(--font-current);
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  color: var(--text);
  mix-blend-mode: normal;
  opacity: 0.4;
  cursor: pointer;
`;
const StyledControlsInput = styled.input`
  opacity: 0;
  position: fixed;
  width: 0;
  /* color: var(--text-dark); */
  opacity: 1;
  background: var(--accent-color);
  animation-name: fade;
  animation-timing-function: ease-in;
  animation-duration: 0.05s;
  & :checked + label {
    color: var(--text-dark);
    opacity: 1;
    background: var(--accent-color);
    animation-name: fade;
    animation-timing-function: ease-in;
    animation-duration: 0.05s;
  }
`;
