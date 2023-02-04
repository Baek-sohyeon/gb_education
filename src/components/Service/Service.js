import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card2 from "../Card/Card2";
import Title1 from "../Title/Title1";
import * as style from "./styles";
import image1 from '../../../src/components/assets/images/허허@2x.png'
import image2 from '../../../src/components/assets/images/차인@2x.png'
import image3 from '../../../src/components/assets/images/KakaoTalk_20221205_153917825@2x.png'
import image4 from '../../../src/components/assets/images/KakaoTalk_20221110_162103879@2x.png'

function Service() {


  return (
    <>
        <style.Content>
            <Title1 korean={'메타버스 강의 서비스'} english={'Our Services'}/>
            <style.CardContainer>
                <Card2 image={image1}/>
                <Card2 image={image2}/>
                <Card2 image={image3}/>
                <Card2 image={image4}/>
            </style.CardContainer>
        </style.Content>
    </>
  );
}

export default Service;