import React, { useState } from "react";
import styled from "styled-components";

const ContactButton = styled.div`
  z-index: 1;
  height: 12px;
  white-space: nowrap;
  padding: 5px 10px;
 text-align: center;
  &:hover {
    cursor: pointer;
    
  }
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  margin-right: 10px;
  border-radius: 99px;
  color: black;
  background : #C8CEF2;
    @media (max-width: 18em){
      width: 70px;
      font-size: 8px;
      padding: 7px 5px;
      margin-right: 0px;
    }
`;

const Button4 = (props) => {
  return (
    <ContactButton {...props}>
        {props.name}
    </ContactButton>
  );
}

export default Button4;

