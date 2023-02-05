import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import homeImg from '../../components/assets/images/복실이_7G_0000 1.png'
import Button2 from "../Button/Button2";

function Main() {


  return (
    <>
    
        <style.Container>
            <style.mainContainer>
                <style.centerImg src={homeImg} />
                <style.textContainer>
                    <style.text1>Professional Metaverse Classes. <br/>Learn to Real Metaverse.</style.text1>
                    <style.text2>진짜 메타버스 전문가에게 진짜 메타버스를 배워보세요.</style.text2>
                    <Button2
                        name={'Get Started'}
                        color={'white'}
                        background={'#55AABE'}
                        onClick={() => {
                            navigator("/start")
                        }}
                    />
                </style.textContainer>
                
            </style.mainContainer>
            
        </style.Container>
      </>
  );
}

export default Main;