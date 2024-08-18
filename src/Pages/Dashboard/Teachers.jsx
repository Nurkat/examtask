import React from 'react'
import Header from '../../components/Header'
import Koala from '../../assets/images/koalaImg.svg'
import { HeadphonesIcon } from '../../assets/images/icons'
import { ArrowIcon } from '../../assets/images/icons'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'

function Teachers() {
  return (
    <>
<div className='w-[75%] h-[100vh] px-[40px] bg-white '>
<div className='flex items-center justify-end pt-[19px] '>
    <Header/>
  </div>
  <div className='flex justify-between mt-[22px] items-center'>
    <h2 className='text-[#4F4F4F] text-[20px] font-medium'>Teachers</h2>
    <Link to={'/createTeacher'}>
    <button className='px-[12px] py-[11px] text-[14px] font-semibold rounded-[4px] bg-[#509CDB] text-white mb-[28px]'>Add Teachers</button>
    </Link>
  </div>
  <div>
    <Input type={"text"} placeholder={"Search for a student by name or email"}/>
  </div>
  <div className='bg-slate-300 rounded-md w-full h-[60vh] mt-[30px] flex justify-center text-center'>
    <div className='absolute'>
      <img src={Koala} alt="" />
      <p className='text-[#4F4F4F] text-[28px] font-semibold'>No Teachers at this time</p>
      <span className='text-[#4F4F4F] text-[14px] font-medium'>Teachers will appear here after they enroll in your school.</span>
    </div>
  </div>
    <button className="bg-[#152259] space-x-[7px] p-[10px] rounded-[30px] flex items-center relative left-[660px] bottom-[80px]">
            <HeadphonesIcon />
            <p className="text-white pl-10px pr-[20px]">Support</p>
            <ArrowIcon />
          </button>
</div>
    </>
  ) 
}

export default Teachers