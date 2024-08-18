import React from 'react'

function Input ({placeholder,name,type,extraClass,isrequired}  ) {
  return (
   <input required={isrequired} className={`p-[13px] w-full text-black focus:shadow-lg duration-300 border-[2px] outline-none border-[#A7A7A7] rounded-[4px] ${extraClass}`} placeholder={placeholder} name={name} type={type}/>
  )
}

export default Input