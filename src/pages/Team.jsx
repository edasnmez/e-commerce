import React from 'react'
import InnerPageHeader from '../layout/InnerPageHeader'
import { ChevronRight } from 'lucide-react'
import cards from '../data/TeamCards.json'
import Footer from '../layout/Footer'

function Team() {
  return (
    <>
    <InnerPageHeader />
    <section className='font-montserrat py-12 flex flex-col items-center justify-center font-bold gap-4 max-[420px]:py-0'>
            <h5 className='text-[#737373]'>WHAT WE DO</h5>
            <h1 className='text-[58px] text-[#252B42] max-[420px]:text-[40px] max-[420px]:px-7 max-[420px]:text-center'>Innovation tailored for you</h1>
            <div className='flex gap-2 max-[420px]:justify-center'>
                <a className='text-[#252B42] text-sm '>Home</a>
                <ChevronRight size={24} color="#bdbdbd" strokeWidth={1.2} className="flex-shrink-0"/>
                <h6 className='font-bold text-sm text-[#BDBDBD]'>Team</h6>
            </div>
    </section>
    <section className='flex gap-2.5 max-[420px]:flex-col'>
         <div className="">
            <img
            src="/public/assets/Team/Hero/1.png"
            alt="Hero 1"
            className="w-full h-auto object-cover"
            />
        </div>
        <div className='flex flex-col gap-2.5  h-auto'>
            <div className='flex gap-2.5 max-[420px]:gap-1.5'>
                <img src="/public/assets/Team/Hero/2.png" alt="" className='w-[49.3%]'/>
                <img src="/public/assets/Team/Hero/3.png" alt="" className='w-[49.3%]'/>
            </div>
            <div className='flex gap-2.5 max-[420px]:gap-1.5'>
                <img src="/public/assets/Team/Hero/4.png" alt="" className='w-[49.3%]'/>
                <img src="/public/assets/Team/Hero/5.png" alt="" className='w-[49.3%]'/>
            </div>
        </div>
    </section>
    <section className='flex flex-col px-[195px] gap-[112px] items-center py-28 font-montserrat font-bold max-[420px]:py-7 max-[420px]:px-6'>
        <h2 className='text-[40px] text-[#252B42]'>Meet Our Team</h2>
        <div className='grid grid-cols-3 gap-x-7 gap-y-28 max-[420px]:grid-cols-1 max-[420px]:gap-7'>
            {cards.map((src,index) => (
                <div key={index} className='flex flex-col'>
                    <img 
                        src={src}
                        alt={`card-${index}`}
                    />
                    <div className='flex flex-col gap-2.5 p-7 items-center justify-center'>
                        <h5 className=' text-[#252B42]'>Username</h5>
                        <h6 className='text-sm text-[#737373]'>Profession</h6>
                        <div className='flex gap-5'>
                            <img src="/public/assets/Team/Cards/facebook.png" alt="" />
                            <img src="/public/assets/Team/Cards/instagram.png" alt="" />
                            <img src="/public/assets/Team/Cards/twitter.png" alt="" />
                        </div>
                    </div>
                </div>

            ))} 
        </div>
    </section>
    <section className='py-20 flex flex-col gap-9 items-center font-bold max-[420px]:px-[41px] font-montserrat'>
            <h2 className='text-[40px] text-[#252B42] text-center'>Start your 14 days free trial</h2>
            <p className='text-sm text-[#737373] w-[28%] text-center max-[420px]:w-full'>
                Met minim Mollie non desert Alamo est sit cliquey dolor 
                do met sent. RELIT official consequent.
            </p>
            <button className='bg-[#23A6F0] px-10 py-3.5 text-white rounded-md text-sm'>
                Try it free now
            </button>
            <div className='flex gap-8'>
                <img src="/public/assets/Team/cta/logos_twitter.png" alt="" />
                <img src="/public/assets/Team/cta/logos_facebook.png" alt="" />
                <img src="/public/assets/Team/cta/instagram.png" alt="" />
                <img src="/public/assets/Team/cta/logos_linkedin-icon.png" alt="" />
            </div>
    </section>
    <Footer />
    </>
  )
}

export default Team