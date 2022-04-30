import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0.4rem 0.6rem;
  border-radius: 1rem;
`;

export default function Chip({
  children,
  bgColor,
}: {
  children: React.ReactNode;
  bgColor?: string;
}) {
  return (
    <Container style={{ backgroundColor: bgColor || "transparent" }}>
      {children}
    </Container>
  );
}
