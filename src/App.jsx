import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/navbar/NavBar'

function App() {
  return (
    <>
      <Router>
        <NavBar />
      </Router>
    </>
  )
}

export default App
