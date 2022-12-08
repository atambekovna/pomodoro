import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import React from "react";
import Controls from "./components/Controls";
import Header from "./components/Header";
import TimerDisplay from "./components/TimerDisplay";
import Button from "./components/Button";
import Settings from "./components/settings";

const App = () => {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [timerMode, setTimerMode] = useState("pomo");
  const [pomoLength, setPomoLength] = useState(25);
  const [shortLength, setShortLength] = useState(3);
  const [longLength, setLongLength] = useState(15);
  const [fontPref, setFontPref] = useState("kumbh"); 
  const [accentColor, setAccentColor] = useState("default"); 
  const [secondsLeft, setSecondsLeft] = useState(pomoLength * 60);
  const [isActive, setIsActive] = useState(false);
  const [buttonText, setButtonText] = useState("START");

  const [volume, setVolume] = useState(1);
  const [timesUp] = useState({
    volume: volume,
  });

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setSecondsLeft((secondsLeft) => secondsLeft - 1);
      }, 1000);

      if (secondsLeft === 0) {
        clearInterval(interval);
        setIsActive(false);
        setButtonText("");
        timesUp()
      }

      return () => clearInterval(interval);
    }
  }, [isActive, secondsLeft]);

  const toggleSettingsVisibility = (event) => {
    setSettingsVisible(!settingsVisible);
  };

  const formatTimeLeft = (seconds) => {
    return `${Math.floor(seconds / 60)}:${
      seconds % 60 > 9 ? seconds % 60 : "0" + (seconds % 60)
    }`;
  };

  const calcPercentage = () => {
    if (timerMode === "pomo") {
      return (secondsLeft / (pomoLength * 60)) * 100;
    }
    if (timerMode === "short") {
      return (secondsLeft / (shortLength * 60)) * 100;
    }
    if (timerMode === "long") {
      return (secondsLeft / (longLength * 60)) * 100;
    }
  };
  return (
    <StyledLayout>
      <Header title="pomodoro" />
      <Controls
        timerMode={timerMode}
        setTimerMode={setTimerMode}
        setSecondsLeft={setSecondsLeft}
        pomoLength={pomoLength}
        shortLength={shortLength}
        longLength={longLength}
        setIsActive={setIsActive}
        buttonText={buttonText}
        setButtonText={setButtonText}
        volume={volume}
      />
      <TimerDisplay
        timerMode={timerMode}
        percentage={calcPercentage()}
        timeLeft={formatTimeLeft(secondsLeft)}
        isActive={isActive}
        setIsActive={setIsActive}
        buttonText={buttonText}
        setButtonText={setButtonText}
        volume={volume}
        setVolume={setVolume}
      />
      <Button type="settings" toggleVisibility={toggleSettingsVisibility} />
      <Settings visible={settingsVisible}
                toggleSettingsVisibility={toggleSettingsVisibility} 
                pomoLength={pomoLength}
                setPomoLength={setPomoLength}
                shortLength={shortLength}
                setShortLength={setShortLength}
                longLength={longLength}
                setLongLength={setLongLength}
                fontPref={fontPref}
                setFontPref={setFontPref}
                accentColor={accentColor}
                setAccentColor={setAccentColor}
                closeSettings={toggleSettingsVisibility}
                setSecondsLeft={setSecondsLeft}
                timerMode={timerMode}
                />
    </StyledLayout>
  );
};

export default App;

const StyledLayout = styled.div`
  background-image: url(https://i.pinimg.com/564x/7f/e9/44/7fe944ae68a19a24dae92d57e591b055.jpg);
  background-size: 100%;
  width: 100%;
  height: 720px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Comic Sans MS, Comic Sans, cursive;
`;
