import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Auth() {
  return (
    <Container>
      <Outlet />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
