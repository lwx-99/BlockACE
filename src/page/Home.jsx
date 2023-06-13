import AboutUs from '../components/about-us/AboutUs'
import HeroSection from '../components/hero/HeroSection'
import Projects from '../components/project/Projects'
import Services from '../components/service/Services'
import OurCustomer from '../components/customer/OurCustomer'
import ContactResource from '../components/contact-resource/ContactResource'

function Home() {
  return (
    <>
        <HeroSection />
        <AboutUs />
        <Services />
        <Projects />
        <OurCustomer />
        <ContactResource />
    </>
  )
}

export default Home