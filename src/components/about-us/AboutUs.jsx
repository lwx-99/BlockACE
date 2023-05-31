import React from 'react'
import VerticalSlide from './verticalSlide/verticalSlide'

function AboutUs() {
  return (
    <section className="about-us-section">
        <h1 className="section-title">About Us</h1>
        <div className="about-us-content">
            <article className="about-us-article">
                <p>BlockACE, founded in 2018, was initially branded as “BlockAsia Vietnam” which provides one-stop solution for international blockchain companies to expand to Vietnam & South East Asia markets including legal & business consultancy, marketing & PR activities. Recent clients include Node Capital, ChainUp, Jinse, Genesis Capital, MXC, WBF…</p>
            </article>
            <VerticalSlide />
        </div>
    </section>
  )
}

export default AboutUs