import React from 'react'
import Header from '../layout/Header'
import { ChevronLeft, ChevronRight, Eye, Heart, ShoppingCart } from 'lucide-react'
import cards from "../data/productDetailData.json";
import Clients from '../layout/Clients';
import Footer from '../layout/Footer';

function ProductDetailPage() {
  return (
    
    <>
    <Header />
     <section className='bg-[#FAFAFA] font-montserrat py-6 px-[205px]'>
            <div className='flex gap-2 max-[420px]:justify-center'>
                <a className='text-[#252B42] text-sm font-bold'>Home</a>
                <ChevronRight size={30} color="#bdbdbd" strokeWidth={1.2} className="flex-shrink-0"/>
                <h6 className='font-bold text-sm text-[#BDBDBD]'>Shop</h6>
            </div>
    </section>
    <section className='bg-[#FAFAFA] px-[195px] pb-12 font-montserrat max-[420px]:px-[33px]'>
        <div className='flex gap-7 max-[420px]:flex-col'>
            <div className='flex flex-col gap-4 w-1/2 max-[420px]:w-full'>
                <div className='relative'>
                    <img src="/public/assets/ProductDetail/detail/carousel-inner.png" alt="" />
                    <button

                        className="absolute top-1/2 left-5  text-white max-[420px]:left-1.5"
                    >
                        <ChevronLeft size={60} strokeWidth={1}/>
                    </button>

                    <button

                        className="absolute top-1/2 right-5  text-white max-[420px]:right-1.5"
                    >
                        <ChevronRight size={60} strokeWidth={1} /> 
                    </button>
                </div>
                <div className='flex gap-3'>
                    <img src="/public/assets/ProductDetail/detail/carouselCaptions.png" alt="" />
                    <img src="/public/assets/ProductDetail/detail/carouselCaptions2.png" alt="" />
                </div>
            </div>
            <div className='flex flex-col gap-5 w-1/2 py-2 px-7 max-[420px]:w-full max-[420px]:px-0'>
                <h4 className='text-[#252B42] text-xl'>Floating Phone</h4>
                <div className='flex gap-2.5 items-center'>
                    <img src="/public/assets/ProductDetail/detail/stars.png" alt="" />
                    <h6 className='text-[#737373] text-sm font-bold'>10 Reviews</h6>
                </div>
                <h3 className='text-[#252B42] text-2xl font-bold'>$1,139.33</h3>
                <div className='flex gap-1.5'>
                    <h6 className='text-[#737373] text-sm font-bold'>Availability  :</h6>
                    <h6 className='text-[#23A6F0] text-sm font-bold'>In Stock </h6>
                </div>
                <p className='text-sm text-[#858585] '>
                    Met minim Mollie non desert Alamo est sit cliquey dolor 
                    do met sent. RELIT official consequent door ENIM RELIT Mollie. 
                    Excitation venial consequent sent nostrum met.
                </p>
                 <hr  className='w-full text-[#BDBDBD]'/>
                 <div className="flex gap-2.5">
                    <span className="w-7 h-7 rounded-full bg-[#23A6F0]"></span>
                    <span className="w-7 h-7 rounded-full bg-[#23856D]"></span>
                    <span className="w-7 h-7 rounded-full bg-[#E77C40]"></span>
                    <span className="w-7 h-7 rounded-full bg-[#252B42]"></span>
                </div>
                <div className='flex gap-2.5 mt-8'>
                    <button className='px-5 py-2.5 bg-[#23A6F0] text-white rounded-md text-sm font-bold'>
                        Select Options
                    </button>
                    <div className='flex gap-2.5'>
                        <div className='flex justify-center items-center border border-[#E8E8E8] rounded-full w-10 h-10 bg-white'>
                            <Heart size={20} color="#252B42" />
                        </div>
                        <div className='flex justify-center items-center border border-[#E8E8E8] rounded-full w-10 h-10 bg-white'>
                            <ShoppingCart size={20} color="#252B42" />
                        </div>
                        <div className='flex justify-center items-center border border-[#E8E8E8] rounded-full w-10 h-10 bg-white'>
                            <Eye size={20} color="#252B42" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    
    <section className="px-[190px] font-montserrat max-[420px]:px-[33px]">
        <div className="bg-[repeating-linear-gradient(to_right,_rgba(255,0,0,0.1)_0px,_rgba(255,0,0,0.1)_62px,_#FFFFFF_62px,_#FFFFFF_92px)] relative z-0  flex flex-col gap-5 max-[420px]:flex-col max-[420px]:bg-none">
            <div className='flex text-[#737373] text-sm font-bold justify-center items-center gap-8 py-5 max-[420px]:gap-0 max-[420px]:justify-between max-[420px]:w-full max-[420px]:text-xs'>
                <a>Description</a>
                <a>Additional Information</a>
                <a>Reviews <span className='text-[#23856D]'>(0)</span></a>
            </div>
            <hr className='text-[#ECECEC]'/>
            <div className='flex gap-7 pt-4 pb-12 max-[420px]:flex-col'>
            <img src="/public/assets/ProductDetail/detail/1.png" alt="" className='w-[290px] max-[420px]:w-full' />
            <div className='flex flex-col gap-7 w-1/3 max-[420px]:w-full'>
                <h3 className='text-[22px] font-bold text-[#252B42]'>the quick fox jumps over </h3>
                <p className='text-sm text-[#737373]'>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br /><br/>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br /><br/>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. 
                </p>
            </div>
            <div className='flex flex-col gap-7 w-1/3 max-[420px]:w-full'>
                <h3 className='text-[22px] font-bold text-[#252B42]'>the quick fox jumps over </h3>
                <div className='flex flex-col gap-1.5'>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                </div>
                 <h3 className='text-[22px] font-bold text-[#252B42]'>the quick fox jumps over </h3>
                <div className='flex flex-col gap-1.5'>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>

                </div>

            </div>
            </div>
        </div>
    </section>

    <section className="px-[195px] font-montserrat py-12 flex flex-col gap-6 bg-[#FAFAFA] max-[420px]:px-[40px]">
        <h3 className='text-2xl font-bold text-[#252B42]'>BESTSELLER PRODUCTS</h3>
        <hr className='text-[#ECECEC]'/>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
            {cards.map((src, index) => (
            <div key={index} className="flex flex-col bg-white">
                <img
                src={src}
                alt={`card-${index}`}
                className="w-full h-auto object-cover"
                />
                <div className="flex flex-col px-6 pt-6 pb-9 gap-2.5">
                <h5 className="text-[#252B42] font-bold text-base">
                    Graphic Design
                </h5>
                <a href="#" className="text-[#737373] font-bold text-sm">
                    English Department
                </a>
                <div className="flex gap-1.5">
                    <span className="text-[#BDBDBD] font-bold text-base">
                    $16.48
                    </span>
                    <span className="text-[#23856D] font-bold text-base">
                    $6.48
                    </span>
                </div>
                </div>
            </div>
            ))}
        </div>
    </section  >
    <Clients />
    <Footer />

    </>
  )
}

export default ProductDetailPage