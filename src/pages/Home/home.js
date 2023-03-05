import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Main from "../../components/Main/main";
import Service from "../../components/Service/Service";
import Block1 from "../../components/Block/Block1";
import Robot from '../../components/assets/images/ezgif.com-gif-maker.gif';
import CourseList from "../../components/CourseList/CourseList";
import Attc from "../../components/ATTC/Attc";
import Block2 from "../../components/Block/Block2";
import train from '../../components/assets/images/disco11.png'
import Title1 from "../../components/Title/Title1";
function Home() {


  return (
    <>
        <style.Body>
            <Main/>
            <Service/>
            <Block1 image={Robot}/>
            <Title1 korean={'메타버스 강의목록'} english={'Our Metaverse Courses'}/>
            <CourseList/>
            <Attc/>
            <Block2 image={train}/>
        </style.Body>
        
    </>
  );
}

export default Home;