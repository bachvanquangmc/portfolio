import React from 'react'
import styled from 'styled-components'
import { global_theme } from '../utils/variables'
import { useTheme } from "../utils/provider";

const Button = styled.button`
width: 12rem;
height: 4rem;
font-size: 1.2rem;
border-radius: 5px;
border: none;
outline: none;
background: ${props=>props.background};
color: #fff;
box-shadow: 1px 2px 5px black;
  &:hover {
    background: ${props=>props.backgroundHover};
    color: #000;
  }
`
export default function Btn({
  title="EXPLORE WORK"
}) {

  const { theme, setTheme } = useTheme();
  return (
    <Button background={global_theme[theme].btn} backgroundHover={global_theme[theme].btnHover}>
      {title}
    </Button>
  )
}
