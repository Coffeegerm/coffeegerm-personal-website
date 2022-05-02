import styled from "styled-components";
import React from "react";

const ButtonStyle = styled.button`
  padding: 0.5rem 1rem;
  background-color: transparent;
  border: 1px solid #bfd9d4;
  color: #bfd9d4;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.22) 0px 1px 10px,
      rgba(0, 0, 0, 0.18) 0px 8px 8px;
    transition: all 0.3s ease-in-out;
    border: 1px solid rgba(191, 217, 212, 0.7);
  }
`;

type ButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
};

export default function Button({ onClick, children }: ButtonProps) {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
}
