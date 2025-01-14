import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Coin from './pages/Coin/Coin'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div className='app'>
      <Navbar />  

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/coin/:coinId' element={<Coin />} />
      </Routes>

      
      {/* <p>&#8364</p> */}
      
    </div>
  )
}

export default App


// CG-wBPTaWtR7f7DF8pF7U3YpXkr	