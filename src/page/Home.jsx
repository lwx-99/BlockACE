import AboutUs from '../components/about-us/AboutUs'
import HeroSection from '../components/hero/HeroSection'
import Projects from '../components/project/Projects'
import Services from '../components/service/Services'
import OurCustomer from '../components/customer/OurCustomer'
import ContactResource from '../components/contact-resource/ContactResource'
import OurTeam from '../components/our-team/OurTeam'

function Home() {
  return (
    <>
        <HeroSection />
        <AboutUs />
        <Services />
        <OurTeam />
        <Projects />
        <OurCustomer />
    </>
  )
}

export default Home