import React from 'react'
import styled from 'styled-components'
// import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'
import Social from './social'
import { useRouter } from "next/router";
import { global_theme } from '../utils/variables'
import { useTheme } from "../utils/provider";


const MainCont = styled.nav`
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index:10;
font-family: Celebes-Regular;
`
const NavLink = styled.div`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
  color: #f15cdfc;
}
`
const Bars = styled(FaBars)`
display: none;
color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;

 @media screen and (max-width: 768px) {
   display: none;
 }
`
const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 24px;

 @media screen and (max-width: 768px) {
   display: none;
 }
`
const NavBtnLink = styled.div`
border-radius: 4px;
background: #373351;
padding: 10px 22px;
color: #fff;
border: none;
outline: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

 &:hover {
   transition: all 0.2s ease-in-out;
   background: #fff;
   color: #010606;
 }
`
function NavBar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <MainCont>
      <NavLink to='/'>
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:25}}>
          <p style={{fontSize:22}} onClick={()=>router.push("/")}>Quang Bach</p>
          <p style={{marginTop:-15, color:`${global_theme[theme].title}`, fontFamily:"Roboto-Light", letterSpacing:6}}>Front End Developer</p>
        </div>
      </NavLink>
      <Bars/>
      {/* <NavMenu>
      </NavMenu> */}
      <NavBtn>
        <NavLink to='/work' activeStyle>
          Work
        </NavLink>
        <Social/>
      </NavBtn>
    </MainCont>
  )
}

export default NavBar