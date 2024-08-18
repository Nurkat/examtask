import React from 'react'
import Header from '../../components/Header'
import Input from '../../components/Input'
import { Link } from 'react-router-dom'
import Kristin from '../../assets/images/kristin.svg'

function AddedTeachers() {
  return (
    <>
    <div  className='w-[75%] h-[100vh] px-[40px] bg-white '>
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
   <div>
<table className='w-[100%] mt-[11px] mb-[20px]'>
    <thead className='mb-[20px]'>
        <tr>
            <th className='font-bold text-[12px] text-[#424242] text-left p-3'>Name</th>
            <th className='font-bold text-[12px] text-[#424242] text-left p-3'>Subject</th>
            <th className='font-bold text-[12px] text-[#424242] text-left p-3'>Class</th>
            <th className='font-bold text-[12px] text-[#424242] text-left p-3'>Email address</th>
            <th className='font-bold text-[12px] text-[#424242] text-left p-3'>Gender</th>
            <th className='font-bold text-[12px] text-[#424242] text-left p-3'>Action</th>
        </tr>
    </thead>
    <tbody className=' flex justify-between space-y-[40px]'>
        <tr className='flex' >
         <td className='flex space-x-[7px] items-center '>
            <Link to={'/singleteacher'}>
            <img src={Kristin} alt="Kristin" width={24} height={24} />
            </Link>
            <p className='font-medium text-[12px] text-[#4F4F4F]'>Kristin Watson</p>
         </td>
         <td className='flex space-x-[7px] items-center'>
            <p className='font-medium text-[12px] text-[#4F4F4F]'>Chemistry</p>
         </td>
         <td className='flex space-x-[7px] items-center'>
            <p className='font-medium text-[12px] text-[#4F4F4F]'>J SS 2</p>
         </td>
         <td className='flex space-x-[7px] items-center'>
            <p className='font-medium text-[12px] text-[#4F4F4F]'>michelle.rivera@example.com</p>
         </td>
         <td className='flex space-x-[7px] items-center'>
            <p className='font-medium text-[12px] text-[#4F4F4F]'>Female</p>
         </td>
         <td className='flex space-x-[7px] items-center'>
             <button className='bg-green-500 px-[10px] py-[7px] rounded-[10px] text-white'>Update</button>
             <button className='bg-red-500 px-[10px] py-[7px] rounded-[10px] text-white'>Delete</button>
             <button className='bg-gray-500 px-[10px] py-[7px] rounded-[10px] text-white'>More</button>
         </td>

        </tr>
    </tbody>
</table>


    </div>


    </div>

    </>
  )
}

export default AddedTeachers