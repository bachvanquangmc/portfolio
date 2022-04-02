import React from "react";
import styled from "styled-components";
import { global_theme } from "../utils/variables";
import { useTheme } from "../utils/provider";

const SkillCont = styled.div`
  background: ${(props) => props.background};
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  max-width: 35rem;
  padding: 4rem;
`;
const Logo = styled.div`
  width: 4rem;
  height: 4rem;
  background: #373351;
  box-shadow: 0.5px 2px 3px black;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  & > :hover {
    transition: all 0.2s ease-in-out;
    filter: invert(56%) sepia(94%) saturate(1588%) hue-rotate(102deg)
      brightness(99%) contrast(97%);
  }
`;

const MyImage = styled.img`
  width: 3rem;
  height: 3rem;
  filter: invert(51%) sepia(13%) saturate(5294%) hue-rotate(219deg)
    brightness(103%) contrast(101%);
`;
export default function Skillcard() {
  const { theme, setTheme } = useTheme();

  return (
    <SkillCont background={global_theme[theme].card}>
      <Logo>
        <MyImage src="/react.svg" />
      </Logo>
      <Logo>
        <MyImage src="/javascript.svg" />
      </Logo>
      <Logo>
        <MyImage src="/css.svg" />
      </Logo>
      <Logo>
        <MyImage src="/html.svg" />
      </Logo>
      <Logo>
        <MyImage src="/nodejs.svg" />
      </Logo>
      <Logo>
        <MyImage src="/github.svg" />
      </Logo>
      <Logo>
        <MyImage src="/photoshop.svg" />
      </Logo>
      <Logo>
        <MyImage src="/illustrator.svg" />
      </Logo>
      <Logo>
        <MyImage src="/aftereffects.svg" />
      </Logo>
      <Logo>
        <MyImage src="/premiere.svg" />
      </Logo>
    </SkillCont>
  );
}
