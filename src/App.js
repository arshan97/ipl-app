import { AnimatePresence } from "framer-motion"
import React from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import GlobalStyle from "./components/GlobalStyle"
import Navbar from "./components/Navbar"
import AboutUs from "./pages/AboutUs"
import Teams from "./pages/Teams"

function App() {
  const location = useLocation()
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>

          <Route path="/teams">
            <Teams />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
