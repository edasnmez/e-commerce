import React from 'react'
import InnerPageHeader from '../layout/InnerPageHeader'
import { IconBrandInstagram, IconBrandLinkedinFilled, IconBrandTwitterFilled } from '@tabler/icons-react'
import Footer from '../layout/Footer'


function Contact() {
  return (
    <>
        <InnerPageHeader />
        <section className='px-[195px] flex gap-10 font-montserrat items-center max-[420px]:px-[42px] max-[420px]:flex-col'>
            <div className='flex flex-col gap-8 text-[#252B42] font-bold max-[420px]:justify-center max-[420px]:items-center'>
                <h5>CONTACT US</h5>
                <h1 className='text-[58px] max-[420px]:text-5xl max-[420px]:text-center'>Get in touch today!</h1>
                <p className='text-xl text-[#737373] font-normal'>
                    We know how large objects will act, 
                    but things on a small scale
                </p>
                <h3 className='text-2xl'>Phone : +451 215 215 </h3>
                <h3 className='text-2xl'>Fax : +451 215 215</h3>
                <div className='flex gap-8 text-[#252B42]'>
                    <img src="/public/assets/Contact/logos_twitter.png" alt="" />
                    <img src="/public/assets/Contact/logos_facebook.png" alt="" />
                    <img src="/public/assets/Contact/instagram.png" alt="" />
                    <img src="/public/assets/Contact/linkedin.png" alt="" />
                </div>
            </div> 
            <img src="/public/assets/Contact/none.png" alt="" className='w-1/2 max-[420px]:w-full' />
        </section>
        <section className='px-[195px] py-28  flex flex-col gap-20 font-montserrat items-center text-center text-[#252B42] font-bold max-[420px]:px-[42px] max-[420px]:bg-[#FAFAFA] '>
            <div className='flex flex-col gap-2.5 w-[60%] max-[420px]:w-full'>
                <h6 className='text-sm'>VISIT OUR OFFICE</h6>
                <h2 className='text-[40px]'>We help small businesses with big ideas</h2>
            </div>
            <div className='h-[400px] w-full grid grid-cols-3 max-[420px]:grid-cols-1 max-[420px]:gap-7 max-[420px]:h-auto'>
                <div className='flex flex-col justify-center items-center gap-4 max-[420px]:h-[400px]'>
                    <img src="/public/assets/Contact/phone.png" alt="" />
                    <div>
                        <h6 className='text-sm'>georgia.young@example.com</h6>
                        <h6 className='text-sm'>georgia.young@ple.com</h6>
                    </div>
                    <h5>Get Support</h5>
                    <button className='text-sm text-[#23A6F0] py-4 px-9 border border-[#23A6F0] rounded-4xl'>Submit Request</button>
                </div>
                 <div className='flex flex-col justify-center items-center gap-4 bg-[#252B42] text-white max-[420px]:h-[400px]'>
                    <img src="/public/assets/Contact/location.png" alt="" />
                    <div>
                        <h6 className='text-sm'>georgia.young@example.com</h6>
                        <h6 className='text-sm'>georgia.young@ple.com</h6>
                    </div>
                    <h5>Get Support</h5>
                    <button className='text-sm text-[#23A6F0] py-4 px-9 border border-[#23A6F0] rounded-4xl'>Submit Request</button>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 max-[420px]:h-[400px]'>
                    <img src="/public/assets/Contact/mail.png" alt="" />
                    <div>
                        <h6 className='text-sm'>georgia.young@example.com</h6>
                        <h6 className='text-sm'>georgia.young@ple.com</h6>
                    </div>
                    <h5>Get Support</h5>
                    <button className='text-sm text-[#23A6F0] py-4 px-9 border border-[#23A6F0] rounded-4xl'>Submit Request</button>
                </div>
            </div>
        </section>
        <section className='px-[195px] flex flex-col font-montserrat items-center text-center text-[#252B42] font-bold pb-20 gap-9 max-[420px]:px-[42px]'>
            <img src="/public/assets/Contact/Arrow.png" alt="" />
            <h5>WE Can't WAIT TO MEET YOU</h5>
            <h1 className='text-[58px]'>Let’s Talk</h1>
            <button className='py-4 px-10 bg-[#23A6F0] text-white rounded-md text-sm'>
                Try it free now
            </button>
        </section>
        <Footer />
    </>
  )
}

export default Contact