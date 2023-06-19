import React from 'react'

function Services() {
  return (
    <div className="section-container">
      <div className="service-section-container">
          <section className="service-section reveal" id="services">
            <h1 className="section-title">Our Solutions</h1>
            <div className="service-card-container">

              <div className='service-card bd-sector'>
                <div className="content">
                  <h2>BUSINESS DEVELOPMENT</h2>
                    <ul>
                      <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Press Release & Media Relations</li>
                      <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Community Building & Management</li>
                      <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>KOLs & Influencers Network</li>
                      <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Market Maker Strategy</li>
                      <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Exchanges Listing</li>
                    </ul>
                </div>
                <div className='background-layer'>
                </div>
              </div>

              <div className='service-card marketing-sector'>
                <h2>MARKETING & ADS</h2>
                  <ul>
                    <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Social Media Marketing</li>
                    <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Airdrop & Bounty Campaigns</li>
                    <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Performance & Growth Hacking</li>
                    <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Digital Advertising</li>
                  </ul>
              </div>

              <div className='service-card creative-sector'>
                <h2>CREATIVE & PRODUCTION</h2>
                  <ul>
                    <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Web Design</li>
                    <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Content Creation</li>
                    <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Graphic Design</li>
                    <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Video Production</li>
                    <li><img src="/image/icon-svg/check.svg" loading="lazy" className="icon-list-check"/>Brand & Visual Identity</li>
                  </ul>
              </div>
              
            </div>
            <p className="addition-text">And many specialized services</p>
          </section>
          <div className="decoration-layer reveal">
            <img src="image/decor/bubble-yellow.png" className="bubble-01"></img>
            <img src="image/decor/bubble-yellow.png" className="bubble-02"></img>
          </div>
        </div>
    </div>
  )
}

export default Services