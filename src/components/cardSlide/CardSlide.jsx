import React, { useRef, useState }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';


function CardSlide() {
  return (
    <div>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/videoseries?si=0mRgMGtoUO6TMo3M&amp;controls=0&amp;list=PLjTcB1wt76VLOaPbvQ-mI-dvClLCXRhTb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <div className="CardSlide"> 
          <Swiper
              slidesPerView={5}
              spaceBetween={0}
              centeredSlides={true}
              initialSlide={2}
              loop={true}
              modules={[Pagination]}
              className="card-slide-2"
              breakpoints={{
                  0: {
                  slidesPerView: 1,
                  },
                  768:{
                  slidesPerView: 5
                  },
              }}
          >
          <SwiperSlide>1</SwiperSlide>
          <SwiperSlide>2</SwiperSlide>
          <SwiperSlide>3</SwiperSlide>
          <SwiperSlide>4</SwiperSlide>
          <SwiperSlide>5</SwiperSlide>
        </Swiper>
      </div>
    </div>

  )
}

export default CardSlide