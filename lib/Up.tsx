import * as React from "react";
import styled from "styled-components";
import * as chroma from 'chroma-js';

const shadow = 6;
const blur = 20;

const color = "#55b9f3"
const lightColor = chroma(color).brighten(.9).hex();
const darkColor = chroma(color).darken(.9).hex();

const Div = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 15px;
  background: ${color};
  box-shadow: ${shadow}px ${shadow}px ${blur}px ${darkColor}, -${shadow}px -${shadow}px ${blur}px ${lightColor};
`;

type UpProps = {
  onClick: () => {};
  children: React.ReactChildren;
};

export const Up: React.FC<UpProps> = ({ onClick }) => {
  return <Div onClick={onClick}></Div>;
};
