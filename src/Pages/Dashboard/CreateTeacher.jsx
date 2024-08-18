import { useState } from 'react'
import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom';


function CreateTeacher() {
  const [value,setValue]=useState('');
  console.log(value);
  
  return (
<div className='w-[75%] h-[100vh] px-[40px] bg-white '>
<div className='flex items-center justify-end pt-[19px] '>
    <Header/>
  </div>
  <form className='createTeachersForm  flex justify-between mt-[30px] items-center flex-row'>
      <h2 className='text-[#4F4F4F] text-[20px] font-medium'>Add Teachers</h2>
      <Link to={'/addedteachers'} >
      <button  type="submit" className='px-[14px] py-[11px] text-[14px] font-semibold rounded-[4px] bg-[#509CDB] text-white mb-[28px]'>Save</button>
      </Link>
  </form>
  <div className='flex space-x-[30px] '>
<div className='w-[45%] space-y-[36px]'>
  <label className='flex flex-col gap-[2px]'>
    <span className='text-[14px]  text-[#8A8A8A] font-medium'>Full Name</span>
    <input className='p-[12px] border-[1px] rounded-[4px]  border-[#A7A7A7] text-[14px] text-[#8A8A8A] font-medium ' autoComplete='off' type="text" placeholder='Full Name' required name='fullname'/>
  </label>
  <label className='flex flex-col gap-[2px]'>
    <span className='text-[14px] text-[#8A8A8A] font-medium'>Email address</span>
    <input className='p-[12px] border-[1px] rounded-[4px] border-[#A7A7A7] text-[14px] text-[#8A8A8A] font-medium ' autoComplete='off' type="email" placeholder='Email address' required name='email'/>
  </label>
  <label className='flex flex-col gap-[2px]'>
    <span className='text-[14px] text-[#8A8A8A] font-medium'>Subject</span>
    <select name='subject' className='p-[12px] border-[1px] rounded-[4px] border-[#A7A7A7] text-[14px] text-[#8A8A8A] font-medium '>
      <option value={"chemistry"}>Chemistry</option>
      <option value={"french"}>French</option>
      <option value={"maths"}>Maths</option>
      <option value={"english"}>English</option>
      <option value={"social studies"}>Social studies</option>
      <option value={"home economics"}>Home economics</option>
      <option value={"geography"}>Geography</option>
      <option value={"pschology"}>Pschology</option>
      <option value={"physic"}>Physic</option>
      <option value={"accounting"}>Accounting</option>
      <option value={"c.r.s"}>C.R.s</option>
      <option value={"politics"}>Politics</option>
      </select>
  </label>
  <label className='flex flex-col gap-[2px]'>
    <span className='text-[14px] text-[#8A8A8A] font-medium'>About</span>
    <textarea rows={"3"} className='p-[12px] border-[1px] rounded-[4px] border-[#A7A7A7] text-[14px] text-[#8A8A8A] font-medium ' autoComplete='off' type="text" placeholder=' About' required name='about'/>
  </label>
</div>
<div className='w-[45%] space-y-[36px]'>
<label className='flex flex-col gap-[2px]'>
    <span className='text-[14px] text-[#8A8A8A] font-medium'>Class</span>
    <select name='class' className='p-[12px] border-[1px] rounded-[4px] border-[#A7A7A7] text-[14px] text-[#8A8A8A] font-medium '>
      <option value={"J SS 2"}>J SS 2</option>
      <option value={"JSS 3"}>JSS 3</option>
      <option value={"JSS 3"}>JSS 3</option>
      <option value={"SS 3"}>SS 3</option>
      <option value={"SS 3"}>SS 3</option>
      <option value={"SS 3"}>SS 3</option>
      <option value={"JSS 1"}>JSS 1</option>
      <option value={"JSS 3"}>JSS 3</option>
      <option value={"JSS 4"}>JSS 4</option>
      <option value={"JSS 4"}>JSS 4</option>
      <option value={"JSS 5"}>JSS 5</option>
      <option value={"JSS 1"}>JSS 1</option>
    </select>
  </label>
  <label className='flex flex-col gap-[2px]'>
    <span className='text-[14px] text-[#8A8A8A] font-medium'>Gender</span>
   <select name='gender' className='p-[12px] border-[1px] rounded-[4px] border-[#A7A7A7] text-[14px] text-[#8A8A8A] font-medium'>
    <option value={"male "}>Male</option>
    <option value={"female"}>FeMale</option>
   </select>
  </label>
  <label className='flex flex-col gap-[2px]'>
    <span className='text-[14px] text-[#8A8A8A] font-medium'>Age</span>
    <input className='p-[12px] border-[1px] rounded-[4px] border-[#A7A7A7] text-[14px] text-[#8A8A8A] font-medium ' autoComplete='off' type="date" placeholder=' Age' required name='age'/>
  </label>
  <label className='flex flex-col gap-[2px]'>
    <span className='text-[14px] text-[#8A8A8A] font-medium'>Import Img</span>
    <input className=' hidden p-[12px] border-[1px] rounded-[4px] border-[#A7A7A7] text-[14px] text-[#8A8A8A] font-medium ' autoComplete='off' type="file" placeholder=' Age' required name='user-avatar'/>
  </label>
</div>
  </div>
</div>
  )
}

export default CreateTeacher