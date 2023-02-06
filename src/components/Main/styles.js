import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  align-items: center;
`;

export const mainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  ${'' /* background:rgba(0, 0, 0, 0.2); */}
   @media (max-width: 64em){
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
   }
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
  width: 40%;
  z-index: 1;
  right: 0;
  max-width: 700px;
  ${'' /* top: 75%;
  left: 50%; */}
  @media (max-width: 64em){
    width: 200px;
    position: relative;
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
  align-items: left;
  @media (max-width: 64em){
    margin:0;
    text-align: center;
    align-items: center;
  }
`;

export const text1 = styled.p`
  font-size: 2.0rem;
  font-weight: 500;
  color: black;
  margin: 10px 5px;
  white-space: nowrap;

  @media (max-width: 32em){
    font-size: 1.2rem;
   }
  @media (max-width: 18em){
    font-size: 1.0rem;
   }
`;

export const text2 = styled.p`
  font-size: 1.0rem;
  ${'' /* font-weight: bold; */}
  color: ;
  margin-bottom: 20px;
  white-space: nowrap;

  @media (max-width: 64em){
    font-size: 0.5rem;
   }
`;
