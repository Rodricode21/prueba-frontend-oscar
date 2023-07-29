import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ModalWrapper = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  border: 1px solid #888;
  z-index: 6;
  width: 30%;
  margin: 10px;
  padding: 10px;

  border-radius: ${(props) => (props.isCuponModal ? "4px" : "")};
  position: absolute;
  top: 20px; /* Adjust the top position as needed */
  right: 20px; /* Adjust the right position as needed */
  border-radius: 4px;

  @media (max-width: 850px) {
    width: 600px;
  }

  @media (max-width: 650px) {
    width: 450px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: transparent;
  border: none;
  font-size: 12px;
  cursor: pointer;
`;

const Modal = ({ isOpen, onClose, children, isCuponModal }) => {
  return (
    <ModalWrapper isOpen={isOpen} onClick={onClose}>
      <ModalContent
        onClick={(e) => e.stopPropagation()}
        isCuponModal={isCuponModal}
      >
        <CloseButton onClick={onClose}>
          <FontAwesomeIcon icon={faX} />
        </CloseButton>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
