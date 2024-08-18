import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
function SingUp() {
  return (
    <div className='bg-gray-50 h-[100vh]'>
    <h2 className='text-center text-[36px] font-semibold pt-[40px] mb-[32px]'>Welcome, Sign up</h2>
    <div  className='w-[512px] flex  mx-auto bg-white pb-[30px]'>
  <form autoComplete='off' className='w-[300px] mx-auto mt-[53px] flex flex-col gap-[14px] items-center text-[white]'>
    <p className='w-[238px] text-center text-[16px] font-medium text-[#667085] mb-[14px]'>It is our great pleasure to have you on board!</p>
     <Input isrequired={true} placeholder={'Enter your Email'} type={'Email'} name={'email'} extraClass={'mb-[14px]'} />
     <Input isrequired={true} placeholder={'Create your Login'} type={'login'} name={'login'} extraClass={'mb-[14px]'} />
     <Input isrequired={true} placeholder={'Create your Password'} type={'password'} name={'password'} extraClass={'mb-[14px]'} />
     <Link  className='w-full text-blue bg-[#2D88D4] py-[12px] rounded-[3px] text-[14px] flex flex-col items-center' to={'/'}>Sign Up</Link>
  </form>
    </div>
    </div> 
  )
}

export default SingUp