import React from 'react'

export default function Card({title, children} : {title : string, children : React.ReactNode}) {
  return (
    <div className='max-w-[455px] drop-shadow-lg mb-[60px]'>
        {title && <h3 className='bg-[#D0F7FA] py-[29px] px-[29px] text-[18px] rounded-[20px_20px_0px_0px] text-black font-bold'>
            {title}
        </h3>}
        <div className={`bg-white px-[30px] py-[38px] rounded-b-[20px]`}>
            {children}
        </div>
    </div>
  )
}
