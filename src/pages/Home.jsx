import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;
const Button = styled.button`
  background-color: black;
  color: white;
  padding: 16px;
`;
const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <ButtonContainer>
        <Button
          onClick={() => {
            navigate("/movies");
          }}
        >
          Movies
        </Button>

        <Button
          onClick={() => {
            navigate("/form");
          }}
        >
          Add Movies(form)
        </Button>
      </ButtonContainer>
    </Wrapper>
  );
};

export default Home;
