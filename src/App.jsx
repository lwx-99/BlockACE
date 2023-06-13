import React from 'react'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './components/navbar/NavBar'
import Home from './page/Home';
import Footer from './components/footer/Footer';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
