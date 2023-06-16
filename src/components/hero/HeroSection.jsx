import { Link } from 'react-router-dom';
import NavBar from '../navbar/NavBar'

function HeroSection() {
  return (
    <>
        <section className="hero-section" id="home">
          <NavBar />
          <div className="hero-section-container">
            <div className="hero-section-content">
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
          </div>

          <div className="hero-section-layer">
          </div>
        </section>
    </>
  )
}

export default HeroSection