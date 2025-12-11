import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='bg-[#171717] w-full flex flex-col min-h-screen '>
      <BrowserRouter basename="/build_bee_1">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
