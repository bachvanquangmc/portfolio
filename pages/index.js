import NavBar from "../comps/navbar"
import React from 'react'
import styled from "styled-components"

import Btn from "../comps/btn"
import Header from "../comps/header"
import Card from "../comps/card"
import Description from "../comps/description"
import Skillcard from "../comps/skillcard"

const MainCont = styled.div`
position: relative;
width: 100vw;
min-height: 100vh;
color: white;
background-color: #22212c;
background-image:
  radial-gradient(
    circle,
    rgba(75, 45, 79, 1) 0%,
    rgba(34, 33, 44, 1) 100%
  );
  `
const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
max-width: 70%;
color: #fff;
font-size: calc(1em + 1.5vw);
padding: 2rem;
line-height: 4rem;
font-size: ${props => props.fSize}rem;
`
const Box = styled.div`
width: ${props => props.boxWidth}rem;
height: ${props => props.boxHeight}rem;
background: ${props => props.color};
border: ${props => props.border};
position: absolute;
top: ${props => props.top}vh;
right: ${props => props.right}%;
transform: ${props => `rotate(${props.rotate}deg)`};
`
const BtnCont = styled.div`
margin-left: 8rem;
`
export default function Home({
  border="2px solid #9584FC"
}) {
  return (
    <MainCont>
      <NavBar/>
      <section style={{marginTop:"3rem"}}>
        <Header title={"Hi There!"} color={"#04D361"} fSize={5} spacing={2.5}/>
        <Text>
          <p>My name is Quang</p>
          <p>A Front End Developer with a passion for building user friendly cross-platform apllications</p>
        </Text>
        <BtnCont>
          <Btn/>
        </BtnCont>
        <Box boxHeight={4} boxWidth={4} rotate={30} top={20} right={10} border={border}/>
        <Box boxHeight={6} boxWidth={6} rotate={60} top={40} right={20} border={border}/>
        <Box boxHeight={5} boxWidth={5} rotate={50} top={70} right={30} color={"#FF5555"} border={"none"}/>
      </section>
      <section style={{marginTop:"10rem"}}>
        <Header title="About Me"/>
        <div style={{display:"flex", justifyContent:"space-evenly"}}>
          <img width="300px" height="400px" href="http://placekitten.com/200/200"/>
          <Text fSize={1.5}>
            <p>Hello, my name is Quang and I come from Vietnam. I started developing a passion for coding when I enrolled in D3 program at BCIT in 2020.</p>
            <p>My main goal today is to build accessible, engaging cross-platform applications so feel free to reach out to me anytime. </p>
          </Text>
        </div>
      </section>
      <section style={{marginTop:"10rem", display:"flex", justifyContent:"space-evenly"}}>
        <Card/>
        <Description/>
      </section>
      <section style={{marginTop:"10rem", display:"flex", justifyContent:"space-evenly"}}>
        <Description 
          title="Edu-Ocean"
          about="Teach us about the importance of the ocean."
          tools="Html - Css - JavaScript"
          number="02"
        />
        <Card/>
      </section>
      <section style={{marginTop:"10rem", display:"flex", justifyContent:"space-evenly"}}>
        <Card/>
        <Description 
          title="Optime"
          about="Create and mange daily routine for a healthy life."
          tools="Html - Css - JavaScript"
          number="03"
        />
      </section>
      <section style={{marginTop:"10rem", display:"flex"}}>
        <Skillcard/>
      </section>
    </MainCont>
  )
}
