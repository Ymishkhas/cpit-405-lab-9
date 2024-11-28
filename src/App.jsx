import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import RecipeDetails from './components/RecipeDetails.jsx'

function App() {

  return (
    <HashRouter>
      <div className="container">
        <Nav />
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/recipe-details/:id' element={<RecipeDetails/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
