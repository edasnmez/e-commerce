import { AlarmClock, ChartArea, ChevronRight } from 'lucide-react'
import React from 'react'

function Blog() {
  return (
    
    <section className='flex flex-col items-center px-[195px] py-28 bg-white font-montserrat gap-20 max-[420px]:px-11'>
        <div className='flex flex-col items-center font-bold gap-2.5'>
            <h6 className='text-sm text-[#23A6F0]'>Practice Advice</h6>
            <h3 className='text-[#252B42]  text-4xl'>Featured Posts</h3>
        </div>
        <div className='cards flex justity-center w-full gap-7 max-[420px]:flex-col'>
            <div className='card-one w-1/3  shadow-[0_2px_4px_rgba(0,0,0,0.1)] max-[420px]:w-full'>
               <div className='relative'>
                    <img src="src/assets/blog-one.png" alt="" />

                    <div className="absolute font-semibold text-xs text-white px-2 py-0.5 rounded-xs top-5 left-5 bg-[#E74040] tracking-widest">
                            NEW
                    </div>
                </div>
                <div className='flex flex-col  items-start px-6 pt-6 pb-9 gap-2.5'>
                    <div className='tags flex gap-3.5 text-xs'>
                        <a href="#" className='text-[#8EC2F2]'>Google</a>
                        <a href="#" className='text-[#737373]'>Trending</a>
                        <a href="#" className='text-[#737373]' >New</a>
                    </div>
                    <h4 className='text-xl text-[#252B42]'>Loudest à la Madison #1 (L'integral)</h4>
                    <p className='text-[13px] text-[#737373]'>
                        We focus on ergonomics and meeting 
                        you where you work. It's only a 
                        keystroke away.
                    </p>
                    <div className='flex w-full justify-between py-3.5'>
                        <div className='flex gap-1'>
                            <AlarmClock size={16} color="#23A6F0" />
                            <span className='text-[#737373] text-xs'>22 April 2021</span>
                        </div>
                        <div className='flex gap-1 '>
                            <ChartArea size={16} color="#23856D" />
                            <span className='text-[#737373] text-xs'>10 comments</span>
                        </div>
                    </div>
                    <a href='#' className='flex gap-2 font-bold text-sm text-[#737373] items-center'>Learn More <ChevronRight size={28} color="#23A6F0" strokeWidth={1} /></a>
                </div>

            </div>


             <div className='card-two w-1/3 shadow-[0_2px_4px_rgba(0,0,0,0.1)] max-[420px]:w-full'>
               <div className='relative'>
                    <img src="src/assets/blog-two.png" alt="" />

                    <div className="absolute font-semibold text-xs text-white px-2 py-0.5 rounded-xs top-5 left-5 bg-[#E74040] tracking-widest">
                            NEW
                    </div>
                </div>
                <div className='flex flex-col  items-start px-6 pt-6 pb-9 gap-2.5'>
                    <div className='tags flex gap-3.5 text-xs'>
                        <a href="#" className='text-[#8EC2F2]'>Google</a>
                        <a href="#" className='text-[#737373]'>Trending</a>
                        <a href="#" className='text-[#737373]' >New</a>
                    </div>
                    <h4 className='text-xl text-[#252B42]'>Loudest à la Madison #1 (L'integral)</h4>
                    <p className='text-[13px] text-[#737373]'>
                        We focus on ergonomics and meeting 
                        you where you work. It's only a 
                        keystroke away.
                    </p>
                    <div className='flex w-full justify-between py-3.5'>
                        <div className='flex gap-1'>
                            <AlarmClock size={16} color="#23A6F0" />
                            <span className='text-[#737373] text-xs'>22 April 2021</span>
                        </div>
                        <div className='flex gap-1'>
                            <ChartArea size={16} color="#23856D" />
                            <span className='text-[#737373] text-xs'>10 comments</span>
                        </div>
                    </div>
                    <a href='#' className='flex gap-2 font-bold text-sm text-[#737373] items-center'>Learn More <ChevronRight size={28} color="#23A6F0" strokeWidth={1} /></a>
                </div>

            </div>

             <div className='card-three w-1/3 shadow-[0_2px_4px_rgba(0,0,0,0.1)] max-[420px]:w-full'>
               <div className='relative'>
                    <img src="src/assets/blog-three.png" alt="" />

                    <div className="absolute font-semibold text-xs text-white px-2 py-0.5 rounded-xs top-5 left-5 bg-[#E74040] tracking-widest">
                            NEW
                    </div>
                </div>
                <div className='flex flex-col  items-start px-6 pt-6 pb-9 gap-2.5'>
                    <div className='tags flex gap-3.5 text-xs'>
                        <a href="#" className='text-[#8EC2F2]'>Google</a>
                        <a href="#" className='text-[#737373]'>Trending</a>
                        <a href="#" className='text-[#737373]' >New</a>
                    </div>
                    <h4 className='text-xl text-[#252B42]'>Loudest à la Madison #1 (L'integral)</h4>
                    <p className='text-[13px] text-[#737373]'>
                        We focus on ergonomics and meeting 
                        you where you work. It's only a 
                        keystroke away.
                    </p>
                    <div className='flex w-full justify-between py-3.5'>
                        <div className='flex gap-1'>
                            <AlarmClock size={16} color="#23A6F0" />
                            <span className='text-[#737373] text-xs'>22 April 2021</span>
                        </div>
                        <div className='flex gap-1'>
                            <ChartArea size={16} color="#23856D" />
                            <span className='text-[#737373] text-xs'>10 comments</span>
                        </div>
                    </div>
                    <a href='#' className='flex gap-2 font-bold text-sm text-[#737373] items-center'>Learn More <ChevronRight size={28} color="#23A6F0" strokeWidth={1} /></a>
                </div>

            </div>

        </div>

    </section>
    
  )
}

export default Blog