import React, { useRef, useState }  from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const playList = [
  {
    id: 1,
    url: 'https://www.youtube.com/embed/l-6ZN50ozBo?si=Dghsob5PACeFIC_x',
    thumbnail: "/youtube/thumbnail-01.jpg",
    title: 'BIT Vietnam on ViTV - National Economic Channel (Vol.2)',
  },
  {
    id: 1,
    url: 'https://www.youtube.com/embed/d42ZA1XGMYg?si=fB1EsDk7j1Yxpezv',
    thumbnail: "/youtube/thumbnail-10.jpg",
    title: 'BIT Vietnam on VTC Vietnam National TV (Vol.1)',
  },
  {
    id: 1,
    url: 'https://www.youtube.com/embed/JONfkvaq8Fg?si=gEua59mvHH6cX-WV',
    thumbnail: "/youtube/thumbnail-08.jpg",
    title: 'WBF Vietnam - The Commercial Development of the Blockchain in the Traditional Industry Panel',
  },
  {
    id: 1,
    url: 'https://www.youtube.com/embed/2CeAu28do8g?si=ku7QoViYZxjsRouF',
    thumbnail: "/youtube/thumbnail-04.jpg",
    title: 'MXC kicks off VBSession on Sunday, October 20th with Vietnamese Women’s Day',
  },
  {
    id: 1,
    url: 'https://www.youtube.com/embed/tz9Mfl1zlUc?si=haCeLopOPD-HfpEb',
    thumbnail: "/youtube/thumbnail-09.jpg",
    title: 'Thailand Blockchain Week 2019 | BLOCKCHAIN THOUGHTS LEADERSHIP CONFERENCE"',
  },
]


function CardSlide() {
  const [selectedVideo, setSelectedVideo] = useState('https://www.youtube.com/embed/l-6ZN50ozBo?si=Dghsob5PACeFIC_x')

  return (
    <div className='playlist-section' id="playlist">
      <div className='playlist-section-container'>
        <h1>Our Gallery</h1>
        <iframe width="auto" height="auto" src={selectedVideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <Swiper
                            slidesPerView={5}
                            spaceBetween={0}
                            centeredSlides={true}
                            initialSlide={3}
                            loop={false}
                            modules={[Pagination]}
                            className="vid-gallery"
                            breakpoints={{
                                0: {
                                slidesPerView: 3,
                                },
                                768:{
                                slidesPerView: 5
                                },
                            }}
                        >

                            {
                                playList.map( (video, i) => (
                                    <SwiperSlide key={i} className='video-card'>
                                        <div onClick={ () => setSelectedVideo(video.url)} key={i} className="hover:scale-[1.05] cursor-pointer bg-transparent h-128 transition-all ease-in-out duration-300 overflow-hidden text-gray-700 transition duration-1000 ease-in-out rounded-lg p-3 ">
                                            <div className="m-2 text-justify">
                                                <img alt="card img" className="rounded-md transition duration-1000 ease-in-out" src={video.thumbnail} />
                                                <h2 className="font-bold my-4 text-xl md:text-lg text-center text-red-800 h-auto">{video.title}</h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                            
                        </Swiper>

      </div>
    </div>

  )
}

export default CardSlide