import React, { useState } from "react";
import styled from "styled-components";
import Button1 from "../Button/Button1";

const ContentBlock = styled.div`
    margin: 32px 0px;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: center;
    overflow: hidden;
    width: 100%;
`;

const ImageBlock = styled.img`
    height: 250px;
    width: 80%;
    object-fit: cover;
    border-radius: 12px;
    ${'' /* position: relative; */}
    ${'' /* object-position: left top; */}
    ${'' /* background: #77AAAD; */}

`;

const TextContainer = styled.div`
    position: absolute;
    width: 80%;
    top: 0;
    height: 250px;
    color: white;
    border-radius: 12px;
    ${'' /* padding: 5% 15%; */}
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

