import React from 'react'
import InnerPageHeader from '../layout/InnerPageHeader'
import Clients from '../layout/Clients'
import Footer from '../layout/Footer'


function About() {
  return (
    <>
    <InnerPageHeader />
    <section className='flex gap-x-20 pl-[195px]  items-center font-montserrat max-[420px]:flex-col max-[420px]:pl-0 '>
        <div className='flex flex-col text-[#252B42] font-bold gap-9 w-[32%] max-[420px]:w-full max-[420px]:px-[54px] max-[420px]:items-center' >
            <h5>ABOUT COMPANY</h5>
            <h1 className='text-[58px] max-[420px]:[40px] '>ABOUT US</h1>
            <p className='text-xl text-[#737373] font-normal'>
                    We know how large objects will act, 
                    but things on a small scale
            </p>
            <button className='text-sm text-white bg-[#23A6F0] py-4 px-10  rounded-md w-[195px]'>Get Quote Now</button>
        </div>
        <div className="w-full md:w-auto mt-8 md:mt-0 flex justify-center">
            <img
            src="/public/assets/About/header/1.png"
            alt="About"
            className="w-full max-[420px]:w-3/5 object-cover"
            />
        </div>
    </section>
    <section className='w-full px-[195px] py-6 flex gap-12 items-center font-montserrat max-[420px]:flex-col max-[420px]:px-[54px] '>
        <div className='flex flex-col gap-6 w-[80%]   max-[420px]:w-full max-[420px]:text-center '>
            <h5 className='text-sm text-[#E74040] '>Problems trying</h5>
            <p className='font-bold text-2xl  text-[#252B42] '>
                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            </p>
        </div>
        <div className='w-full max-[420px]:text-center'>
            <p className='text-sm text-[#737373] '>
                Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics 
            </p>
        </div>
    </section>
    <section className='px-[195px] py-20 flex  justify-between font-montserrat font-bold max-[420px]:flex-col max-[420px]:px-0'>
        <div className='flex flex-col items-center'>
            <h1 className='text-[58px] text-[#252B42]'>15K</h1>
            <h5 className='text-[#737373]'>Happy Customers</h5>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-[58px] text-[#252B42]'>150K</h1>
            <h5 className='text-[#737373]'>Monthly Visitors</h5>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-[58px] text-[#252B42]'>15</h1>
            <h5 className='text-[#737373]'>Countries  Worldwide</h5>
        </div>
        <div className='flex flex-col items-center'>
            <h1 className='text-[58px] text-[#252B42]'>100+</h1>
            <h5 className='text-[#737373]'>Top Partners</h5>
        </div>
    </section>
    <section className='px-[210px] relative py-28 max-[420px]:px-[54px]'>
        <img src="/public/assets/About/header/2.png" alt=""  className="z-0 rounded-[20px] w-full max-w-full object-cover max-[420px]:w-full max-[420px]:h-auto"/>
        <div className="absolute z-10 p-8 rounded-full bg-[#23A6F0] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-[420px]:p-6">
             <img src="/public/assets/About/header/play.png" alt="" />
        </div>
    </section>
    <section className='px-[195px] py-28 flex flex-col justify-center items-center font-montserrat gap-28 max-[420px]:px-0'  >
        <div className='flex flex-col gap-2.5 items-center'>
            <h2 className='text-[40px]  font-bold  text-[#252B42] '>Meet Our Team</h2>
            <p className='text-sm text-[#737373] text-center'>
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics 
            </p>
        </div>
         <div className='grid grid-cols-3 gap-x-7 gap-y-28 max-[420px]:grid-cols-1 max-[420px]:gap-7 font-bold'>
                        <div className='flex flex-col'>
                            <img 
                                src='/public/assets/Team/Cards/7.png'
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

                         <div className='flex flex-col'>
                            <img 
                                src='/public/assets/Team/Cards/8.png'
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

                        <div className='flex flex-col'>
                            <img 
                                src='/public/assets/Team/Cards/4.png'
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
        
                </div>
    </section>
    <section className='px-[195px] flex flex-col gap-7  items-center bg-[#FAFAFA] font-montserrat pt-20 max-[420px]:flex-col max-[420px]:px-[54px]'>
        <h2 className='text-[40px] font-bold text-[#252B42] '>Big Companies Are Here</h2>
        <p className='text-sm text-[#737373] text-center'>
                Problems trying to resolve the conflict between <br />
                the two major realms of Classical physics: Newtonian mechanics 
        </p>
    </section>
    <Clients />
    <section className='flex w-full font-montserrat max-[420px]:flex-col'>
        <div className=' bg-[#2A7CC7] text-white font-bold w-[60%] h-[636px] flex justify-center items-center max-[420px]:w-full'>
            <div className='flex flex-col w-3/5  gap-6 max-[420px]:w-full max-[420px]:px-[54px]' >
            <h5 >WORK WITH US</h5>
            <h2 className='text-[40px]'>Now Let’s grow Yours</h2>
            <p className='text-sm  font-normal'>
                The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
            </p>
            <button className='px-10 py-3.5 text-white border border-white rounded-md w-[130px] text-sm'>
                Button
            </button>
        </div>
        </div>
        <img src="/public/assets/About/header/3.png" alt="" className='max-[420px]:hidden'/>
    </section>
    <Footer />
    </>
  )
}

export default About






