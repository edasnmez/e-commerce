import { Download } from 'lucide-react'
import React from 'react'

function SecondaryPopularCard() {
  return (
    <section className='px-[180px] flex py-12 font-montserrat max-[420px]:px-0  max-[420px]:flex-col-reverse'>

            
            <div className='w-2/5 gap-4  py-20 flex flex-col  items-center justify-center bg-[#FAFAFA] max-[420px]:w-full'>
                    <h5 className='font-bold text-2xl text-[#252B42]'>MOST POPULAR</h5>
                    <p className='text-sm text-[#737373] font-bold w-3/4 text-center'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                    </p>
                    <img src="src/assets/spc1.png" alt=""  className='py-9'/>
                    <a href="#" className='text-[#252B42] font-bold text-sm'>English Department</a>
                    <div className='flex gap-2.5'>
                                        <span className='text-[#737373] '><Download size={20} strokeWidth={1.5} /></span>
                                        <span className='text-[#737373] font-bold text-sm'>15 Sales</span>
                    </div>  
                    <div className='flex gap-1.5 px-0.5 py-1'>
                                        <span className='text-[#BDBDBD] font-bold text-base line-through'>$16.48</span>
                                        <span className='text-[#23856D] font-bold text-base'>$6.48</span>
                    </div>   
                    <div className='flex gap-1.5'>
                        <span className='w-4 h-4  rounded-full bg-[#23A6F0]'></span>
                        <span className='w-4 h-4 rounded-full bg-[#23856D]'></span>
                        <span className='w-4 h-4 rounded-full bg-[#E77C40]'></span>
                        <span className='w-4 h-4 rounded-full bg-[#252B42]'></span>
                    </div>                
            </div>
            <img src="src/assets/spc2.png" alt="" className='w-3/5 max-[420px]:w-full'/>
    </section>
  )
}

export default SecondaryPopularCard