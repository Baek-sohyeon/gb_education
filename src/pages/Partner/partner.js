import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Title1 from "../../components/Title/Title1";
import Button2 from "../../components/Button/Button2";

function Partner() {


  return (
    <>
        <style.Body>
            <style.Content>
                <Title1 english={'Partner'} korean={'GB 에듀케이션과 함께하는 파트너입니다.'}/>
            </style.Content>
        </style.Body>
        <style.row>
            <Button2
                name={'파트너 문의하기'}
                color={'white'}
                background={'#55AABE'}
            />
        </style.row>
        
        
    </>
  );
}

export default Partner;