import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.4rem 0.6rem;
  border-radius: 1rem;
`;

type ChipProps = {
  children: React.ReactNode;
  bgColor?: string;
};

export default function Chip({ children, bgColor }: ChipProps) {
  const backgroundColor = bgColor !== "default" ? bgColor : "#BFD9D4";
  const color = bgColor === "default" ? "black" : undefined;
  return <Container style={{ backgroundColor, color }}>{children}</Container>;
}
