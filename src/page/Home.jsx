import AboutUs from '../components/about-us/AboutUs'
import HeroSection from '../components/hero/HeroSection'
import Projects from '../components/project/Projects'
import Services from '../components/service/Services'

function Home() {
  return (
    <>
        <HeroSection />
        <AboutUs />
        <Services />
        <Projects />
    </>
  )
}

export default Home