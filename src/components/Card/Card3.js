import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 200px;
  padding: 15px;
  height: 120px;
   @media (max-width: 32em){
      width: 60px;
      height: 60px;
    }
  
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  border: 6px solid #fff;
  border-radius: 4px;
  
`;


const Card3 = (props) => {
  return (
    <CardContainer>
        <CardImg src={props.image}/>
    </CardContainer>
  );
}

export default Card3;

