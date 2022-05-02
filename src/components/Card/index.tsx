import React from "react";
import styled from "styled-components";

type ChildrenProps = { children: React.ReactNode };

const CardHeader = styled.h3`
  font-size: 1.5rem;
`;

function Header({ children }: ChildrenProps) {
  return <CardHeader>{children}</CardHeader>;
}

const CardContent = styled.div`
  display: flex;
  align-items: center;
  > * {
    margin-left: 1rem;
  }
`;

function Content({ children }: ChildrenProps) {
  return <CardContent>{children}</CardContent>;
}

const CardLabel = styled.h4``;

function Label({ children }: ChildrenProps) {
  return <CardLabel>{children}</CardLabel>;
}

const Container = styled.div`
  margin: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  flex: 1;
  background-color: #2c4463;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 6px 8px, rgba(0, 0, 0, 0.05) 0px 2px 4px;
  transition: all 0.3s ease-in-out;
  height: 200px;

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

type CardProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  style?: React.CSSProperties;
} & ChildrenProps;

function Card({ children, onClick, style }: CardProps) {
  return (
    <Container onClick={onClick} style={style}>
      {children}
    </Container>
  );
}

Card.Header = Header;
Card.Content = Content;
Card.Label = Label;

export default Card;
