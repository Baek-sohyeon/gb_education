import React, { useState } from "react";
import styled from "styled-components";
import Button1 from "../Button/Button1";
import Person from '../../components/assets/images/유니버셜_역무원_7G_0000.png'

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
    @media (max-width: 32em){
      width: 100%;
      border-radius: 0px;
    }

`;

const TextContainer = styled.div`
    position: absolute;
    width: 80%;
    top: 0;
    height: 250px;
    color: white;
    border-radius: 12px;
    ${'' /* padding: 5% 15%; */}
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.69), rgba(0, 0, 0, 0.69));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 32em){
      width: 100%;
      border-radius: 0px;
    }
`;

const Title = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    z-index: 1;
`;

const Content = styled.p`
    font-size: 12px;
    z-index: 1;
`;

const CenterImg = styled.img`
  position: absolute;
  width: 50%;
  z-index: 1;
  left: 0;
  top: -30%;
  max-width: 700px;
  min-width: 500px;
  ${'' /* top: 75%;
  left: 50%; */}
  z-index: 0;
  @media (max-width: 64em){
    width: 200px;
   }
`;


const Block2 = (props) => {
  return (
    <ContentBlock>
        <ImageBlock src={props.image}/>
        <TextContainer>
            <CenterImg src={Person} />
            <Title>Ready to Join?</Title>
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

export default Block2;

