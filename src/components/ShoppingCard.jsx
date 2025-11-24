
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, removeItem, toggleCheck } from '../store/actions/shoppingCartActions';
import { Trash2 } from 'lucide-react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function ShoppingCard() {
    const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.cart.cart);
  
  const totalAmount = cart
    .filter(item => item.checked)
    .reduce((acc, item) => acc + item.product.price * item.count, 0);
    const kargoTutar=4;

    const handleOrder = () => {
  const selectedItems = cart
    .filter((item) => item.checked)
    .map((item) => ({
      productId: item.product.id,
      quantity: item.count,
    }));

  if (selectedItems.length === 0) {
    toast.error("Lütfen ürün seçiniz.");
    return;
  }

  const token = localStorage.getItem("token");
    if (!token) {
      toast.warning("Sipariş verebilmek için giriş yapmalısınız.");
      history.push("/login");
      return;
    }


  history.push("/order");
};

  return (

      <>
      <Header />
      <section className='w-[90%] border border-[#BDBDBD] rounded-md mx-auto my-10 font-montserrat bg-[#FAFAFA]'>
      <div className='px-10 py-6 text-[#252B42] font-semibold'>
          Sepetim ({cart.length} ürün)
        </div>
    </section>
      <div className="px-20 pt-6  pb-20 flex gap-10">
      <table className="border-collapse w-full">
        <thead>
          <tr className="border-b border-[#BDBDBD]">
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.product.id} className="border-b text-center py-10 border-[#BDBDBD] text-[#252B42]">
              <td>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => dispatch(toggleCheck(item.product.id))}
                  className='w-5 h-5 mx-2'
                />
              </td>
              
              <td className='w-[600px]'>
                <div className="flex items-center gap-6 pl-4">
                    <div className='py-2'>
                        <img
                    src={item.product.images[0].url}
                    alt={item.product.name}
                    className="w-30 h-34 object-fill "
                    />
                    </div>
                    

                    <div className="flex flex-col text-left">
                    <span className="font-semibold">{item.product.name}</span>
                    <span className="text-sm text-gray-500">{item.product.description}</span>
                    </div>
                </div>
                </td>
              <td >
                <button onClick={() => dispatch(decrement(item.product.id))} className='w-6 border border-[#BDBDBD] bg-[#FAFAFA] text-md rounded-bl-md rounded-tl-md'>-</button>
                <span className="mx-2 font-semibold border-[#BDBDBD]">{item.count}</span>
                <button onClick={() => dispatch(increment(item.product.id))} className='w-6 border border-[#BDBDBD] bg-[#FAFAFA] text-md rounded-br-md rounded-tr-md' >+</button>
              </td>
              <td className="font-semibold">${item.product.price * item.count}</td>
              <td >
                <button onClick={() => dispatch(removeItem(item.product.id))}><Trash2 size={24} /></button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className='h-30'>
          <tr className="text-right font-bold ">
            <td colSpan="4" className='text-[#252B42]'>Total:</td>
            <td className='text-red-900 text-center'>${totalAmount}</td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <div className='flex flex-col bg-[#FAFAFA] w-[250px] h-[320px] px-5 py-5 border border-[#BDBDBD] rounded-md justify-center gap-2' >
          <h2 className='text-gray-500 font-semibold mb-3'>Sipariş Özeti</h2>
          <div className='flex gap-2 text-gray-700 justify-between'>
            <h5>Ürün Tutar : </h5>
            <span> ${totalAmount}</span>
          </div>
          <div className='flex gap-2 text-gray-700 justify-between'>
            <h5>Kargo Tutar : </h5>
            <span> ${kargoTutar}</span>
          </div>
          {totalAmount > 300 && (
            <div className='flex gap-2 text-green-900 justify-between'>
                <h5>300$ ve üzeri Kargo Bedava</h5>
                <span  >-${kargoTutar}</span>
            </div>
            )}
            
   
          <hr className='w-full text-[#BDBDBD] my-4'/>
          <div className='flex gap-2 text-gray-700 justify-between'>
            <h5>Toplam : </h5>
            <span className='text-red-900 font-bold'> ${totalAmount > 300 ? totalAmount : totalAmount + kargoTutar}</span>
          </div>
          <button className='py-2 font-semibold text-white bg-[#252B42] rounded-md mt-4' onClick={handleOrder}>Siparişi Onayla</button>
      </div>
    </div>
    <Footer />
      </>
  )
}

export default ShoppingCard