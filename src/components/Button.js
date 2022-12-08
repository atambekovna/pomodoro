import styled from "@emotion/styled";
import settingsIcon from '../assets/settings.ico'

const Button = ({ type, buttonText = "", toggleVisibility }) => {
  if (type === "settings") {
    return (
      <StyledPreferences
        className="pomodoro-app__preferences"
        name="settings"
        onClick={toggleVisibility}
      >
        <img src={settingsIcon} alt='icon'/>
      </StyledPreferences>
    );
  }

  if (type === "close") {
    return (
      <button className="pane__close-preferences" onClick={toggleVisibility}>
        {buttonText}
      </button>
    );
  }

  if (type === "apply") {
    return (
      <div className="pane__apply-row">
        <input
          type="submit"
          value={buttonText}
          className="pane__apply-preferences"
        />
      </div>
    );
  } else {
    return null;
  }
};

export default Button;

const StyledPreferences = styled.button`
  margin-top: 79px;
  background: none;
  border: 0;
  transition: transform 0.15s ease-in-out;
  cursor: pointer;
  & :hover {
    transform: scale(1.4) rotate(45deg);
  }
`;
