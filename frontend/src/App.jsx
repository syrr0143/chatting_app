import { useState } from 'react'
import Login from './pages/login/Login.jsx'
import Signup from './pages/signup/Signup.jsx'
import Home from './pages/home/Home.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='p-6 h-screen  items-center justify-center '><Home /></div>

    </>
  )
}

export default App
