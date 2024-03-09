import React from 'react';
import { Swiper, SwiperSlide as SwiperSlide} from "swiper/react";
import { EffectCoverflow } from 'swiper';

import "swiper/css";
import "swiper/css/effect-coverflow";

function OurTeam() {

  return (
    <div className="section-container">
        <div className="team-section-container">
            <section className="team-section reveal" id="team">
                <h1>Our Team</h1>
                <div className="CoverFlowSlide"> 
                    <Swiper
                        loop={false}
                        speed={1000}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        initialSlide={1}
                        slidesPerView={'auto'}
                        modules={[EffectCoverflow]}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 50,
                            depth: 300,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        className="CoverFlowSlide-main"
                        >
                        <SwiperSlide>
                            <img className="team-photo" src="/image/team/Founder-AnhLe.jpg" />
                            <div className="team-tag">
                                <p className="team-name">Anh Le</p>
                                <p className="team-title">Founder</p>
                            </div>
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/anhlemsc/" target="_blank" rel="noreferrer noopener">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 176 176" width="50"><g id="Layer_2" data-name="Layer 2"><g id="linkedin"><path id="icon" d="m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-92 139.28a3.71 3.71 0 0 1 -3.71 3.72h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72zm-11.62-76.28a15 15 0 1 1 15-15 15 15 0 0 1 -15 15zm94.26 76.54a3.41 3.41 0 0 1 -3.42 3.42h-17a3.41 3.41 0 0 1 -3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86a3.42 3.42 0 0 1 -3.37 3.42h-16.42a3.41 3.41 0 0 1 -3.41-3.42v-66.87a3.41 3.41 0 0 1 3.41-3.42h16.42a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"/></g></g></svg>
                                </a>
                            </div>
                        </SwiperSlide>
                        {/*<SwiperSlide>
                            <img className="team-photo" src="/image/team/CEO-ThaiLe.jpg" />
                            <div className="team-tag">
                                <p className="team-name">Thai Le</p>
                                <p className="team-title">CEO</p>
                            </div>
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/thaile143/" target="_blank" rel="noreferrer noopener">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 176 176" width="50"><g id="Layer_2" data-name="Layer 2"><g id="linkedin"><path id="icon" d="m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-92 139.28a3.71 3.71 0 0 1 -3.71 3.72h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72zm-11.62-76.28a15 15 0 1 1 15-15 15 15 0 0 1 -15 15zm94.26 76.54a3.41 3.41 0 0 1 -3.42 3.42h-17a3.41 3.41 0 0 1 -3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86a3.42 3.42 0 0 1 -3.37 3.42h-16.42a3.41 3.41 0 0 1 -3.41-3.42v-66.87a3.41 3.41 0 0 1 3.41-3.42h16.42a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"/></g></g></svg>
                                </a>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="team-photo" src="/image/team/Truong-BD.jpg" />
                            <div className="team-tag">
                                <p className="team-name truong">Truong Nguyen</p>
                                <p className="team-title truong">BD Specialist</p>
                            </div>
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/huytruongth/" target="_blank" rel="noreferrer noopener">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 176 176" width="50"><g id="Layer_2" data-name="Layer 2"><g id="linkedin"><path id="icon" d="m152 0h-128a24 24 0 0 0 -24 24v128a24 24 0 0 0 24 24h128a24 24 0 0 0 24-24v-128a24 24 0 0 0 -24-24zm-92 139.28a3.71 3.71 0 0 1 -3.71 3.72h-15.81a3.71 3.71 0 0 1 -3.72-3.72v-66.28a3.72 3.72 0 0 1 3.72-3.72h15.81a3.72 3.72 0 0 1 3.71 3.72zm-11.62-76.28a15 15 0 1 1 15-15 15 15 0 0 1 -15 15zm94.26 76.54a3.41 3.41 0 0 1 -3.42 3.42h-17a3.41 3.41 0 0 1 -3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86a3.42 3.42 0 0 1 -3.37 3.42h-16.42a3.41 3.41 0 0 1 -3.41-3.42v-66.87a3.41 3.41 0 0 1 3.41-3.42h16.42a3.42 3.42 0 0 1 3.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"/></g></g></svg>
                                </a>
                            </div>
                    </SwiperSlide>*/}
                    </Swiper>
                </div>
                <p className="bottom-text">And More →</p>
            </section>
            <div className="background-decor-layer">
                    <img src="/image/decor/bubble-decor-blue.png" loading="eager" className="bubble-01" id="bubble-01"></img>
                    <img src="/image/decor/bubble-decor-blue.png" loading="eager" className="bubble-02" id="bubble-02"></img>
            </div>
        </div>
    </div>

  )
}

export default OurTeam