import React from 'react'

function PrimaryPopularCard() {
  return (
    <section className='px-[180px] bg-white flex flex-col gap-7 py-12 font-montserrat  max-[420px]:px-0'>
        <div className='flex gap-9 bg-[#FAFAFA] h-[600px] max-[420px]:flex-col max-[420px]:h-auto'>
            <img src="src/assets/ppc1.png" alt="" className='w-3/5 max-[420px]:w-full'/>
            <div className='w-2/5 gap-4 flex flex-col  items-center justify-center max-[420px]:w-full max-[420px]:px-9'>
                    <h5 className='font-bold text-2xl text-[#252B42] mt-10'>MOST POPULAR</h5>
                    <p className='text-sm text-[#737373] w-3/4 text-center max-[420px]:w-full'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                    <img src="src/assets/ppc2.png" alt=""  className=''/>
                    <a href="#" className='text-[#252B42] font-bold text-sm'>English Department</a>
                    <div className='flex gap-1.5'>
                                        <span className='text-[#BDBDBD] font-bold text-base line-through'>$16.48</span>
                                        <span className='text-[#23856D] font-bold text-base'>$6.48</span>
                    </div>                  
            </div>
        </div>

        <div className='flex max-[420px]:flex-col'>
            <div className='w-1/4 p-6 flex gap-5 max-[420px]:w-full max-[420px]:px-9'>
                <h2 className='text-[#E74040] font-bold text-[40px] leading-none'>1.</h2>
                <div className='flex flex-col gap-1'>
                    <h6 className='text-[#252B42] font-bold text-sm'>Easy to use</h6>
                    <p className='text-xs text-[#737373] font-bold'>
                        Things on a very  small that you have any direct
                    </p>
                </div>
            </div>
            <div className='w-1/4 p-6 flex gap-5 max-[420px]:w-full max-[420px]:px-9'>
                <h2 className='text-[#E74040] font-bold text-[40px] leading-none'>2.</h2>
                <div className='flex flex-col gap-1'>
                    <h6 className='text-[#252B42] font-bold text-sm'>Easy to use</h6>
                    <p className='text-xs text-[#737373] font-bold'>
                        Things on a very  small that you have any direct
                    </p>
                </div>
            </div>
            <div className='w-1/4 p-6 flex gap-5 max-[420px]:w-full max-[420px]:px-9'>
                <h2 className='text-[#E74040] font-bold text-[40px] leading-none'>3.</h2>
                <div className='flex flex-col gap-1'>
                    <h6 className='text-[#252B42] font-bold text-sm'>Easy to use</h6>
                    <p className='text-xs text-[#737373] font-bold'>
                        Things on a very  small that you have any direct
                    </p>
                </div>
            </div>
            <div className='w-1/4 p-6 flex gap-5 max-[420px]:w-full max-[420px]:px-9'>
                <h2 className='text-[#E74040] font-bold text-[40px] leading-none'>4.</h2>
                <div className='flex flex-col gap-1'>
                    <h6 className='text-[#252B42] font-bold text-sm'>Easy to use</h6>
                    <p className='text-xs text-[#737373] font-bold'>
                        Things on a very  small that you have any direct
                    </p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default PrimaryPopularCard