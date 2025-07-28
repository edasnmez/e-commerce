import React from 'react'
const cardData = [
  { img: 'src/assets/bp-one.png' },
  { img: 'src/assets/bp-two.png' },
  { img: 'src/assets/bp-three.png' },
  { img: 'src/assets/bp-four.png' }
];

function BestsellerProducts() {
  return (
    <section className='flex flex-col px-[195px]  font-montserrat bg-[#FAFAFA] gap-6 py-12 max-[420px]:px-10'>
        <h3 className='font-bold text-2xl text-[#252B42]'>BESTSELLER PRODUCTS</h3>
        <hr  className='h-0.5 w-full text-[#ECECEC]'/>
        <div className="flex gap-6 max-[420px]:flex-col">
        {cardData.map((card, index) => (
            <div key={index} className='flex flex-col gap-[30px] '>
            <img src={card.img} alt={`card-${index}`} />
            <div className='flex flex-col px-6 pt-6 pb-9 gap-2.5'>
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

    </section>
  )
}

export default BestsellerProducts