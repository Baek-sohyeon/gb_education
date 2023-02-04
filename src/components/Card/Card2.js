import React, { useState } from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    width: 18%;
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
    padding: 8px;
    position: relative;
    &:hover {
        ${'' /* width: %; */}
        height: 250px;
    }
`;

const CardImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
`;

const CardBody = styled.div`
    width: 100%;
    height: 100%;
    top: 0;
    ${'' /* right: -100%; */}
    position: absolute;
    background: linear-gradient(0deg, rgba(82, 101, 107, 0.8), rgba(82, 101, 107, 0.8));
    backdrop-filter: blur(2px);
    border-radius: 15px;
    color: #fff;
    display: flex;
    opacity: 0;
    flex-direction: column;
    justify-content: center;
    transition: 0.3s;

    &:hover {
        opacity: 1;
    
    }
`;

const Title = styled.p`
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    margin: 10px;
    text-align: center;
`;

const Content = styled.p`
    text-transform: capitalize;
    font-size: 12px;
    font-weight: 300;
    margin: 10px;
    text-align: center;


`;

const Card2 = (props) => {
  return (
    <CardContainer>
        <CardImg src={props.image}/>
        <CardBody>
            <Title>10년차 메타버스 전문가</Title>
            <Content>10년차 메타버스 기업 더샌드박스 공식 빌드스튜디오 GBF Meta가 제작하는 강의</Content>
        </CardBody>    
    </CardContainer>
  );
}

export default Card2;

