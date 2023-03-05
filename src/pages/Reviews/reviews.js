import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card4 from "../../components/Card/Card4";
import Title1 from "../../components/Title/Title1";
import * as style from "./styles";
import train from '../../components/assets/images/disco11.png'
import {reviewData} from "./reviewData";
import Button2 from "../../components/Button/Button2";
import { Grid, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "./styles.css";

function Reviews() {


  return (
    <>
        {/* <style.Body> */}
        <style.Content>
            <Title1 english={'Reviews'} korean={'수강생들의 후기'}/>
            
                <style.row>
                {reviewData.map((event,i) => (
                    <style.column>
                        <Card4
                            image={event[0].image} 
                            course={event[0].course}
                            name={event[0].name}
                            content={event[0].content}
                        />
                        <Card4
                            image={event[1].image} 
                            course={event[1].course}
                            name={event[1].name}
                            content={event[1].content}
                        />
                        <Card4
                            image={event[2].image} 
                            course={event[2].course}
                            name={event[2].name}
                            content={event[2].content}
                        />
                    </style.column>
                        
                ))}
                </style.row>
                

            <style.Bottom>더 많은 후기는 강의와 디스코드를 통해 볼 수 있습니다!</style.Bottom>
        </style.Content>
        <style.row>
            <Button2
                name={'GBF Meta 공식 디스코드'}
                color={'white'}
                background={'#55AABE'}
            />
            <Button2
                name={'강의 수강하기'}
                color={'white'}
                background={'#55AABE'}
            />
        </style.row>
        {/* </style.Body> */}
        
    </>
  );
}

export default Reviews;