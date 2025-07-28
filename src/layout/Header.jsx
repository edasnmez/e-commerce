import { ChevronDown, Heart, Menu, Search, ShoppingCart, User } from 'lucide-react'
import { useState } from 'react';


function Header() {
       const [open, setOpen] = useState(false);
  return (

    <>
    <header className='flex items-center  justify-between w-full h-[80px] px-[205px] bg-white font-montserrat max-[420px]:px-[38px]'>
        <h3 className="text-[24px] font-bold text-[#252B42] ">Bandage</h3>
        <nav className="text-[14px] font-bold text-[#737373]  max-[420px]:hidden">
          <ul className="flex space-x-4">
            <li>
              <a href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#" className='flex items-center font-medium text-[#252B42]'>
                Shop <span><ChevronDown size={18} strokeWidth={2} className='ml-1'/></span>
              </a>
            </li>
            <li>
              <a href="#">
                About
              </a>
            </li>
            <li>
              <a href="#">
                Blog
              </a>
            </li>
            <li>
              <a href="#">
                Contact
              </a>
            </li>
            <li>
              <a href="#">
                Pages
              </a>
            </li>
          </ul>
    </nav>
    <nav className='text-[#23A6F0] text-[14px] '>
     <ul className="flex space-x-4 max-[420px]:text-[#3C403D] ">

        <li>
            <a href="#" className="flex gap-1 items-center">
              <User
                size={18}
                strokeWidth={1}
                className="max-[420px]:hidden"
              />
              <User
                size={22}
                strokeWidth={2}
                className="hidden max-[420px]:block"
              />
              <span className="max-[420px]:hidden font-bold">Login / Register</span>
            </a>
          </li>

          <li>
            <Search
              size={18}
              strokeWidth={1}
              className="max-[420px]:hidden"
            />
            <Search
              size={22}
              strokeWidth={2}
              className="hidden max-[420px]:block"
            />
          </li>

          <li className="flex gap-1 items-center">
            <ShoppingCart
              size={18}
              strokeWidth={1}
              className="max-[420px]:hidden"
            />

            <ShoppingCart
              size={22}
              strokeWidth={2}
              className="hidden max-[420px]:block"
            />

            <span className="max-[420px]:hidden">1</span>
          </li>

          <li className="flex gap-1 items-center max-[420px]:hidden">
            <Heart size={18} strokeWidth={1} />

            <span className="">1</span>
          </li>

          <li className="hidden max-[420px]:flex items-center">
            <button onClick={() => setOpen(o => !o)} aria-label="Open menu">
              <Menu size={22} strokeWidth={2} />
            </button>
          </li>

        </ul>
    </nav>

    </header>

      <nav
        className={`hidden max-[420px]:block bg-white py-16 font-montserrat ${
          open ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-7 text-3xl font-bold text-[#737373] justify-center items-center">
          <li><a href="#" className="block">Home</a></li>
          <li><a href="#" className="block">Product</a></li>
          <li><a href="#" className="block">Pricing</a></li>
          <li><a href="#" className="block">Contact</a></li>

        </ul>
      </nav>
      </>
  )
}

export default Header

