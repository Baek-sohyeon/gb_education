import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { Checkbox } from "semantic-ui-react";

export const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  max-width: 500px;
  padding-top: 100px;
  padding-bottom: 150px;
`;

export const Title = styled.p`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 500px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const Span = styled.span`
  font-family: ${(props) => props.font};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => props.color};
  margin: ${(props) => props.margins};
`;

export const textInput = styled(TextField)`
  width: 100%;
  .MuiInputBase-input {
    height: 28px;
    margin-bottom: 20px;
    padding-left: 10px;
    border: 1px solid #929292;
    border-radius: 8px;
    color: #929292;
  }
`;

export const LoginUtil = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 60px 0 60px 0;
`;

export const IdCheckBox = styled(Checkbox)`
  margin-right: 5px;
  &&& > {
    label:before,
    input:focus ~ label:before,
    label:after {
      background-color: #1c1c1c;
      border: 1px solid white;
      border-radius: 0;
      width: 17px;
      height: 16px;
    }
    input:checked~label:after{
      color: #55AABE;
      font-size: 12px;
    }
`;

export const CheckForm = styled.div`
  display: flex;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 80px;
`;

export const SignUpButton = styled.button`
  width: 45%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 99px;
  background-color: white;
  border: 2px solid #55AABE;
  color: #55AABE;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: #E1EDF0;
    border: 2px solid #E1EDF0;
    color: #55AABE;
  }
`;

export const LoginButton = styled.button`
  width: 45%;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 99px;
  background-color: #55AABE;
  border: 2px solid #55AABE;
  color: white;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: #E1EDF0;
    border: 2px solid #E1EDF0;
    color: #55AABE;
  }
`;

export const row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`
export const centerImg = styled.img`
  width: 45%;
  z-index: 1;
  max-width: 500px;
  @media (max-width: 64em){
    width: 200px;
   }
`;
