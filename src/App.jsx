
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Navbar from './components/navbar'
import Landing from './pages/landing'
import About from './pages/about'
import Contact from './pages/contact'
import Footer from './components/footer'
import Control from './pages/control'
import Fire from './pages/fire'
import Meter from './pages/meter'
import Electrical from './pages/electrical'

function App() {

  return (
    <>
       <BrowserRouter>
      <Navbar/>
        <Routes> 
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About/>} />
          <Route path="/electrical" element={<Electrical/>} />
          <Route path="/control" element={<Control/>} />
          <Route path="/fire" element={<Fire/>} />
          <Route path="/meter" element={<Meter/>} />
          <Route path="/contact" element={<Contact/>} />
          {/* <Route path="/*" element={<PageNotFound />} /> */}

        </Routes>
        <Footer/>
      </BrowserRouter>
      
     
     
    </>
  )
}

export default App
