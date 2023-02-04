import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const mainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  ${'' /* background:rgba(0, 0, 0, 0.2); */}
`;

export const mainImg = styled.img`
  width: 100%;
  ${'' /* background: rgba(0,0,0,1); */}
  z-index: -1;
   @media (max-width: 64em){
    height: 500px;
   }
`;

export const centerImg = styled.img`
position: absolute;
  width: 45%;
  z-index: 1;
  right: 0;
  max-width: 700px;
  top: -30%;
  ${'' /* top: 75%;
  left: 50%; */}
  @media (max-width: 64em){
    width: 200px;
   }
`;


export const textContainer = styled.div`
  margin: 10%;
  ${'' /* position: absolute; */}
  z-index: 1;
  ${'' /* transform: translate(-50%, -50%); */}
  top: 70%;
  left: 50%;
  text-align: left;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: left
  ${'' /* @media (max-width: 64em){
    top: 75%;
   } */}
`;

export const text1 = styled.p`
  font-size: 2.0rem;
  font-weight: 500;
  color: black;
  margin: 10px 5px;
  ${'' /* @media (max-width: 64em){
    font-size: 32px;
   } */}
`;

export const text2 = styled.p`
  font-size: 1.0rem;
  ${'' /* font-weight: bold; */}
  color: ;
  margin-bottom: 20px;
  ${'' /* @media (max-width: 64em){
    font-size: 32px;
    white-space: nowrap;
   } */}
`;
