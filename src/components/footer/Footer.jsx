import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer-container">
        <footer className="footer">

        <div>
            
        </div>
        <div className="footer-copyright">
            <div className="footer-logo-container">
                <figure className="footer-logo">
                    <img src="/image/blockaceLogo.png" width="150px"/>
                    <p>© 2023 BlockACE</p>
                </figure>
                <div className="social-media">
                    <div className="social-media-icon">
                        <a href="https://twitter.com/BlockACE_" target="blank" rel="noreferrer noopener"><i class="fi fi-brands-twitter"></i></a>
                        <a href="https://t.me/thaile143" target="blank" rel="noreferrer noopener"><i class="fi fi-brands-telegram"></i></a>
                        <a href="https://www.facebook.com/acesince2018" target="blank" rel="noreferrer noopener"><i class="fi fi-brands-facebook"></i></a>
                        <a href="https://www.linkedin.com/company/blockace-blockasia-vietnam" target="blank" rel="noreferrer noopener"><i class="fi fi-brands-linkedin"></i></a>
                    </div>
                    <div className="email-contact">
                        <a href="mailto:thaile@blockace.co">
                            <p>Email Us</p>
                            <i class="fi fi-br-envelope"></i>
                        </a>
                    </div>
                </div>
            </div>

            
        </div>
        </footer>
    </div>

  )
}

export default Footer