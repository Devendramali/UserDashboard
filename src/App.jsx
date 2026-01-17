import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Sidebar from './component/Sidebar'
import Header from './component/Header'
import Auth from './Routes/Auth'

function App() {
  const [search, setSearch] = useState("")

  
  return (
    <>
   <BrowserRouter>
      
      <div className="app-layout">
        <Sidebar />
        <div className="main">
          <Header search={search} setSearch={setSearch} />
          <Auth search={search} />
        </div>
      </div>
    </BrowserRouter>
    
    </>
  )
}

export default App
