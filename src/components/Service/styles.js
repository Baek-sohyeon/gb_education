import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 250px;
  padding: 12px 0px;
    @media (max-width: 32em){
      flex-direction: column;
      height: 100%;
    }
`;

export const Content = styled.div`
    background: linear-gradient(180deg, #E1EDF0 29.17%, #E1EDF0 51.04%, rgba(225, 237, 240, 0) 100%);;
    width: 100%;
    padding: 36px 0px;
`;
