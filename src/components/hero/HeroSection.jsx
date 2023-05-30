import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <>
        <div className="hero-section">
            <div className="hero-section-title">
              <h1><span className="branding-name">BlockACE</span><br />The Entire Blockchain Solution</h1>
              <p>Established in 2018, we entered the cryptocurrency market with a diverse services package from branding, community, promotion and other specialized services.</p>
              <div className="hero-button">
                <Link to=''>
                  <button className="btn-01">Explore</button>
                </Link>
                <Link to=''>
                  <button  className="btn-02">Latest News</button>
                </Link>
              </div>
            </div>
            <div className="hero-animated-illu">
              <img src="public/image/png-hero-1.png" className="illu-01" width="300" />
              <img src="public/image/png-hero-2.png" className="illu-02" width="300"/>
            </div>
        </div>
    </>
  )
}

export default HeroSection