import { ArrowRight } from 'lucide-react'
import React from 'react'


function InnerPageHeader() {
  return (
   <header className='flex items-center  justify-between w-full h-[80px] px-[195px] bg-white font-montserrat max-[420px]:px-[38px]'>
        <h3 className="text-[24px] font-bold text-[#252B42] ">Bandage</h3>
        <nav className="text-[14px] font-bold text-[#737373]  max-[420px]:hidden">
          <ul className="flex space-x-4">
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#" >
                Product 
              </a>
            </li>
            <li>
              <a href="#">
                Pricing
              </a>
            </li>
           
            <li>
              <a href="#">
                Contact
              </a>
            </li>
          </ul>
    </nav>
    <div className='flex gap-11 text-sm font-bold items-center'>
        <a className='text-[#23A6F0]'>Login</a>
        <button className='flex gap-3.5 py-3.5 px-6 text-white bg-[#23A6F0]  rounded-md'>Become a member <ArrowRight color="#FFFFFF" strokeWidth={1.2} /></button>
    </div>

    </header>

  )
}

export default InnerPageHeader