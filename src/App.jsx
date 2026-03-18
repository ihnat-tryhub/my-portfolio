import Header from './components/Header'
import Mainpage from './components/Mainpage'
import WorkAndProjects from './components/WorkAndProjects'
import UxUiSection from './components/UxUiSection'
import TypographySection from './components/TypographySection'
import CollagesSection from './components/CollagesSection'
import RendersSection from './components/RendersSection'
import PhotosSection from './components/PhotosSection'
import UeSection from './components/UeSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import SubFooter from './components/SubFooter'
import SideNav from './components/SideNav'


function App() {
  return (
    <>
      <Header />
      <SideNav />
      <Mainpage />
      {/*  */}
      <WorkAndProjects />
      <UxUiSection />
      <TypographySection />
      <CollagesSection />
      <RendersSection />
      <PhotosSection />
      <UeSection />
      <Footer />

      <AboutSection />

      <ContactSection />
      <SubFooter />
    </>
  )
}

export default App
