import React from 'react'


function HeaderItem({value}) {
  return (
    <>
     <li className='flex space-x-[42px] items-centerx'>
    {value.icon}
     <div >
       <h3 className='mb-[16px]'>{value.title}</h3>
       <p>{value.text}</p>
     </div>
   </li>
    </>
  )
}

export default HeaderItem