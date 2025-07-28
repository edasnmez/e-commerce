import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    image: 'src/assets/carousel-bg-one.png',
    title: 'GROCERIES DELIVERY',
    description: 'We know how large objects will act, but things on a small scale just do not act that way.',
    shortDescription: 'We know how large objects will act, but things on a small scale.'
  },
  {
    image: 'src/assets//carousel-bg-two.webp',
    title: 'FAST & SAFE DELIVERY',
    description: 'We know how large objects will act, but things on a small scale just do not act that way.',
    shortDescription: 'We know how large objects will act, but things on a small scale.'
  },
]

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 420)

   useEffect(() => {
    const checkWidth = () => setIsMobile(window.innerWidth <= 420)
    checkWidth()
    window.addEventListener('resize', checkWidth)
    return () => window.removeEventListener('resize', checkWidth)
  }, [])



  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const currentSlide = slides[currentIndex]

  return (
    <div className="relative w-full h-[638px] overflow-hidden font-montserrat">
      <img
        src={currentSlide.image}
        alt={currentSlide.title}
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center gap-8 pt-[80px] text-white max-[420px]:pt-0 max-[420px]:justify-center max-[420px]:text-center">
        <h1 className="text-5xl font-bold tracking-[2px] items-center leading-[50px] max-[420px]:text-[40px]">{currentSlide.title}</h1>
        <p className="text-xl w-[42%] px-4 max-[420px]:w-3/4">
          {isMobile ? currentSlide.shortDescription : currentSlide.description}
        </p>
        <button className="bg-[#23A6F0] px-10 py-3.5 rounded-md font-bold text-xl hover:bg-[#23A6F0]/90 transition tracking-wide">
          Start Now
        </button>
      </div>


      <button
        onClick={goPrev}
        className="absolute top-1/2 left-5  text-white max-[420px]:left-1.5"
      >
        <ChevronLeft size={80} strokeWidth={1}/>
      </button>

      <button
        onClick={goNext}
        className="absolute top-1/2 right-5  text-white max-[420px]:right-1.5"
      >
        <ChevronRight size={80} strokeWidth={1} /> 
      </button>

   
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-0.5">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`w-[60px] h-1.5  transition ${
              idx === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel



