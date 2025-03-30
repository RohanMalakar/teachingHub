import './App.css'
import AboutPage from './pages/aboutPage'
import CoursePage from './pages/coursePage'
import HomePage from './pages/homePage'
import { Routes, Route} from 'react-router-dom'
function App() {
  return (
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/courses' element={<CoursePage/>}/>
    </Routes>
  )
}

export default App
