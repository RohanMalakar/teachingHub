import './App.css'
import About from './componets/about.tsx'
import HeroPage from './componets/heroPage.tsx'
import NavBar from './componets/navBar.tsx'

function App() {
  return (
    <>
       <NavBar />
       <HeroPage/>
       <About />
       <h1 className=''></h1>
    </>
  )
}

export default App
