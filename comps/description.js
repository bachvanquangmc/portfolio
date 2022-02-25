import React from 'react'
import styled from 'styled-components'

const Text = styled.div`

`
const Line = styled.div`
width: 10rem;
height: 0.1rem;
background: #22D166;
`
export default function Description({
  title="MedOrDoc",
  about="Search for  nearest walking clinics and family doctors.",
  tools="NextJS - Styled Components - Firebase",
  number="01"
}) {
  return (
      <Text>
        <h1>{title}</h1>
        <p2>{about}</p2>
        <p>{tools}</p>
        <h1 style={{color:"#9584FC"}}>{number}</h1>
        <Line/>
      </Text>
    )
}
