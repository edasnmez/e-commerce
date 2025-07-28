import { ChevronLeft, ChevronRight } from "lucide-react";

const cardData = [
  { img: 'src/assets/pc-1.png' },
  { img: 'src/assets/pc-2.png' },
  { img: 'src/assets/pc-3.png' }
];

export default function PrimaryProductCards() {
  return (
    <section className='bg-white font-montserrat h-[895px] max-[420px]:h-auto'>
        <div className="flex gap-7 px-[185px] py-12 max-[420px]:flex-col max-[420px]:px-4">
            <div className="w-1/3 max-[420px]:w-full ">
                <img src="src/assets/card-item.png" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="w-2/3 flex flex-col gap-2.5 max-[420px]:w-full">
                <div className="flex items-center gap-2.5 max-[420px]:flex-col">
                    <h3 className="font-bold text-base">BESTSELLER PRODUCTS</h3>
                    <nav className="flex">
                        <ul className="font-bold text-sm flex">
                            <li><button className="text-[#23A6F0] py-2.5 px-5">Men</button></li>
                            <li><button className="text-[#737373] py-2.5 px-5">Women</button></li>
                            <li><button className="text-[#737373] py-2.5 px-5">Accessories</button></li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className="flex gap-2.5">
                            <li><button className="px-1.5 py-1.5 border rounded-full border-[#BDBDBD]"><ChevronLeft size={20} color="#bdbdbd" /></button></li>
                            <li><button  className="px-1.5 py-1.5 border rounded-full border-[#737373]"><ChevronRight size={20} color="#737373" /></button></li>
                        </ul>
                    </nav>
                </div>
                 <hr className="h-0.5 text-[#ECECEC] w-full"/>
                 <div className="flex flex-col gap-3 justify-center px-5 py-5 ">
                        <div className="flex justify-between gap-6 max-[420px]:flex-col">
                                {cardData.map((card, index) => (
                                    <div key={index} className="flex flex-col">
                                    <img src={card.img} alt={`product-${index}`} />
                                    <div className='flex flex-col items-center  pt-6 pb-9 gap-2.5'>
                                        <h5 className='text-[#252B42] font-bold text-base'>Graphic Design</h5>
                                        <a href="#" className='text-[#737373] font-bold text-sm'>English Department</a>
                                        <div className='flex gap-1.5'>
                                        <span className='text-[#BDBDBD] font-bold text-base line-through'>$16.48</span>
                                        <span className='text-[#23856D] font-bold text-base'>$6.48</span>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                        </div>

                        <div className="flex justify-between gap-6 max-[420px]:hidden">
                                {cardData.map((card, index) => (
                                    <div key={index} className="flex flex-col">
                                    <img src={card.img} alt={`product-${index}`} />
                                    <div className='flex flex-col items-center  pt-6 pb-9 gap-2.5'>
                                        <h5 className='text-[#252B42] font-bold text-base'>Graphic Design</h5>
                                        <a href="#" className='text-[#737373] font-bold text-sm'>English Department</a>
                                        <div className='flex gap-1.5'>
                                        <span className='text-[#BDBDBD] font-bold text-base line-through'>$16.48</span>
                                        <span className='text-[#23856D] font-bold text-base'>$6.48</span>
                                        </div>
                                    </div>
                                    </div>
                                ))}
                        </div>
                 </div>
            </div>
        </div>
       
    </section>


  )
}
