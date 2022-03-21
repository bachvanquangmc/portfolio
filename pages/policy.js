import NavBar from "../comps/navbar"
import React from 'react'
import styled, {keyframes} from "styled-components"
import Header from "../comps/header"
import { useRouter } from "next/router";


const Policy = () => {

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
      <Header title={"Privacy Policy"}/>
      <div style={{margin:"0 10rem"}}>
        <p>This policy applies to Quang Bach Web site only. It is designed to inform you of how and why Quang Bach gathers personal and non-personal information about you. This policy complies with provisions of the British Columbia Freedom of Information and Protection of Privacy Act.</p>
        <p>This may be Web site connected by hyperlinks to other Web sites. We are not responsible in any way for the privacy practices on other Web sites and suggest that you review the privacy policies on those linked Web sites before using them.</p>
      <p>We are accountable for this Privacy Policy and these practices on this Web site, including the Privacy Code set out below. If you have any questions or concerns regarding the privacy practices on this Web site, please e-mail us.</p>
      <p>What Information Is Collected?</p>
      <p>Quang Bach collects two kinds of information from this Web site.</p>
      <p>(A) Your voluntarily provided personal information. (B) Anonymous information about your visit.</p>
      <p>A. Your Personal Information:</p>
      <p>During normal Web site usage, you can visit this site without communicating any personal information. However, to make use of certain features on this site, such as gift certificates, promotions, subscriptions or newsletters, users may be asked to register with Quang Bach Web site. As part of this voluntary registration, Quang Bach may request contact information (such as name, mailing address, e-mail address, etc.) and other data required for operating these services. The only way we can collect personal information from you is if you voluntarily provide it. By voluntarily providing this personal information to us by sending us a comment or suggestion, by entering a contest that is posted on this Web site, you will be consenting to the collection, use and distribution of your personal information by Quang Bach for the purposes set out. You are under no obligation to provide us with personal information and can access and enjoy many parts of Quang Bach Web site without providing us any personal information. Among other things, the following is a representative list of reasons we may ask for your personal information:</p>
      <ul>
        <li>To run contests, select entrants, and choose prize winners;</li>
        <li>To respond to your questions or the comments you e-mail to us;</li>
        <li>To provide you with newsletters, bulletins or other information about our design or communication activities.</li>
        <li>To keep aggregate information on Web site use.</li>
      </ul>
      <p>B. Anonymous Information About Your Visit:</p>
      <p>When you visit this site, information about your visit (e.g. how you navigate the site) may be collected and stored. This information may include the length of your visit, the date and time of your visit, the pages you look at and the sites you visit before and after leaving this site. It does not include personally identifiable information such as your name, mailing or e-mail address or telephone number. We use this non-identifiable and aggregate information to better design this Web site and develop an efficient Web marketing plan. We also may share this information with our Web designer, board of directors and sponsors.</p>
      <p>Quang Bach may collect the following non-identifiable information when you visit this Web site:</p>
      <ul>
        <li>Your Internet Service Provider (ISP).</li>
        <li>Time of your visit.</li>
        <li>Pages you visited.</li>
        <li>Web Browser Used.</li>
      </ul>
      <p>What If I Do Not Agree With this Privacy Policy?</p>
      <p>By visiting this Web site and voluntarily providing personal information to Quang Bach Web site, you agree to the terms of this online User Agreement and the Privacy Policy contained herein.</p>
      <p>However, We welcome your comments and/or suggestions on improving this Web site and policies.</p>
      <p>Quang Bach, Digital Design and Development - BCIT</p>
      <p>Date: March 21 2022</p>
      </div>
    </section>
    <Footer>
        <div>
          <p>Quang Bach ©2022</p>
          <p style={{cursor:"pointer"}} onClick={()=>router.push("/terms")}>Terms of Use</p>
          <p style={{cursor:"pointer"}} onClick={()=>router.push("/policy")}>Privacy Policy</p>
        </div>
        <div style={{cursor:"pointer", display:"flex", flexDirection:"column", gap:"1rem"}}>
          <a href="https://www.linkedin.com/in/quang-bach/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/bachvanquangmc" target="_blank" rel="noreferrer">GitHub</a>
          <a href = "mailto:bachvanquangmc@gmail.com?subject = Feedback&body = Message">Email</a>
        </div>
      </Footer>
  </MainCont>
  )
 }

 export default Policy