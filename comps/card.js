import React,{ useState } from 'react'
import styled from 'styled-components'
import Btn from './btn'
import { global_theme } from '../utils/variables'
import { useTheme } from "../utils/provider";

const MyImage = styled.img`
width: 20rem;
height: 30rem;
box-shadow: 1px 2px 5px black;
background: rgba(133, 189, 229, 1);

`
const CardCont = styled.div`
width: 20rem;
height: 30rem;
background: ${props=>props.background};
box-shadow: 1px 2px 5px black;
display: flex;
flex-wrap: wrap;
flex-direction: column;
gap: 2rem;
align-items: center;
justify-content: center;
color:#fff;


`
export default function Card() {
  const { theme, setTheme } = useTheme();
  const [click, setClick] = useState(false)
  if(click == false){
    return (<div onClick={()=>setClick(!click)}>
    
      <MyImage  src='/medordoc.svg'/>
       
    </div>
      )
  }else {
    return <div onM={()=>setClick(!click)}>
    
      <CardCont background={global_theme[theme].card}>
      <h1 style={{fontFamily:"'EB Garamond', serif"}}>Visit ...</h1>
      <a href="https://medordoc-seven.vercel.app/" target="_blank" rel="noreferrer">

      <Btn title='Website'/>
      </a>
      <a href="https://github.com/bachvanquangmc/medordoc/" target="_blank" rel="noreferrer">

      <Btn title='Github'/>
      </a>
      </CardCont>
    </div>
  }
}
