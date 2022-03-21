import React from 'react'
import styled from 'styled-components'
import { global_theme } from '../utils/variables'
import { useTheme } from "../utils/provider";

const Text = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
max-width: 20rem;
font-family: 'EB Garamond', serif;

`
const Line = styled.div`
width: 10rem;
height: 0.1rem;
background: #22D166;
`
export default function Description({
  title="MedOrDoc",
  about="Search for walking clinics and family doctors.",
  tools="NextJS - Styled Components - Firebase",
  number="01"
}) {
  const { theme, setTheme } = useTheme();

  return (
      <Text>
        <h1 style={{color:`${global_theme[theme].proHeader}`}}>{title}</h1>
        <p2>{about}</p2>
        <p style={{fontFamily:"Celebes-Thin"}}>{tools}</p>
        <h1 style={{color:"#9584FC"}}>{number}</h1>
        <Line/>
      </Text>
    )
}
