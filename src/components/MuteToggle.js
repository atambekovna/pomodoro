import styled from '@emotion/styled'
import React from 'react'

const MuteToggle = ({ volume, setVolume }) => {
    const handleClick = (event) => {
        if (volume === 0) {
          setVolume(1)
        }
        else {
          setVolume(0)
        }
      }
    
      if (volume === 0) {
        return(
                <StyledDisMuteBtn className="display__mute"
                        id="muteButton"
                        title="mute button"
                        onClick={handleClick}>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" clipRule="evenodd"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"/></svg>
                </StyledDisMuteBtn>
              )
      }
    
      else {
        return(
          <StyledDisMuteBtn className="display__mute"
                  id="muteButton"
                  title="mute button"
                  onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
          </StyledDisMuteBtn>
        )
      }
}

export default MuteToggle

const StyledDisMuteBtn = styled.button`
  width: 25px;
  height: 25px;
  border: 0;
  background-color: transparent;
  /* color: #d7e0ff2f; */
  color: #fff;
  transition: color 0.3s ease-in-out;
  margin-bottom: 20px;
  cursor: pointer;
  & :hover{
    color: #d7e0ff;
  }
`