import React, { useRef, useState }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const playList = [
  {
  }
]


function CardSlide() {
  return (
    <div className='playlist-section' id="playlist">
      <div className='playlist-section-container'>
        <h1>Events Playlist</h1>
        <iframe width="auto" height="auto" src="https://www.youtube.com/embed/videoseries?si=-akzSX-FY2y_9uU9&amp;list=PLjTcB1wt76VLOaPbvQ-mI-dvClLCXRhTb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
    </div>

  )
}

export default CardSlide