import { Link } from "react-router-dom"
import { useState } from "react"
import { HashLink } from 'react-router-hash-link';

function NavBar() {
  const [IsShow, setIsShown] = useState(false);
  const [currentLang, setCurrentLang] = useState({language: 'EN'})

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  const scrollWithOffset250 = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -250; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

  return (
    <>
      <nav className="nav-bar">
        <div className="nav-bar-container">
          <div className="nav-bar--logo-container">
            <Link to="/" className="nav-logo">

              <img src="/image/blockaceLogo.png" height="32px"/>
            </Link>
          </div>
          <div className="nav-menu-container">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <HashLink smooth scroll={scrollWithOffset250} to="#home" className="nav-link"  onClick={closeMobileMenu}>
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth scroll={scrollWithOffset} to="#about-us" className="nav-link"  onClick={closeMobileMenu}>
                  About Us
                </HashLink>
              </li>
              <li className="nav-item" >
                <HashLink smooth scroll={scrollWithOffset} to="#services" className="nav-link"  onClick={closeMobileMenu}>
                  Services
                </HashLink>
              </li>
              <li className="nav-item" >
                <HashLink smooth scroll={scrollWithOffset} to="#team" className="nav-link"  onClick={closeMobileMenu}>
                  Team
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth scroll={scrollWithOffset250} to="#projects" className="nav-link"  onClick={closeMobileMenu}>
                  Projects
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth scroll={scrollWithOffset} to="#customers" className="nav-link"  onClick={closeMobileMenu}>
                  Partners
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink smooth scroll={scrollWithOffset} to="#contact-us" className="nav-link"  onClick={closeMobileMenu}>
                  Contact
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="lang-btn-mobile-menu-btn">
            <div className="lang-btn" 
              onMouseOver={() => setIsShown(true)}
              onMouseOut={() => setIsShown(false)}
              onClick={() => setIsShown(!IsShow)}>
              <div className="lang-svg-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="24" height="24"><path d="M256,0C114.841,0,0,114.841,0,256S114.841,512,256,512,512,397.159,512,256,397.159,0,256,0ZM32,256a223.492,223.492,0,0,1,7.868-58.88h79.585a476.089,476.089,0,0,0,0,117.76H39.868A223.492,223.492,0,0,1,32,256Zm115.8,0a438.984,438.984,0,0,1,3.908-58.88H240V314.88H151.706A438.984,438.984,0,0,1,147.8,256ZM272,34.724c20.983,7.072,41.33,27.726,57.544,59.059,10.775,20.821,19.208,45,25.061,71.337H272Zm-32,0v130.4H157.4c5.853-26.336,14.286-50.516,25.061-71.337C198.671,62.45,219.017,41.8,240,34.724Zm0,312.156v130.4c-20.983-7.072-41.329-27.726-57.544-59.059-10.775-20.821-19.208-45-25.061-71.337Zm32,130.4V346.88h82.605c-5.853,26.336-14.286,50.516-25.061,71.337C313.33,449.55,292.983,470.2,272,477.276Zm0-162.4V197.12h88.294A438.984,438.984,0,0,1,364.2,256a438.984,438.984,0,0,1-3.908,58.88ZM392.548,197.12h79.584a224.248,224.248,0,0,1,0,117.76H392.548A471.238,471.238,0,0,0,396.2,256,471.238,471.238,0,0,0,392.548,197.12Zm68.169-32H387.3c-6.476-31.755-16.371-61-29.332-86.044a215.821,215.821,0,0,0-19.64-31.4A225.3,225.3,0,0,1,460.717,165.12ZM173.677,47.672a215.823,215.823,0,0,0-19.641,31.4c-12.961,25.045-22.856,54.289-29.332,86.044H51.283A225.3,225.3,0,0,1,173.677,47.672ZM51.283,346.88H124.7c6.476,31.755,16.371,61,29.332,86.044a215.823,215.823,0,0,0,19.641,31.4A225.3,225.3,0,0,1,51.283,346.88ZM338.324,464.328a215.821,215.821,0,0,0,19.64-31.4c12.961-25.045,22.856-54.289,29.332-86.044h73.421A225.3,225.3,0,0,1,338.324,464.328Z"/></svg>
                <div>{currentLang.language}</div>
                <svg xmlns="http://www.w3.org/2000/svg" className="rotate-icon" viewBox="0 0 512 512" width="16" height="16"><path xmlns="http://www.w3.org/2000/svg" d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751   c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0   c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"/></svg>
              </div>
              { IsShow && !click ?
              <div className="lang-selector">
                <button className="lang-selector-btn" onClick={() => {setCurrentLang({language: "EN"}); setIsShown(false);}}>English <span>EN</span><img src="/image/svg/united-kingdom.svg" width="20"></img></button>
                <button className="lang-selector-btn" onClick={() => {setCurrentLang({language: "VI"}); setIsShown(false);}}>Tiếng Việt <span>VI</span><img src="/image/svg/vietnam.svg" width="20"></img></button>
              </div>
              : <></>}
            </div>
            <div className="menu-icon-mobile" onClick={handleClick}>
                  { !click ?
                    <img src="/image/icon-svg/hamburger.svg" width="28"></img>
                      :
                    <img src="/image/icon-svg/close.svg" width="28"></img>
                  }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar