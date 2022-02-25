import React from 'react'
import styled from 'styled-components'
// import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

const MainCont = styled.nav`
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc((100vw - 1000px) / 2);
z-index:10;

`
const NavLink = styled.div`
color: #fff;
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
  return (
    <MainCont>
      <NavLink to='/'>
        <h1>Quang Bach</h1>
      </NavLink>
      <Bars/>
      <NavMenu>
        <NavLink to='/work' activeStyle>
          Work
        </NavLink>
        <NavLink to='/contact' activeStyle>
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to='/signin'>Dark Mode</NavBtnLink>
      </NavBtn>
    </MainCont>
  )
}

export default NavBar