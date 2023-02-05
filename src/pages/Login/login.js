import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
// import authAPI from "../../api/authAPI";
// import AuthContext from "../../store";
import homeImg from '../../components/assets/images/복실이_7G_0000 1.png'

function Login() {
//   const navigator = useNavigate();
//   const [, actions] = useContext(AuthContext);
//   const [values, setValues] = useState({ email: "", password: "" });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setValues({ ...values, [name]: value });
//     // console.log(event.target);
//   };


  return (
    <>
        <style.row>
            <style.Container>
                <style.Title>Login</style.Title>
                <style.LoginForm>
                <style.Span
                    color="#7a7a7a"
                    size="14px"
                    margins="0px 0px 8px 0px"
                    weight="bold"
                    font="AppleSD"
                >
                    Email address
                </style.Span>
                <style.textInput
                    InputProps={{ disableUnderline: true }}
                    placeholder="Enter your email address"
                    name="email"
                    required
                    // value={values.email}
                    // onChange={handleChange}
                ></style.textInput>
                <style.Span
                    color="#7a7a7a"
                    size="14px"
                    margins="0px 0px 8px 0px"
                    weight="bold"
                    font="AppleSD"
                >
                    Password
                </style.Span>
                <style.textInput
                    InputProps={{ disableUnderline: true }}
                    placeholder="Enter your password"
                    name="password"
                    type="password"
                    required
                    // value={values.password}
                    // onChange={handleChange}
                ></style.textInput>
                <style.ButtonContainer>
                    <style.SignUpButton
                    onClick={() => navigator("/join")}
                    type="submit"
                    >
                    Create an account
                    </style.SignUpButton>
                    <style.LoginButton>Login</style.LoginButton>
                </style.ButtonContainer>
                </style.LoginForm>
            </style.Container>
            {/* <style.centerImg src={homeImg} /> */}

        </style.row>
      
    </>
  );
}

export default Login;