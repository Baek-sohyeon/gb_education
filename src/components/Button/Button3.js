import React, { useState } from "react";
import styled from "styled-components";

const ContactButton = styled.div`
  width: 50px;
  padding: 10px;
  ${'' /* background: #FFFFFF 0% 0% no-repeat padding-box; */}
  ${'' /* box-shadow: 0px 3px 10px #00000029; */}
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  ${'' /* align-items: center; */}
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 999px;
  margin-right: 10px;
  
`;



const Button3 = (props) => {
  return (
    <ContactButton>
        <LogoImg src={props.image}/>
    </ContactButton>
  );
}

export default Button3;

