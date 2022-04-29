import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  transition: all 0.2s ease-in-out;
  flex: 1;
  background-color: #2c4463;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px, rgba(0, 0, 0, 0.05) 0px 0.5px 1px;
  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px,
      rgba(0, 0, 0, 0.18) 0px 4px 11px;
  }

  &:hover > h3 {
    transition: color 0.3s ease-in-out;
    color: #9bc4bc;
  }
`;

const CardHeader = styled.h3`
  font-size: 1.5rem;
`;

type CardProps = {
  children: React.ReactNode;
  onClick: () => void;
  header: string;
};

export default function Card({ children, onClick, header }: CardProps) {
  return (
    <Container onClick={onClick}>
      <CardHeader>{header}</CardHeader>
      {children}
    </Container>
  );
}
