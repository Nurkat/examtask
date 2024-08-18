import React from 'react'
import SingleImg from '../../assets/images/singlepageImg.svg'
import Icon from '../../assets/images/icon.png'
import PhoneIcon from '../../assets/images/phoneIcon.png'
import MessageIcon from '../../assets/images/messageicon.png'
import Header from '../../components/Header'

function SingleTeacher() {
  return (
   <div className='w-[75%] h-[100vh] pt-[50px] pl-[50px] px-[40px] bg-white'>
    <div className='flex justify-end'>
    <Header/>
    </div>
    <div>
    <div className='flex space-x-[105px] items-center '>
        <div className='mx-auto flex flex-col items-center'>
    <img className='mb-[50px]' src={SingleImg} alt="SinglePageImg" width={280} height={280}/>
    <h1 className='font-bold text-[16px] mb-[10px]'>Kristin Watson</h1>
    <p className='text-[14px] font-bold text-[#A7A7A7] mb-[37px]'>Chemistry teacher</p>
    <div className='flex space-x-[25px] mx-auto'>
        <img src={Icon} alt="Icon" width={60} height={60} />
        <img src={PhoneIcon} alt="Icon" width={60} height={60} />
        <img src={MessageIcon} alt="Icon" width={60} height={60} />
    </div>
        </div>
    <div className='w-[335px]'>
        <h2 className='text-[16px] mb-[16px] font-semibold'>About</h2>
        <p className='text-[16px] font-medium text-[#A7A7A7] mb-[30px]'>Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
       <div className='flex space-x-[40px]'>
        <div>
        <strong className='text-[12px] font-semibold'>Age</strong>
        <p className='text-[14px] font-medium text-[#A7A7A7]'>34</p>
        </div>
        <div>
        <strong className='text-[12px] font-semibold'>Gender</strong>
        <p className='text-[14px] font-medium text-[#A7A7A7]'>Male</p>
        </div>
       </div>
    </div>
    </div>
    </div>
   </div>
  )
}

export default SingleTeacher