import React from 'react'
import{Routes,Route} from 'react-router-dom'
import Signup from './signup'
import Login from './Login'
import Nextpage from './Nextpage'

function rout() {
  return (
    <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Nextpage' element={<Nextpage/>}></Route>
    </Routes>
  )
}

export default rout