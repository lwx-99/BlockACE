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
                        <i class="fi fi-brands-youtube"></i>
                        <i class="fi fi-brands-twitter"></i>
                        <i class="fi fi-brands-telegram"></i>
                        <i class="fi fi-brands-discord"></i>
                        <i class="fi fi-brands-medium"></i>
                        <i class="fi fi-brands-facebook"></i>
                        <i class="fi fi-brands-instagram"></i>
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