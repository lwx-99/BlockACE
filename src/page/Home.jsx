import AboutUs from '../components/about-us/AboutUs'
import HeroSection from '../components/hero/HeroSection'
import Projects from '../components/project/Projects'
import Services from '../components/service/Services'
import OurCustomer from '../components/customer/OurCustomer'
import ContactResource from '../components/contact-resource/ContactResource'
import OurTeam from '../components/our-team/OurTeam'
import Media from '../components/media/Media'
import CardSlide from '../components/cardSlide/CardSlide'

function Home() {
  return (
    <>
        <HeroSection />
        <AboutUs />
        <OurTeam />
        <Projects />
        <OurCustomer />
        <Media />
    </>
  )
}

export default Home