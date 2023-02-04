import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Title1 from "../Title/Title1";
import * as style from "./styles";

function CourseList() {


  return (
    <>
        <style.Content>
            <Title1 korean={'메타버스 강의목록'} english={'Our Metaverse Courses'}/>
            {/* <style.CardContainer>

            </style.CardContainer> */}
        </style.Content>
    </>
  );
}

export default CourseList;