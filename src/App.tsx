// @ts-nocheck

import Header from './components/header/header'
import Footer from './components/footer/footer'
import { Routes, Route } from 'react-router-dom'
import Home from './components/home/home'
import ContactUs from './components/pages/contact-us'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
