const shopCardsData = [
  { img: 'src/assets/sc-one.png' },
  { img: 'src/assets/sc-two.png' },
  { img: 'src/assets/sc-three.png' }
];

function ShopCards() {
  return (
    <section className='flex px-42 py-20 bg-[#FAFAFA] font-montserrat max-[420px]:px-0'>
        <div className=" flex justify-between w-full max-[420px]:flex-col max-[420px]:items-center max-[420px]:gap-2.5">
            {shopCardsData.map((card, i) => (
          <div key={i} className="relative overflow-hidden h-[232px] w-[320px] border border-[#ECECEC]">
            <img
              src={card.img}
              alt={`Card ${i}`}
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            <div className="relative  z-10 flex flex-col justify-center gap-5 pl-3 h-full ">
                    <h6 className="text-[#737373] text-sm">Your Space</h6>
                    <h3 className="text-[#252B42] text-2xl font-bold w-1/3">Unique Life</h3>
                    <h6 className="text-[#252B42] text-sm">Explore Items</h6>
             
            </div>
          </div>
        ))}
        </div>
    </section>
  )
}

export default ShopCards