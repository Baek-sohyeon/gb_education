import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title1 from "../../components/Title/Title1";
import * as style from "./styles";
import styled from "styled-components";
import discord from '../../components/assets/images/logo/discord.jpeg';
import youtube from '../../components/assets/images/logo/youtube.png';
import cafe from '../../components/assets/images/logo/cafe.png';
import tiktok from '../../components/assets/images/logo/tiktok.png';
import instagram from '../../components/assets/images/logo/instagram.png';
import twitter from '../../components/assets/images/logo/twitter.png';
import Button3 from "../../components/Button/Button3";

const LogoButton = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 99px;
`;


const TextContainer = styled.div`
  width: 450px;
  height: 80px;
  padding: 15px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #00000029;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  margin: 0px 15px;
`;

const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 5px;
`;

const Content = styled.p`
  font-size: 14px;
`;

function Community() {


  return (
    <>
        {/* <style.Body> */}
        <style.Content>
            <Title1 english={'Community'} korean={'GBF 메타버스 커뮤니티에 놀러오세요!'}/>
        <style.row>
            <LogoButton src={discord}/>
            <TextContainer>
              <Title>GBF Meta 디스코드 커뮤니티</Title>
              <Content>디스코드 채널에서 강의에 대해 궁금한 것을 물어보고 함께 프로젝트를 진행할 메타버스 아티스트를 찾아보세요!</Content>
            </TextContainer>
        </style.row>
        <style.row>
            <TextContainer>
              <Title>GBF Studio 유튜브 채널</Title>
              <Content>총 조회수 800만회를 달성한 GBF 유튜브 채널에서 각종 메타버스 아트워크를 만나보세요!</Content>
            </TextContainer>
            <LogoButton src={youtube}/>
        </style.row>
      <style.row>
            <LogoButton src={cafe}/>
            <TextContainer>
              <Title>GBF 네이버 공식 카페</Title>
              <Content>네이버 카페에서 작품을 자랑하고 게시글을 올려보세요!</Content>
            </TextContainer>
        </style.row>
      
      <style.row>
        <Button3 image={twitter}/>
        <Button3 image={instagram}/>
        <Button3 image={tiktok}/>
      </style.row>
      </style.Content>
    </>
  );
}

export default Community;