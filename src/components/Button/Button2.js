import React, { useState } from "react";
import styled from "styled-components";

const ContactButton = styled.div`
  width: 120px;
  height: 20px;
  white-space: nowrap;
  padding: 10px 10px;
 text-align: center;
  &:hover {
    cursor: pointer;
    
  }
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  margin-right: 10px;
  border-radius: 9px;
  border: 2px solid ${(props) => props.color};
  color: ${(props) => props.color};
  background : ${(props) => props.background};
    @media (max-width: 32em){
      width: 100px;
      font-size: 15px;
      padding: 7px 5px;
      margin-right: 0px;
    }
    @media (max-width: 18em){
      width: 70px;
      font-size: 8px;
      padding: 7px 5px;
      margin-right: 0px;
    }
`;

const Button2 = (props) => {
  return (
    <ContactButton {...props}>
        {props.name}
    </ContactButton>
  );
}

export default Button2;

