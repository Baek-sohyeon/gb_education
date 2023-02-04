import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  background: white;
`;

const CardImg = styled.image`
  
`;

const Title = styled.p`
  color: #2A2E43;
`;

const Content = styled.p`
  color: #2A2E43;
`;

const Card1 = (props) => {
  return (
    <CardContainer>
        <CardImg />
        <Title>[더 샌드박스] 복스에딧 기초</Title>
        <Content>더샌드박스 모델링 툴 복스에딧에 대한 기초적인 기능을 학습합니다.</Content>
        
    </CardContainer>
  );
}

export default Card1;

