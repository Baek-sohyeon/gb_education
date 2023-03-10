import styled from "styled-components";


export const CardContainer = styled.div`
  display: flex;
  ${'' /* width: 80%; */}
  justify-content: center;
  align-items: center;
  height: 250px;
  margin: 32px;
`;

export const Content = styled.div`
    background: linear-gradient(180deg, #E1EDF0 29.17%, #E1EDF0 51.04%, rgba(225, 237, 240, 0) 100%);;
    width: 100%;
    padding: 36px 0px;

`;


export const row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const column = styled.div`
    display: flex;
    flex-direction: column;

`;