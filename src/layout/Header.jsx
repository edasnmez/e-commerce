import { ChevronDown, Heart, Search, ShoppingCart, User } from 'lucide-react'


function Header() {
  return (
    <header className='flex items-center  justify-between w-full h-[80px] px-[205px] bg-white font-montserrat'>
        <h3 className="text-[24px] font-bold text-[#252B42] ">Bandage</h3>
        <nav className="text-[14px] font-bold text-[#737373]">
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
      <ul className="flex space-x-4">
          <li>
            <a href="#" className="flex  gap-1 font-bold">
              <User size={18} strokeWidth={1} />
              Login / Register
            </a>
          </li>
          <li><Search size={18} strokeWidth={1} /></li>
          <li className="flex items-center gap-1"><ShoppingCart size={18} strokeWidth={1} />1</li>
          <li className="flex items-center gap-1"><Heart size={18} strokeWidth={1} />1</li>
        </ul>
    </nav>

    </header>
  )
}

export default Header

