import { useState } from 'react'
import Header from './components/Header.jsx'
import HomePage from './pages/Home-page.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <HomePage />
    <Footer />
    </>
  )
}

export default App
