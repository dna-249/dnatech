import React from 'react'
import Home from './components/home'
import Apply from './components/apply'
import {Route,Routes} from "react-router-dom"
const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/apply' element={<Apply />}/>
    </Routes>
    </>
  )
}

export default App