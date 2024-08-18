

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Context } from '../../context/Context'


function SignIn() {
  const {setToken} = useContext(Context)
  const  handleSubmitLogin = (e) =>{
    e.preventDefault()
    const data ={
      login:e.target.login.value.trim(),
      password:e.target.password.value.trim()
    }
    if(data.login == "nurkat" && data.password == "123"){
      setToken(data) 
      e.target.reset()

    }
    else{
       alert ("Something is wrong")
    }
    
  }
  return (
    <div className='bg-gray-50 h-[100vh]'>
    <h2 className='text-center text-[36px] font-semibold pt-[40px]'>Welcome, Log into you account</h2>
    <div className='w-[512px] flex  mx-auto bg-white mt-[53px] pt-[72px] pb-[39px] '>
  <form onSubmit={handleSubmitLogin} autoComplete='off' className='w-[300px] mx-auto flex flex-col gap-[14px] items-center text-[white]'>
    <p className='w-[238px] text-center text-[16px] font-medium text-[#667085] mb-[14px]'>It is our great pleasure to have you on board!</p>
     <Input  isrequired={true} placeholder={'Enter your Login'} type={'text'} name={'login'} extraClass={'mb-[14px]'} />
     <Input isrequired={true} placeholder={'Enter Password'} type={'password'} name={'password'} extraClass={'mb-[14px]'} />
     <Button title={"Login"} type={"submit"}/>
    <Link to={'/sign-up'} className='text-[#2D88D4]  opacity-[40%]'>Sign-up</Link>
  </form>
    </div>
    </div>
  )
}

export default SignIn