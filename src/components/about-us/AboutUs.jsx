import React from 'react'
import VerticalSlide from './verticalSlide/verticalSlide'
import CardSlide from './cardSlide/CardSlide'

function AboutUs() {
  return (
    <section className="about-us-section">
        <div className="about-us-content">
          <div className="about-us-main">
            <h1 className="section-title">About Us</h1>
            <article className="about-us-article">
                    <p>BlockACE, founded in 2018, was initially branded as “BlockAsia Vietnam” which provides one-stop solution for international blockchain companies to expand to Vietnam & South East Asia markets including legal & business consultancy, marketing & PR activities. Recent clients include Node Capital, ChainUp, Jinse, Genesis Capital, MXC, WBF…</p>
            </article>
            <div className="brand-previous-logo">
              <figure>
                <img src="/image/BlockACE-prev.png" width="180"></img>
              </figure>
              <figure>
                <img src="/image/BIT.png" width="180"></img>
              </figure>

            </div>
          </div>
          <CardSlide />
        </div>
    </section>
  )
}

export default AboutUs