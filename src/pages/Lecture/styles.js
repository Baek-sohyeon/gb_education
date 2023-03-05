import styled from "styled-components";

export const Video = styled.div`
  position:relative; 
  height:0;
  width:100%;
  padding-bottom:56.25%; 
`;

export const VideoWrap = styled.div`
    width: 70vw;
    position: relative;
    ${'' /* top: 50%; */}
    ${'' /* left: 50%; */}
    ${'' /* transform: translate(-50%, -50%); */}
`;

export const row = styled.div`
    display: flex;
    flex-direction: row;
`;


export const buttonGroup = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin: 10px;
`;