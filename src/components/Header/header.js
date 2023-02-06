import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import logo from '../../components/assets/images/n__16@2x.png'
import Button from "../Button/Button1";


function Header() {

const [click, setClick] = useState(false)
  const navigator = useNavigate();
  
  useEffect(() => {
    }, []);
  

  return (
    <>
        <style.Header>

        <style.menuLeft>
            <style.LogoContainer>
                <style.Logo
                    src={logo}
                    onClick={() => navigator("/")}
                />
                {/* <style.LogoTxt>
                    GBF META
                </style.LogoTxt> */}
            </style.LogoContainer>

            
        
        </style.menuLeft>

        <style.HamburgerMenu click={click} onClick={() => setClick(!click)}>
            &nbsp;
        </style.HamburgerMenu>
            
        <style.Menu click={click}>

                <style.MenuBtn onClick={() =>{
                    navigator("/courses")
                    setClick(!click)
                    }
                }>
                    Courses
                </style.MenuBtn>
                <style.MenuBtn onClick={() => {
                    navigator("/reviews")
                    setClick(!click)
                    }
                }>
                    Reviews
                </style.MenuBtn>
                <style.MenuBtn onClick={() => {
                    navigator("/community")
                    setClick(!click)
                    }
                }>
                    Community
                </style.MenuBtn>
                <style.MenuBtn onClick={() => {
                    navigator("/faqs")
                    setClick(!click)
                    }
                }>
                    FAQ
                </style.MenuBtn>
                <style.MenuBtn onClick={() => {
                    navigator("/partner")
                    setClick(!click)
                    }
                }>
                    Partner
                </style.MenuBtn>

                <style.menuHidden>
                    <Button
                        name={'Login'}
                        color={'white'}
                        background={'#55AABE'}
                        onClick={() => {
                            navigator("/login")
                            setClick(!click)
                        }}
                    />
                    <Button
                        name={'Join'}
                        color={'#55AABE'}
                        background={'transparent'}
                        onClick={() => {
                            navigator("/join")
                            setClick(!click)
                        }}
                    />
            </style.menuHidden>                              
        </style.Menu>
        

        <style.menuRight>
            <Button
                name={'Login'}
                color={'white'}
                background={'#55AABE'}
                onClick={() => {
                    navigator("/login")
                    setClick(!click)
                }}
            />
            <Button
                name={'Join'}
                color={'#55AABE'}
                background={'transparent'}
                onClick={() => {
                    navigator("/join")
                    setClick(!click)
                }}
            />
        </style.menuRight>
        
        </style.Header>
        <style.Container>
            {/* <style.mainContainer>
                <style.mainImg src={homeImg} />
                <style.centerImg src={centerImg}/>
                <style.textContainer>
                <style.text1>METAVERSE</style.text1>
                <style.text2>BUILDER STUDIO</style.text2>
                </style.textContainer>
            </style.mainContainer> */}
        </style.Container>
      </>
  );
}

export default Header;