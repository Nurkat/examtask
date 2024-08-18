import React from 'react'
import { Routes,Route} from 'react-router-dom'
import { SignIn, SignUp } from '../../Pages/Login'

function LoginPage() {
  return (
  <Routes>
    <Route path='/' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
  </Routes>
  )
}

export default LoginPage