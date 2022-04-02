import React, { useState } from "react";
import styled from "styled-components";
import Btn from "./btn";
import { global_theme } from "../utils/variables";
import { useTheme } from "../utils/provider";

const MyImage = styled.img`
  width: 23rem;
  height: 20rem;
  box-shadow: 1px 2px 5px black;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(66, 63, 128, 1) 0%,
    rgba(73, 73, 223, 1) 51%
  );
`;
const CardCont = styled.div`
  width: 23rem;
  height: 20rem;
  background: ${(props) => props.background};
  box-shadow: 1px 2px 5px black;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  color: #fff;
`;
export default function Card({
  appLink = "https://medordoc-seven.vercel.app/",
  gitLink = "https://github.com/bachvanquangmc/medordoc/",
  img = "/medordoc.svg",
}) {
  const { theme, setTheme } = useTheme();
  const [click, setClick] = useState(false);
  if (click == false) {
    return (
      <div onClick={() => setClick(!click)}>
        <MyImage src={img} />
      </div>
    );
  } else {
    return (
      <div onClick={() => setClick(!click)}>
        <CardCont background={global_theme[theme].card}>
          <h1 style={{ fontFamily: "'EB Garamond', serif" }}>Visit ...</h1>
          <a href={appLink} target="_blank" rel="noreferrer">
            <Btn title="Website" />
          </a>
          <a href={gitLink} target="_blank" rel="noreferrer">
            <Btn title="Github" />
          </a>
        </CardCont>
      </div>
    );
  }
}
