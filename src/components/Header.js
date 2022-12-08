import styled from '@emotion/styled'
import React from 'react'

const Header = ({title}) => {
  return (
    <StyledHeaderTitle>{title}</StyledHeaderTitle>
  )
}

export default Header

const StyledHeaderTitle = styled.p`
font-size: 30px;
font-weight: bold;
color: #fff;
`