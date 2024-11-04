import { useState } from 'react'
import LoginSignup from './components/Login'
import Chat from './components/Chat'
import './App.css'
import {Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/chat" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
