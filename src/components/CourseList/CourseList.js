import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Card1 from "../Card/Card1";
import Title1 from "../Title/Title1";
import * as style from "./styles";
import image1 from '../../components/assets/images/KakaoTalk_20221205_153917825_02@2x.png'
import image2 from '../../components/assets/images/CLEAR23.png';
import image3 from '../../components/assets/images/Stage2All.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import { Pagination } from "swiper";

function CourseList() {


  return (
    <>
      <style.CardContainer>
            <style.Content>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide><Card1 image={image1}/></SwiperSlide>
              <SwiperSlide><Card1 image={image2}/></SwiperSlide>
              <SwiperSlide><Card1 image={image3}/></SwiperSlide>
              <SwiperSlide><Card1 image={image1}/></SwiperSlide>
              <SwiperSlide><Card1 image={image2}/></SwiperSlide>

            </Swiper>
              
        </style.Content>
      </style.CardContainer>

    </>
  );
}

export default CourseList;