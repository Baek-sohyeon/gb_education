import styled from "styled-components";

export const Body = styled.div`
    ${'' /* background: linear-gradient(180deg, rgba(225, 237, 240, 0) 0%, #E1EDF0 51.04%, #E1EDF0 100%); */}
    width: 100%;
    padding: 36px 0px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    `;

export const column = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 32em){
        display: none;
    }

`
export const Logo =  styled.div`
    font-size: 24px;
    margin: 5px;
    font-weight: 500;
    color: black;
    text-align: center;
    @media (max-width: 32em){
        font-size: 10px;
    }
`

export const head = styled.img`
    width: 100px;
    align-self: center;
    @media (max-width: 32em){
        width: 50px;
    }
`

export const content =  styled.div`
    font-size: 12px;
    color: black;
    text-align: center;
    @media (max-width: 32em){
        font-size: 10px;
    }
`
export const group = styled.div`
  display: flex;
  flex-direction: row;
  margin:10px;

`;