import NavBar from "../comps/navbar"
import React from 'react'
import styled, {keyframes} from "styled-components"
import Header from "../comps/header"
import { useRouter } from "next/router";


const Terms = () => {

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
const router = useRouter();

  return (<MainCont>
    <NavBar/>
    <section style={{marginTop:"3rem"}}>
      <Header title={"Terms of use"}/>
      <div style={{margin:"0 10rem"}}>
        <p>"Quang Bach" welcomes you to its Web site. Using this Web site indicates your consent and agreement to be bound by this User Agreement and any policies or practices contained herein.</p>
        <p>All content and information (including, but not limited to, code, graphics, photos, guides, promotional materials, press releases, articles, plans, schedules, illustrations, audio clips, and video clips) displayed on this Web site is owned or licensed by "Quang Bach" and its respective owners, all content on this site is protected by copyright and other intellectual property laws. Any names, titles, logos and designs displayed on the Web site that contain "Quang Bach", titles, logos, or brands are the exclusive property and trademarks of "Quang Bach" or its members. You may not modify, publish, transmit, transfer, sell, reproduce, re-post or alter any such content. "Quang Bach" hereby grants you a personal, non-exclusive, non-assignable and non-transferable license to use and display, for home, non-commercial and personal use only, one copy of any content that you may download from this Web site. Any other use or reproduction of this Web site, in whole or in part, will be considered to be a violation of "Quang Bach"’ intellectual property rights.</p>
        <p>Your use of this Web site constitutes your agreement to abide by these terms of use included in this online User Agreement. "Quang Bach" reserves the right to modify, alter or otherwise update this User Agreement at any time.</p>
        <p>If you disagree with any of the above terms of use or any part of the User Agreement, do not use this Web site.</p>
        <p>Last Update:</p>
        <p>Quang Bach, Digital Design and Development - BCIT 
        </p>
      </div>
    </section>
    <Footer>
        <div>
          <p>Quang Bach ©2022</p>
          <p style={{cursor:"pointer"}} onClick={()=>router.push("/policy")}>Terms of Use</p>
          <p style={{cursor:"pointer"}} onClick={()=>router.push("/policy")}>Privacy Policy</p>
        </div>
        <div style={{cursor:"pointer", display:"flex", flexDirection:"column", gap:"1rem"}}>
          <a href="https://www.linkedin.com/in/quang-bach/" target="_blank">LinkedIn</a>
          <a href="https://github.com/bachvanquangmc" target="_blank">GitHub</a>
          <a href = "mailto:bachvanquangmc@gmail.com?subject = Feedback&body = Message">Email</a>
        </div>
      </Footer>
  </MainCont>
  )
 }

 export default Terms