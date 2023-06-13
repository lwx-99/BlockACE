import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <>
        <section className="hero-section" id="home">
            <div className="hero-section-title">
              <h1><span className="branding-name">BLOCKACE</span><br /><span className="short-des">Agency, Incubator, Accelerator and Investor for Cryptocurrency and Blockchain Businesses</span></h1>
              <p>BLOCKACE was established in 2018, operating in Ha Noi and Ho Chi Minh by experienced industry veterans since 2016.</p>
              <div className="hero-button">
                <Link to=''>
                  <button className="btn-01">Explore</button>
                </Link>
                <Link to=''>
                  <button  className="btn-02">Latest News</button>
                </Link>
              </div>
            </div>
            {/*<div className="hero-animated-illu">
              <img src="/image/png-hero-1.png" className="illu-01" width="300" />
              <img src="/image/png-hero-2.png" className="illu-02" width="300"/>
              </div>*/}
            <div className="hero-section-layer">
            </div>
        </section>
    </>
  )
}

export default HeroSection