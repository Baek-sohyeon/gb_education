import React, { useState } from "react";
import styled from "styled-components";


const CardContainer = styled.div`
  width: 500px;
  height: 150px;
  margin: 10px;
  padding: 15px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  ${'' /* align-items: center; */}
`;

const CardImg = styled.img`
  width: 80px;
  height: 80px;
  ${'' /* height: 100%; */}
  border-radius: 999px;
  margin-right: 10px;

  
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 6px solid #fff;
  border-radius: 4px;
`;

const Name = styled.p`
  font-size: 14pt;
  padding: 0;
  margin: 0px;

`;

const Content = styled.p`
  font-size: 9pt;
  color: #707070;
`;

const Course = styled.p`
  font-size: 11pt;
  color: ##2A2E43;

`;


const Card5 = (props) => {
  return (
    <CardContainer>
        <CardImg src={props.image}/>
        <TextContainer>
            <Name>{props.name}</Name>
            <Course>{props.course}</Course>
            <Content>{props.content}</Content>
        </TextContainer>
    </CardContainer>
  );
}

export default Card5;

