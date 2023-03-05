import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import homeImg from '../../components/assets/images/n__16@2x.png';
import Button3 from "../../components/Button/Button3";

import sandbox from '../../components/assets/images/logo/thesandbox.png';
import minecraft from '../../components/assets/images/logo/minecraft.png';
import zepeto from '../../components/assets/images/logo/zepeto.jpg';
import roblox from '../../components/assets/images/logo/roblox.png';
import Button4 from "../../components/Button/Button4";
import Search from "../../components/Search/search";



function Courses() {


  return (
    <>
        <style.Body>
              <style.column>
                <style.head src={homeImg}/>
                <style.Logo>GB EDUCATION</style.Logo>
                <style.content>메타버스 실무 강의부터 수익화까지, 완벽하게 배워보세요.</style.content>
            </style.column>
            <style.group>
              <Button3 image={sandbox}/>
              <Button3 image={minecraft}/>
              <Button3 image={zepeto}/>
              <Button3 image={roblox}/>
            </style.group>
            <style.group>
              <Button4 name={'무료'}/>
              <Button4 name={'유료'}/>
              <Button4 name={'입문'}/>
              <Button4 name={'전문가'}/>
            </style.group>
            <Search/>
        </style.Body>
        
    </>
  );
}

export default Courses;