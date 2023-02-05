import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import SnsGroup from "../SnsGroup/snsGroup";
import * as style from "./styles";
import homeImg from '../assets/images/n__16@2x.png';


function Footer() {
    const navigator = useNavigate();

  useEffect(() => {
    }, []);
  

  return (
    <>
    <style.Content>
        <style.Container>

            <style.company>
                <style.row>
                    <style.companyName>GB EDUCATION</style.companyName>
                </style.row>
                <style.companyLoc>
                    지비에프메타 주식회사<br/>대표자 : 송영민<br/>사업자번호 : 837-86-02331<br/>주소 : 경기도 용인시 수지구 대지로 84,<br/>상가동 202호
                </style.companyLoc>
            </style.company>

            <style.company>
                <style.row>
                    <style.companyName>NAVIGATION</style.companyName>
                </style.row>
                <style.companyLoc>
                    <style.MenuBtn onClick={() =>{
                            navigator("/courses")
                            }
                        }>
                            Courses
                        </style.MenuBtn>
                        <style.MenuBtn onClick={() => {
                            navigator("/reviews")
                            }
                        }>
                            Reviews
                        </style.MenuBtn>
                        <style.MenuBtn onClick={() => {
                            navigator("/community")
                            }
                        }>
                            Community
                        </style.MenuBtn>
                        <style.MenuBtn onClick={() => {
                            navigator("/faqs")
                            }
                        }>
                            FAQ
                        </style.MenuBtn>
                        <style.MenuBtn onClick={() => {
                            navigator("/partner")
                            }
                        }>
                            Partner
                        </style.MenuBtn>
                </style.companyLoc>
            </style.company>


            <style.company>
                <style.row>
                    <style.companyName>LEGAL</style.companyName>
                </style.row>
                <style.companyLoc>
                    <style.MenuBtn onClick={() =>{
                        // navigator("/")
                        }
                    }>
                        이용약관
                    </style.MenuBtn>
                    <style.MenuBtn onClick={() =>{
                        // navigator("/")
                        }
                    }>
                        개인정보취급방침
                    </style.MenuBtn>
                    <style.MenuBtn onClick={() =>{
                        // navigator("/")
                        }
                    }>
                        취소 및 환불정책
                    </style.MenuBtn>
                </style.companyLoc>
            </style.company>
            <style.column>
                <style.head src={homeImg}/>
                <style.Logo>GB EDUCATION</style.Logo>
            </style.column>
        </style.Container>



    
    </style.Content>

        <style.bottom>
            <style.copyright>ⓒ 2023 GBF Meta, All rights reserved.</style.copyright>
            <SnsGroup/>
        </style.bottom>
    </>
  );
}

export default Footer;