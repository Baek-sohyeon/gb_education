import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as style from "./styles";
import ReactPlayer from 'react-player';
import Button2 from "../../components/Button/Button2";
import Sidebar from "../../components/Sidebar/Sidebar";

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

function Lecture() {


  return (
    <>
    <style.row>
        <Sidebar/>
        <style.VideoWrap>
            <p>1-1 메타버스의 정의</p>
            <style.Video>
                <ReactPlayer url={'https://www.youtube.com/watch?v=bpwVkSDn0_o'} playing loop controls width={'100%'} height={'100%'} 
                    style={{
                        position: 'absolute',
                        // top: '50%',
                        left: 0
                    }} />
            </style.Video>
            <style.buttonGroup>
                <Button2
                    name={'< 이전 강의'}
                    color={'#55AABE'}
                    background={'white'}
                />
                <Button2
                    name={'다음 강의 >'}
                    color={'white'}
                    background={'#55AABE'}
                />
            </style.buttonGroup>   
        </style.VideoWrap>

    </style.row>
    
    </>
  );
}

export default Lecture;