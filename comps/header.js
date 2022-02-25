import React from 'react'
import styled from 'styled-components'

const HeaderCont = styled.div`
font-size: ${props => props.fSize}rem;
color: ${props => props.color};
padding: 2rem;
letter-spacing: ${props => props.spacing}rem;
`
export default function Header({
  title = "Header",
  fSize = "3",
  color = "#fff",
  spacing = 0
}) {
  return (
    <HeaderCont fSize={fSize} color={color} spacing={spacing}>
      {title}
    </HeaderCont>
  )
}
