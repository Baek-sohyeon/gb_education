import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Main from "../../components/Main/main";
import Service from "../../components/Service/Service";
import Block1 from "../../components/Block/Block1";
import Robot from '../../components/assets/images/ezgif.com-gif-maker.gif';
import CourseList from "../../components/CourseList/CourseList";
// import Robot from '../../components/assets/images/KakaoTalk_20221110_162103879@2x.png';


function Home() {


  return (
    <>
        <Main/>
        <Service/>
        <Block1 image={Robot}/>
        <CourseList/>
    </>
  );
}

export default Home;