import './App.css'
import About from './componets/about.tsx'
import Courses from './componets/courseType.tsx'
import HeroPage from './componets/heroPage.tsx'
import NavBar from './componets/navBar.tsx'

function App() {
  return (
    <>
       <NavBar />
       <HeroPage/>
       <About />
       <Courses />
       <h1 className=''></h1>
    </>
  )
}

export default App
