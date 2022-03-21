import NavBar from "../comps/navbar"
import React from 'react'
import styled, {keyframes} from "styled-components"

import Btn from "../comps/btn"
import Header from "../comps/header"
import Card from "../comps/card"
import Description from "../comps/description"
import Skillcard from "../comps/skillcard"
import { useRouter } from "next/router";
import { NavLink } from 'react-router-dom'
import { global_theme } from '../utils/variables'
import { useTheme } from "../utils/provider";


const MainCont = styled.div`
position: relative;
width: 100vw;
min-height: 100vh;
// color: white;
background-color: #22212c;
background-image:
  radial-gradient(
    circle,
    ${(props)=> props.f},
    ${(props)=> props.s}
  );
  `
const Text = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
max-width: 70%;
// color: #fff;
font-size: calc(1em + 1.5vw);
padding: 2rem;
line-height: 4rem;
font-size: ${props => props.fSize}rem;
font-family: Celebes-Regular;

@media screen and (max-width: 768px) {
  max-width: 100%;
}
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

@media screen and (max-width: 768px) {
  display: none;
}
`
const BtnCont = styled.div`
margin-left: 8rem;
`
const rotate = keyframes`
from{
  transform: rotate(0);
}
to{
  transform: rotate(360deg);
}
`
const Center = styled.button`
position:absolute;
border:none;
outline:none;
background:transparent;
cursor:pointer;
top:20px;
right:100px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
transition: all 1s ease;

&>:first-child{
  animation: ${rotate} infinite 4s linear;
}
`
const AboutCont = styled.div`
display: flex;
flex-direction: column;
align-items: center;  

@media screen and (min-width: 768px) {
  flex-direction: row;
  margin-left: 3rem;
  align-items: flex-start;  
}
`
const Projects = styled.div`
display:flex;
justify-content: center;
flex-wrap: wrap;
gap: 3rem;
`
const ProjectItem = styled.div`
display: flex;
flex-direction: column;
margin-top: 8rem;
`
const Footer = styled.div`
width: 100%;
min-height: 10rem;
background: #11101A;
margin-top: 15rem;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 0 8rem;

@media screen and (min-width: 768px) {
  flex-direction: row;
  align-items: center;
}
`

export default function Home({
  border="2px solid #9584FC",
}) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <MainCont f={global_theme[theme].f} s={global_theme[theme].s}>
      <NavBar/>
      <section style={{marginTop:"3rem"}}>
        <Header fFamily="Roboto-Regular" title={"Hi,I’m Quang"} color={global_theme[theme].hi} fSize={5} spacing={1.5}/>
        <Text>
          <p>A Front End Developer with a passion for building user friendly cross-platform apllications</p>
        </Text>
        <BtnCont>
          <Btn/>
        </BtnCont>
        {/* <Center> */}
          {/* <img style={{width:80, position:"absolute", top:35, left:400}} src="/dots.svg"/> */}
        {/* </Center> */}
        <Center>
          <Box boxHeight={4} boxWidth={4} rotate={30} top={20} right={10} border={border}/>
        </Center>
        <Box boxHeight={6} boxWidth={6} rotate={60} top={40} right={20} border={border}/>
        <Box boxHeight={5} boxWidth={5} rotate={50} top={70} right={30} color={"#FF5555"} border={"none"}/>
      </section>
      <section style={{margin:"8rem 0"}}>
        <Header color={global_theme[theme].header} title="About Me"/>
        <AboutCont>
          <img width="300px" height="400px" href="http://placekitten.com/200/200"/>
          <Text fSize={1.5}>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
              <p>Hello, my name is Quang. I started developing a passion for coding when I enrolled in D3 program at BCIT in 2020.</p>
              <p>My main goal today is to build accessible, engaging cross-platform applications so feel free to reach out to me anytime. </p>
              <h3>Skills</h3>
              <Skillcard/>
            </div>
          </Text>
        </AboutCont>
      </section>
      <Header color={global_theme[theme].header}  title="Projects"/>
      <Projects>
        <ProjectItem>
          <Card/>
          <Description/>
        </ProjectItem>
        <ProjectItem>
          <Card/>
          <Description 
            title="Quotinator"
            about="Easily find famous quotes from favourite authors."
            tools="Html - Css - JavaScript"
            number="02"
          />
        </ProjectItem>
        <ProjectItem>
          <Card/>
          <Description 
            title="Optime"
            about="Create and mange daily routine for a healthy life."
            tools="Html - Css - JavaScript"
            number="03"
          />
        </ProjectItem>
      </Projects>
      <Footer>
        <div>
          <p>Quang Bach ©2022</p>
          <p style={{cursor:"pointer"}} onClick={()=>router.push("/terms")}>Terms of Use</p>
          <p style={{cursor:"pointer"}} onClick={()=>router.push("/policy")}>Privacy Policy</p>        </div>
        <div style={{cursor:"pointer", display:"flex", flexDirection:"column", gap:"1rem"}}>
          <a href="https://www.linkedin.com/in/quang-bach/" target="_blank">LinkedIn</a>
          <a href="https://github.com/bachvanquangmc" target="_blank">GitHub</a>
          <a href = "mailto:bachvanquangmc@gmail.com?subject = Feedback&body = Message">Email</a>
        </div>
      </Footer>

    </MainCont>
  )
}
