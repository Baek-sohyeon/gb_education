import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: white;
  border: 1px solid #B7B7B7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  height: 250px;
  border-radius: 12px;
  width: 200px;
  padding: 10px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 120px;
  border-radius: 4px;
`;

const Title1 = styled.p`
  color: black;
  font-size: 14px;
  margin: 0px;
`;

const Title2 = styled.p`
  color: #4F4F4F;
  font-size: 10px;
  margin: 6px 0px;
`;


const Content = styled.p`
  color: #828282;;
  font-size: 10px;

`;

const Card1 = (props) => {
  return (
    <CardContainer>
        <CardImg src={props.image}/>
        <Title1>[더 샌드박스] 복스에딧 기초</Title1>
        <Title2>[The Sandbox] VoxEdit Basic </Title2>
        <Content>더샌드박스 모델링 툴 복스에딧에 대한 기초적인 기능을 학습합니다.</Content>
    </CardContainer>
  );
}

export default Card1;

