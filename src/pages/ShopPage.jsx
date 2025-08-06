import React, { useState } from 'react'
import Header from '../layout/Header'
import { ChevronDown, ChevronRight, LayoutGrid, List, ListChecks } from 'lucide-react'
import cards from "../data/shopCardsData.json";
import Pagination from "../components/Pagination";
import Clients from '../layout/Clients'
import Footer from '../layout/Footer'

const itemsPerPage = 12;

function ShopPage() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(cards.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleItems = cards.slice(startIndex, startIndex + itemsPerPage);

  const toggleDropdown = () => setIsOpen(prev => !prev);
  return (
    <>
    <Header />
    <section className='bg-[#FAFAFA] w-full font-montserrat max-[420px]:px-10'>
        <div className='py-6 px-[195px] flex justify-between max-[420px]:flex-col max-[420px]:px-0 max-[420px]:justify-center max-[420px]:items-center max-[420px]:gap-8'>
            <h3 className='font-bold text-2xl text-[#252B42]'>Shop</h3>
            <div className='flex gap-3'>
                <a className='text-[#252B42] text-sm font-bold'>Home</a>
                <ChevronRight size={22} color="#bdbdbd" strokeWidth={1} />
                <h6 className='font-bold text-sm text-[#BDBDBD]'>Shop</h6>
            </div>
        </div>
        <div className=' flex justify-center gap-3 pb-10 max-[420px]:flex-col '>
            <img src="assets/ShopPage/SectionOne/1.png" alt="" className='w-1/7 max-[420px]:w-full' />
            <img src="assets/ShopPage/SectionOne/2.png" alt="" className='w-1/7 max-[420px]:w-full'/>
            <img src="assets/ShopPage/SectionOne/3.png" alt="" className='w-1/7 max-[420px]:w-full'/>
            <img src="assets/ShopPage/SectionOne/4.png" alt="" className='w-1/7 max-[420px]:w-full' />
            <img src="assets/ShopPage/SectionOne/5.png" alt="" className='w-1/7 max-[420px]:w-full'/>
        </div>
    </section>

    <section className='flex justify-between px-[195px] py-6 max-[420px]:flex-col max-[420px]:px-10 max-[420px]:items-center max-[420px]:gap-5'>
        <h6 className=' text-sm font-bold text-[#737373]'>Showing all 12 results</h6>
        <div className='flex gap-4 items-center'>
            <h6 className=' text-sm font-bold text-[#737373]'>Views:</h6>
            <LayoutGrid size={48} color="#252B42" strokeWidth={2}  className='border border-[#ECECEC] p-3.5 rounded-md'/>
            <List size={48} color="#737373" strokeWidth={1.4} className='border border-[#ECECEC] p-3.5 rounded-md'/>
        </div>
        <div className='flex gap-4'>
            <div className="relative inline-block text-left">
                <button
                    onClick={toggleDropdown}
                    className="flex bg-[#F9F9F9] text-[#737373] gap-0.5 px-6 py-4 border-[#DDDDDD] border-1 rounded-md hover:bg-gray-200 transition"
                >
                    Popularity <ChevronDown color="#737373" />
                </button>
                
                {isOpen && (
                    <div className="absolute z-10 mt-2 text-[#737373] bg-[#F9F9F9] border border-[#DDDDDD] rounded ">
    
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Price: Low to High</a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Price: High to Low</a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Newest First</a>
                        <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Best Sellers</a>
                    </div>
                )}
            </div>
            <button className='bg-[#23A6F0] rounded-md text-white  px-7 py-4 hover:bg-blue-500 transition'>Filter</button>

        </div>
    </section>
   <section className="px-[195px] py-12 max-[420px]:px-10">
        <div className="grid grid-cols-4 gap-7 max-[420px]:grid-cols-1">
            {visibleItems.map((img, i) => (
            <div key={i} className="flex flex-col overflow-hidden">
                <img src={img} alt={`Product ${i}`} className="w-full h-auto" />

                <div className="flex flex-col px-6 pt-6 pb-9 gap-2.5 items-center justify-center">
                <h5 className="text-[#252B42] font-bold">Graphic Design</h5>
                <a href="#" className="text-[#737373] font-bold text-sm">English Department</a>

                <div className="flex gap-1.5 px-0.5 py-1">
                    <span className="text-[#BDBDBD] font-bold text-base line-through">$16.48</span>
                    <span className="text-[#23856D] font-bold text-base">$6.48</span>
                </div>

                <div className="flex gap-1.5">
                    <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
                    <span className="w-4 h-4 rounded-full bg-[#23856D]"></span>
                    <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span>
                    <span className="w-4 h-4 rounded-full bg-[#252B42]"></span>
                </div>
                </div>
            </div>
            ))}
        </div>

        <div className='text-center mt-8'>
            <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
        />

        </div>
    </section>
    <Clients />
    <Footer />

    </>
  )
}

export default ShopPage