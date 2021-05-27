import Topbar from './components/topbar/Topbar.js'
import Intro from './components/intro/Intro.js'
import Works from './components/works/Works.js'
import Portfolio from './components/portfolio/Portfolio.js'

import Contact from './components/contact/Contact.js'
import './app.scss'
import {useState} from "react";
import Menu from './components/menu/Menu.js'



function App(){

  const[menuOpen , setMenuOpen] = useState(true)
  return(
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        
        <Contact/>
      </div>
      
      <contact/>
    </div>
  )
}
export default App;