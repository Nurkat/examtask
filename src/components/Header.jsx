import React from 'react'
import { BellIcon } from '../assets/images/icons'
import CustomModal from './CustomModal'
import { useState } from 'react'
import Button from './Button'


function Header() {
  const [OpenModal,setOpenModal] =useState(false)
  function SignOut (){
    localStorage.clear()
    location.pathname = "/"
    location.reload()
}

  return (
    <div className='flex  space-x-[48px] items-center ' >
    <BellIcon/>
    <button  onClick={() => setOpenModal(true)} >
      <p>Log Out</p>
      <CustomModal isOpenModal={OpenModal} setIsOpenModal={setOpenModal}>
        <h2 className='font-bold text-center text-[35px] mb-[30px]'>Do you want log out</h2>
      <div className='flex items-center justify-center space-x-5 px-[20px] '>
        <Button onClick={()=> setOpenModal(false)} width={200}  title={"No"} extraStyle={"bg-red-800" } />
        <Button onClick={SignOut}  width={200} title={"Yes"} extraStyle={"bg-green-800"}/>
      </div>
      </CustomModal>
    </button>
    </div>
  )
}

export default Header