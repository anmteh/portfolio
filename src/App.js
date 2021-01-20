import React from 'react'
import { GlobalStyle } from './components/GlobalStyle'
import { AboutUs } from './pages/AboutUs'
// Pages
import { ContactUs } from './pages/ContactUs'
import { OurWork } from './pages/OurWork'
import { Nav } from './components/Nav'
import { MovieDetail } from './pages/MovieDetail'
// Router
import { Switch, Route, useLocation } from 'react-router-dom'
//Animation
import { AnimatePresence } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/portfolio' component={AboutUs} />
          <Route exact path='/portfolio/work' component={OurWork} />
          <Route path='/portfolio/work/:id' component={MovieDetail} />
          <Route exact path='/portfolio/contact' component={ContactUs} />
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
