import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';
import { useHistory } from 'react-router-dom';

const ShoppingCardDropDown = () => {
  const { cart } = useSelector((state) => state.cart);
   const history = useHistory();
  // Toplam ürün sayısı
  const totalCount = cart.reduce((sum, item) => sum + item.count, 0);

   const goToCart = () => {
  
    history.push('/shopping-card');

  };

    
  return (
    <div className="relative group">
      <li className="flex gap-1 items-center cursor-pointer">
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
        <span className="max-[420px]:hidden">{totalCount}</span>
      </li>

      {/* Dropdown */}
      <div className="absolute right-[-20px] mt-6 bg-white shadow-lg rounded p-4 w-100 hidden group-hover:block">
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">Sepetiniz boş</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.product.id}
              className="flex justify-between items-center mb-2 gap-x-3 h-30 w-full"
            >
              <div className='w-[30%]'>
                <img src={item.product.images[0].url} alt="" className="w-full h-26 object-cover" />
              </div>
             

              <div className='flex flex-col gap-2 w-[70%]'>
              <span>{item.product.name}</span>
              <span className='text-xs text-[#737373]'>{item.product.description}</span>
              <div className='flex gap-6'>
                <span className='text-[#5a5a5a] '>x{item.count}</span>
                <span className='font-bold'> {item.product.price * item.count}</span>
              </div>
              </div>
              
            </div>
            
          ))
         
        )}
        <div className='flex w-full justify-between'>
                <button  className="text-sm text-[#737373] font-bold bg-[#FAFAFA]  rounded-md py-3 w-40" onClick={goToCart}>Sepete Git</button>
                <button className="text-sm text-white font-bold bg-[#23A6F0] rounded-md py-3 w-40">Siparişi Tamamla</button>
            </div>
      </div>
      
    </div>
  );
};

export default ShoppingCardDropDown;
