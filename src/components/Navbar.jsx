import React from 'react'
import {StudentsIcon,DashboardIcon,BillingIcon, SettingsIcon, ExamsIcon, FeaturesIcon } from '../assets/images/icons'
import NavbarItem from './NavbarItem'
import SiteImg from '../../src/assets/images/siteImg.png'

function Navbar() {
  const NavbarList =[
    {
      id:1,
      title:"Dashboard",
      path:"/",
      icon: <DashboardIcon/>
    },
    {
      id:2,
      title:"Teachers",
      path:"/teachers",
      icon: <DashboardIcon/>
    },
    {
      id:3,
      title:"Students",
      path:"/students",
      icon: <StudentsIcon/>
    },
    {
      id:4,
      title:"Billing",
      path:"/billing",
      icon: <BillingIcon/>
    },
    {
      id:5,
      title:"Settings and profile",
      path:"/SettingsProfile",
      icon: <SettingsIcon/>
    },
    {
      id:6,
      title:"Exams",
      path:"/exams",
      icon: <ExamsIcon/>
    },
    {
      id:7,
      title:"Features",
      path:"/features",
      icon: <FeaturesIcon/>
    },
  ]
  return (
    <div className='w-[25%] h-[100vh] pt-[26px]  bg-[#152259]  '>
      <div className='flex flex-col pb-[35px] border-b-[2px] border-slate-300 '>
        <label>
         <img className='mx-auto' src={SiteImg} alt="" width={60} height={60} />
         <input className='hidden' type="file" />
        </label>
      <h2 className='text-white font-semibold text-[14px] mx-auto mt-[22px]'>Udemy Inter. school</h2>
      </div>
      <ul className='mt-[95px] space-y-[20px] ml-[44px] pr-[24px] absolute'>
       {NavbarList.map(item =><NavbarItem key={item.id} item={item}/>)}
         <button className='relative left-[180px] bottom-[38px] text-[10px] font-semibold text-[#000000] py-[2px] px-[8px] rounded-lg bg-[#B9D7F1]'>New</button>
      </ul>
    </div>
  )
}

export default Navbar