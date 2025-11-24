import { ChevronDown, Heart, Menu, Search, ShoppingCart, User } from 'lucide-react'
import { useState } from 'react';
import Gravatar from 'react-gravatar'; 
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { setSelectedCategory } from '../store/actions/categoryActions';
import ShoppingCardDropDown from '../components/ShoppingCardDropDown';

function Header() {
       const [open, setOpen] = useState(false);
       const user = useSelector(state => state.client.user);

       const { items } = useSelector((state) => state.categories);

      const kadin = items.filter(c => c.gender === "k");
      const erkek = items.filter(c => c.gender === "e");

      const dispatch = useDispatch();
      const history = useHistory();

      const handleCategoryClick = (cat) => {
        dispatch(setSelectedCategory(cat));
        history.push(`/shop/${cat.gender}/${cat.title.toLowerCase()}/${cat.id}`);
};
  return (

    <>
    <header className='flex items-center  justify-between w-full h-[80px] px-[205px] bg-white font-montserrat max-[420px]:px-[38px]'>
        <h3 className="text-[24px] font-bold text-[#252B42] ">Bandage</h3>
        <nav className="text-[14px] font-bold text-[#737373]  max-[420px]:hidden">
          <ul className="flex space-x-4">
            <li>
              <Link to="/home">Home</Link>
            </li>
           <li className="relative group">
            <Link to="/shop" className="flex items-center font-medium text-[#252B42]">
              Shop <span className="ml-1">▼</span>
            </Link>

            <div className="absolute left-0 mt-2 hidden group-hover:flex bg-white shadow-lg p-6 gap-20">
              <div>
                <h4 className="font-bold mb-3 text-[#252B42]">Kadın</h4>
                {[...kadin]
                  .sort((a, b) => b.rating - a.rating) 
                  .slice(0, 5)                         
                  .map((cat) => (
                    <Link
                      key={cat.id}
                     onClick={() => handleCategoryClick(cat)}
                      className="block hover:underline mb-2"
                    >
                      {cat.title}
                    </Link>
                  ))}
              </div>

              <div>
                <h4 className="font-bold mb-3 text-[#252B42]">Erkek</h4>
                {[...erkek]
                  .sort((a, b) => b.rating - a.rating)
                  .slice(0, 5)
                  .map((cat) => (
                    <Link
                      key={cat.id}
                     onClick={() => handleCategoryClick(cat)}
                      className="block hover:underline mb-2"
                    >
                      {cat.title}
                    </Link>
                  ))}
              </div>
            </div>
          </li>

            <li>
              <Link to="/about" >
                About
              </Link>
            </li>
            <li>
              <Link >
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" >
                Contact
              </Link>
            </li>
            <li>
              <Link >
                Pages
              </Link>
            </li>
          </ul>
    </nav>
    <nav className='text-[#23A6F0] text-[14px] '>
     <ul className="flex space-x-4 max-[420px]:text-[#3C403D] ">

      {user ? (
        <>
          <li>
            <a className="flex gap-1 items-center">
              <Gravatar email={user.email} size={36} className='rounded-full'/>
              <span>{user.name}</span>
            </a>
          </li>
        </>
      ) : (

        <li>
            <Link to="/login" className="flex gap-1 items-center">
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
            </Link>
          </li>
        )}
          <li className="flex gap-1 items-center">
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

          <ShoppingCardDropDown />

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

