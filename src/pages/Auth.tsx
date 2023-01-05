import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

export default function Auth() {
  return (
    <Container>
      <h3>Auth</h3>
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
