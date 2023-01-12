import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface IModalDefault {
  onClickToggleModal?: () => void;
  children: React.ReactNode;
}

function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<IModalDefault>) {
  return (
    <ModalContainer>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
        aria-hidden="true"
      />
    </ModalContainer>
  );
}

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const DialogBox = styled.dialog`
  display: flex;
  position: fixed;
  left: 50%;
  right: 50%;
  z-index: 500;
  width: max-content;
  height: max-content;
  border: none;
  box-sizing: border-box;
  background-color: transparent;
  transform: translate(-50%, -50%);
`;
const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
`;
