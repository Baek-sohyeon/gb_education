import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 200px;
  padding: 15px;
  
`;

const CardImg = styled.img`
  width: 100%;
  height: 120px;
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

