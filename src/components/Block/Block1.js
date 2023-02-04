import React, { useState } from "react";
import styled from "styled-components";
import Button1 from "../Button/Button1";

const ContentBlock = styled.div`
    padding: 20px;
    position: relative;
    text-align: center;

`;

const ImageBlock = styled.img`
    height: 250px;
    width: 80%;
    object-fit: fill;
    border-radius: 12px;
    object-position: left top;

`;

const TextContainer = styled.div`
    position: absolute;
    top: 0;
    color: white;
    padding: 5% 15%;
`;

const Title = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin: 0
`;

const Content = styled.p`
    font-size: 12px;
`;


const Block1 = (props) => {
  return (
    <ContentBlock>
        <ImageBlock src={props.image}/>
        <TextContainer>
            <Title>Learn to Real Metaverse.</Title>
            <Content>진짜 메타버스 전문가에게 진짜 메타버스를 배워보세요.</Content>
            <Button1
                name={'Get Started'}
                color={'#9F9F9F'}
                background={'white'}
                onClick={() => {
                    navigator("/start")
                }}
            />
        </TextContainer>
    </ContentBlock>
        
  );
}

export default Block1;

