import './App.css'
import About from './componets/about.tsx'
import Courses from './componets/courseType.tsx'
import HeroPage from './componets/heroPage.tsx'
import NavBar from './componets/navBar.tsx'
import Footer from './componets/footer.tsx'
import WhyUs from './componets/whyUs.tsx'

function App() {
  return (
    <>
       <NavBar />
       <HeroPage/>
       <About />
       <Courses />
       <WhyUs />
       <Footer />
    </>
  )
}

export default App
