import React from 'react'
import styled from 'styled-components'
import { global_theme } from '../utils/variables'
import { useTheme } from "../utils/provider";

const MainCont = styled.div`
display: flex;

`
const MyImage = styled.img`
width: 1.75rem;
height: 1.75rem;
filter: invert(100%) sepia(12%) saturate(0%) hue-rotate(45deg) brightness(109%) contrast(101%);
`
const Card = styled.div`
width: 3rem;
height: 3rem;
background: ${props=>props.background};
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0.5px 2px 3px black;
border-radius: 5px;
cursor: pointer;
margin: 5px;
&>:hover {
  transition: all 0.2s ease-in-out;
  filter: invert(56%) sepia(94%) saturate(1588%) hue-rotate(102deg) brightness(99%) contrast(97%);
}
`
export default function Social({
  background="#373351"
}){
  const { theme, setTheme } = useTheme();

  return (
    <MainCont>
        <a href="https://www.linkedin.com/in/quang-bach/" target="_blank">
          <Card background="#373351">
          <MyImage src='/linkedIn.svg'/>
          </Card>
        </a>
        <a href="https://github.com/bachvanquangmc" target="_blank">
          <Card background="#373351">
            <MyImage src='/github.svg'/>
          </Card>
        </a>

      <Card background={theme==='dark'?'#FBBF78':'#373351'} onClick={()=>setTheme("dark")}>
        <MyImage src='/night.svg'/>
      </Card>
      <Card background={theme==='default'?'#FBBF78':'#373351'} onClick={()=>setTheme("default")}>
        <MyImage src='/day-sunny.svg'/>
      </Card>
    </MainCont>
  )
}