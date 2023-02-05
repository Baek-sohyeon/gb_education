import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card3 from "../Card/Card3";
import Title1 from "../Title/Title1";
import * as style from "./styles";
import image1 from '../../components/assets/images/KakaoTalk_20221105_221546391.png'
import image2 from '../../components/assets/images/KakaoTalk_20221106_124125738.png'
import image3 from '../../components/assets/images/KakaoTalk_20221110_161545881.png'
import image4 from '../../components/assets/images/KakaoTalk_20221110_162103879@2x.png'
import image5 from '../../components/assets/images/KakaoTalk_20221112_122227597.png'
import image6 from '../../components/assets/images/KakaoTalk_20221130_151834264.jpg'
import image7 from '../../components/assets/images/KakaoTalk_20221205_153917825.png'
import image8 from '../../components/assets/images/KakaoTalk_20221205_153917825_01 (1).png'


function Attc() {


  return (
    <>
        <style.Content>
            <Title1 korean={'수업 이후 만들 수 있는 것'} english={'After Taking The Class...'}/>
            <style.CardContainer>
                <style.column>
                    <style.row>
                        <Card3 image={image1}/>
                        <Card3 image={image2}/>
                        <Card3 image={image3}/>
                        <Card3 image={image4}/>
                    </style.row>
                    <style.row>
                        <Card3 image={image5}/>
                        <Card3 image={image6}/>
                        <Card3 image={image7}/>
                        <Card3 image={image8}/>
                    </style.row>
                </style.column>
            </style.CardContainer>
        </style.Content>
    </>
  );
}

export default Attc;