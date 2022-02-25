import React from 'react'
import styled from 'styled-components'
import Btn from './btn'

const CardCont = styled.div`
width: 20rem;
height: 30rem;
background: #252431;
box-shadow: 1px 2px 5px black;
display: flex;
flex-wrap: wrap;
flex-direction: column;
gap: 2rem;
align-items: center;
justify-content: center;
`
export default function Card() {
  return (
      <CardCont>
          <h1>Visit ...</h1>
          <Btn title='Website'/>
          <Btn title='Github'/>
      </CardCont>
    )
}
