import React, { useState } from "react";
import styled from "styled-components";

const ContactButton = styled.div`
  width: 80px;
  height: 12px;
  white-space: nowrap;
  padding: 10px 10px;
 text-align: center;
  &:hover {
    cursor: pointer;
    
  }
  font-size: 14px;
  font-weight: 500;
  line-height: 14px;
  margin-right: 10px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.color};
  color: ${(props) => props.color};
  background : ${(props) => props.background};
    @media (max-width: 18em){
      width: 70px;
      font-size: 8px;
      padding: 7px 5px;
      margin-right: 0px;
    }
`;

const Button1 = (props) => {
  return (
    <ContactButton {...props}>
        {props.name}
    </ContactButton>
  );
}

export default Button1;

