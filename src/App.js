import React from 'react'
import { CryptoCars } from './component/CryptoCars'
import { Routes, Route } from 'react-router-dom'
import { CryptoDetails } from './component/CryptoDetails'



const App = () => {
  return (
    <>
 <h1 className='stick top-0 text-center text-[30px] font-bold bg-slate-600 mb-5 '>Coinranking Using RapidApi</h1>


      <Routes>
        <Route path='/' element={<CryptoCars />} />
        <Route path='/crypto/:id' element={<CryptoDetails />} />
      </Routes>
      {/* <CryptoCars /> */}

    </>
  )
}

export default App