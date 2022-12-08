import styled from "@emotion/styled";
import React from "react";
import Button from "./Button";

const Settings = ({
  visible,
  toggleSettingsVisibility,
  pomoLength,
  setPomoLength,
  shortLength,
  setShortLength,
  longLength,
  setLongLength,
  fontPref,
  setFontPref,
  accentColor,
  setAccentColor,
  closeSettings,
  setSecondsLeft,
  timerMode,
}) => {
  const colors = {
    default: "#F87070",
    blue: "#70F3F8",
    purple: "#D881F8",
  };

  const fonts = {
    kumbh: `'Kumbh Sans', sans-serif`,
    roboto: `'Roboto Slab', serif`,
    space: `'Space Mono', monospace`,
  };

  const styles = document.documentElement.style;

  const applySettings = (event) => {
    event.preventDefault();

    setPomoLength(event.target.pomodoro.value);
    setShortLength(event.target.shortBreak.value);
    setLongLength(event.target.longBreak.value);
    setFontPref(event.target.font.value);
    setAccentColor(event.target.color.value);
    closeSettings();

    styles.setProperty("--font-current", fonts[event.target.font.value]);
    styles.setProperty("--accent-color", colors[event.target.color.value]);

    switch (timerMode) {
      case "short":
        setSecondsLeft(event.target.shortBreak.value * 60);
        break;
      case "long":
        setSecondsLeft(event.target.longBreak.value * 60);
        break;
      default:
        setSecondsLeft(event.target.pomodoro.value * 60);
    }
  };

  if (visible) {
    return (
      <StyledPreferences className="preferences preferences--visible">
        <StyledPreferencesPane className="preferences__pane">
          <Button
            type="close"
            buttonText="×"
            toggleVisibility={toggleSettingsVisibility}
          />
          <h2>Settings</h2>
          <form onSubmit={applySettings}>
            <StyledSettingsPane className="pane__time-settings">
              <h3>Time (Minutes)</h3>
              <StyledSettingsForm action="" className="time-settings__form">
                <label htmlFor="pomodoro">pomodoro</label>
                <input
                  type="number"
                  name="pomodoro"
                  id="pomodoro"
                  min="5"
                  max="90"
                  defaultValue={pomoLength}
                />
                <label htmlFor="short-break">short break</label>
                <input
                  type="number"
                  name="shortBreak"
                  id="short-break"
                  min="1"
                  max="14"
                  defaultValue={shortLength}
                />
                <label htmlFor="long-break">long break</label>
                <input
                  type="number"
                  name="longBreak"
                  id="long-break"
                  min="15"
                  max="30"
                  defaultValue={longLength}
                />
              </StyledSettingsForm>
            </StyledSettingsPane>

            <div className="pane__font-preference">
              <h3>Font</h3>
              <input
                type="radio"
                id="fontPref1"
                name="font"
                value="kumbh"
                defaultChecked={fontPref === "kumbh"}
              />
              <label htmlFor="fontPref1" className="font-preference__kumbh">
                Aa
              </label>
              <input
                type="radio"
                id="fontPref2"
                name="font"
                value="roboto"
                defaultChecked={fontPref === "roboto"}
              />
              <label htmlFor="fontPref2" className="font-preference__roboto">
                Aa
              </label>
              <input
                type="radio"
                id="fontPref3"
                name="font"
                value="space"
                defaultChecked={fontPref === "space"}
              />
              <label htmlFor="fontPref3" className="font-preference__space">
                Aa
              </label>
            </div>

            <StyledSettingsPane className="pane__color-preference">
              <h3>Color</h3>
              <input
                type="radio"
                id="colorPref1"
                name="color"
                value="default"
                defaultChecked={accentColor === "default"}
              />
              <label
                htmlFor="colorPref1"
                className="color-preference__default"
              ></label>

              <input
                type="radio"
                id="colorPref2"
                name="color"
                value="blue"
                defaultChecked={accentColor === "blue"}
              />
              <label
                htmlFor="colorPref2"
                className="color-preference__blue"
              ></label>

              <input
                type="radio"
                id="colorPref3"
                name="color"
                value="purple"
                defaultChecked={accentColor === "purple"}
              />
              <label
                htmlFor="colorPref3"
                className="color-preference__purple"
              ></label>
            </StyledSettingsPane>
            <Button type="apply" buttonText="Apply" />
          </form>
        </StyledPreferencesPane>
      </StyledPreferences>
    );
  }

  return null;
};

export default Settings;

const StyledPreferences = styled.div`
  z-index: 200;
  position: fixed;
  display: none;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  display: block;
  animation-name: fade;
  animation-timing-function: ease-in;
  animation-duration: 0.15s;
  
  & input {
  padding-left: 16px;
  border: none;
  border-radius: 10px;
  background: var(--input-background);
  font-family: var();
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: var(--text-dark);
}
& label {
  font-family: var(--font-default);
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 12px;
  color: var(--text-dark);
  mix-blend-mode: normal;
  opacity: 0.4;
}
`;
const StyledPreferencesPane = styled.div`
  top: 46px;
  width: 327px;
  height: 549px;
  background: var(--background-preferences);
  border-radius: 15px;

  position: relative;
  margin: auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  transition: 3.25s all ease-in-out;
  & h2 {
    padding: 24px 0 28px 24px;
    border-bottom: 1px solid #e3e1e1;
    font-family: var(--font-default);
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    color: var(--settings-heading);
  }
`;
const StyledSettingsPane = styled.div`
  margin-top: 28px;
`;
const StyledSettingsForm = styled.div`
  margin: 18px 24px 24px 23px;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  row-gap: 8px;
`;
