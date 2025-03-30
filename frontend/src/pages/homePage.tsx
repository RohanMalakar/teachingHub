import About from "../componets/about.tsx"
import Courses from "../componets/courseType.tsx"
import Footer from "../componets/footer.tsx"
import HeroPage from "../componets/heroPage.tsx"
import NavBar from "../componets/navBar.tsx"
import InfiniteSlider from "../componets/ourActivity.tsx"
import WhyUs from "../componets/whyUs.tsx"


function HomePage() {
  return (
    <>
       <NavBar />
       <HeroPage/>
       <InfiniteSlider />
       <About />
       <Courses />
       <WhyUs />
       <Footer />
    </>
  )
}

export default HomePage;