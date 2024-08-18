import React from 'react'

function Button({extraStyle,title,type,width,onClick}) {
  return (
    <button  onClick={onClick} style={{width:`${width}px`}}  type={type}  className={`bg-[#2D88D4] w-full text-white py-[12px] rounded-[5px] font-bold opacity-[40%]  ${extraStyle}`}>{title}</button>
  )
}

export default Button