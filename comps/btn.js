import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
width: 12rem;
height: 4rem;
font-size: 1.2rem;
border-radius: 5px;
border: none;
outline: none;
background: #252330;
color: #fff;
box-shadow: 1px 2px 5px black;
  &:hover {
    background: #04D361;
    color: #000;
  }
`
export default function Btn({
  title="EXPLORE WORK"
}) {
  return (
    <Button>
      {title}
    </Button>
  )
}
