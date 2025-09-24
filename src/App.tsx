import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'



function App() {

  return (
    <Router>
      {/* Navbar should be fixed at the top centered */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>
      <div>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
