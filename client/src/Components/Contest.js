import React from "react";
import styled from "styled-components";

const ContestWrapper = styled.div`
  height: 100px;
  width: 80%;
  border: 1px solid black;
  border-radius: 20px;
  margin: 1rem 0rem;
  padding: 0.2rem 1.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ContestDetails = styled.div`
  font-size: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const ContestSpecs = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

function Contest() {
  return (
    <ContestWrapper>
      <ContestDetails>
        <text>contest #1 </text>
        <text className="text-3xl">OS Challenge</text>
      </ContestDetails>
      <ContestSpecs>
        <text>Jun 26th, 9:30 pm IST</text>
        <button
          class="bg-black text-white text-lg py-2 px-4 ml-8 border-2 focus:outline-none rounded-full hover:bg-white hover:text-black hover:border-black hover:font-bold"
          type="button"
        >
          register
        </button>
      </ContestSpecs>
    </ContestWrapper>
  );
}

export default Contest;
