import React, { useState } from "react";
import styled from "styled-components";

const TextContainer = styled.div`
  text-align: center;
`;

const KoreanTitle = styled.p`
  font-size: 16px;
  margin: 0;
`;

const EnglishTitle = styled.p`
  font-size: 22px;
  margin: 5px;
  font-weight: 500

`;

const Title1 = (props) => {
  return (
    <TextContainer>
        <EnglishTitle>{props.english}</EnglishTitle>
        <KoreanTitle>{props.korean}</KoreanTitle>
    </TextContainer>
  );
}

export default Title1;

