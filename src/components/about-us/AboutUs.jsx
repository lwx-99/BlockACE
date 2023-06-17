import React from 'react'
import CardSlide from './cardSlide/CardSlide'

function AboutUs() {
  return (
  <div className="section-container">
    <div className="about-us-section-container">
      <section className="about-us-section reveal" id="about-us">
          <div className="about-us-content">
            <div className="about-us-main">
              <h1 className="section-title">About Us</h1>
              <article className="about-us-article">
                      <p>BlockACE, founded in 2018, was initially branded as “BlockAsia Vietnam” which provides multiple services package for international blockchain companies to expand to Vietnam & South East Asia markets including legal & business consultancy, marketing & PR activities.</p>

              </article>
              <div className="mission-business-container">
                <div className="our-mission ">
                  <div>
                    <figure>
                      <img src="image/icon-svg/focus.svg" height="80px" />
                    </figure>
                    <h2>Our Mission</h2>
                    <p>Providing a one-stop solution for crypto & blockchain businesses' development in Vietnam and the South East Asia market.</p>
                  </div>
                </div>
                <div className="our-business">
                  <div>
                    <figure>
                      <img src="image/icon-svg/shapes.svg" height="80px" />
                    </figure>
                    <h2>Our Business</h2>
                    <p>BLOCKACE is an agency, incubator, accelerator and investor for crypto & blockchain business.</p>
                  </div>
                </div>
              </div>
              
              {/*<div className="brand-previous-logo">
                <figure>
                  <img src="/image/BlockACE-prev.png" width="180"></img>
                </figure>
                <figure>
                  <img src="/image/BIT.png" width="180"></img>
                </figure>
                </div>*/
                }
            </div>
            {/*<CardSlide />*/}
          </div>
      </section>
    </div>
  </div>
  )
}

export default AboutUs