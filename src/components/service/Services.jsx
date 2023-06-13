import React from 'react'

function Services() {
  return (
    <>
        <section className="service-section reveal" id="services">
          <h1 className="section-title">Our Solutions</h1>

          <div className="service-card-container">
            <div className='service-card communication-sector'>
              <div className="content">
                <h2>COMMUNICATION</h2>
                  <ul>
                    <li>Press Release & Media Relations</li>
                    <li>Community Building & Management</li>
                    <li>KOLs & Influencers Network</li>
                    <li>Market Maker Strategy</li>
                    <li>Exchanges Listing</li>
                  </ul>
              </div>
              <div className='background-layer'>
                
              </div>

            </div>
            <div className='service-card marketing-sector'>
              <h2>MARKETING & ADS</h2>
                <ul>
                  <li>Social Media Marketing</li>
                  <li>Airdrop & Bounty Campaigns</li>
                  <li>Performance & Growth Hacking</li>
                  <li>Digital Advertising</li>
                </ul>

            </div>
            <div className='service-card creative-sector'>
              <h2>CREATIVE & PRODUCTION</h2>
                <ul>
                  <li>Web Design</li>
                  <li>Content Creation</li>
                  <li>Graphic Design</li>
                  <li>Video Production</li>
                  <li>Brand & Visual Identity</li>
                </ul>
            </div>
          </div>
        </section>
    </>
  )
}

export default Services