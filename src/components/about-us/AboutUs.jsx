import React from 'react'

function AboutUs() {
  return (
  <div className="section-container">
    <div className="about-us-section-container">
      <section className="about-us-section reveal" id="about-us">
          <div className="about-us-content">
            <div className="about-us-main">
              <h1 className="section-title">Our Mission</h1>
              <article className="about-us-article">
                      <p>The bridge to South East Asia market.</p>

              </article>
              <div className="mission-business-container">
                <div className="our-mission">
                  <div>
                    <figure>
                      <img src="image/icon-svg/focus.svg" height="100px" />
                    </figure>
                    {/*<h2>Our Mission</h2>*/}
                    <p>BlockACE provide a one-stop solution for crypto & blockchain businesses' development in Vietnam and the South East Asia market.</p>
                  </div>
                </div>
                {/*<div className="our-business">
                  <div>
                    <figure>
                      <img src="image/icon-svg/shapes.svg" height="80px" />
                    </figure>
                    <h2>Our Business</h2>
                    <p>BLOCKACE is an agency, incubator, accelerator and investor for crypto & blockchain business.</p>
                  </div>
              </div>*/}
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