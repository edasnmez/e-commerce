import React, { useEffect } from 'react'
import Header from '../layout/Header'
import { ChevronLeft, ChevronRight } from 'lucide-react'
//import cards from "../data/productDetailData.json";
import Clients from '../layout/Clients';
import Footer from '../layout/Footer';
import { fetchProductById} from '../store/actions/productActions'; 
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/actions/shoppingCartActions';

function ProductDetailPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  console.log('params:', useParams());
  const productState = useSelector((state) => state.product);
  const { productList } = productState;
  const { productDetail, productDetailFetchState } = useSelector(
    (state) => state.product
  );
  console.log("productID" ,productId)
  // Ürünü çek
  useEffect(() => {
    if (productId) {
      dispatch(fetchProductById(productId));
    }
  }, [dispatch, productId]);

  // Loading spinner
  if (productDetailFetchState === "loading") {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  // Error
  if (productDetailFetchState === "error") {
    return (
      <div className="text-center text-red-500 font-bold py-20">
        Ürün yüklenirken bir hata oluştu. Lütfen tekrar deneyin.
      </div>
    );
  }

  // Eğer veri yoksa null döndür
  if (!productDetail) return null;



  // BESTSELLER PRODUCTS için top 8 ürün
const topRatedProducts = productList
  .filter(product => product.category_id) // kategoriye göre filtrele
  .sort((a, b) => b.rating - a.rating) // rating'e göre sırala (yüksekten düşüğe)
  .slice(0, 8); // ilk 8 ürünü al

   const handleAddToCart = () => {
    dispatch(addToCart(productDetail));
  };

  return (
    
    <>
    <Header />
     <section className="bg-[#FAFAFA] font-montserrat py-6 px-[205px]">
        <div className="flex gap-2 max-[420px]:justify-center">
          <button
            onClick={() => history.goBack(-1)}
            className="text-[#252B42] text-sm font-bold cursor-pointer"
          >
            Back
          </button>
          <ChevronRight size={30} color="#bdbdbd" strokeWidth={1.2} />
          <button className="font-bold text-sm text-[#BDBDBD]">Shop</button>
        </div>

      </section>

      <section className="bg-[#FAFAFA] px-[195px] pb-12 font-montserrat max-[420px]:px-[33px] ">
        <div className="flex gap-7 max-[420px]:flex-col">
          <div className="flex flex-col gap-4 w-1/2 max-[420px]:w-full">
            <div className="relative">
              <img
                src={productDetail.images?.[0]?.url || "https://via.placeholder.com/300"}
                alt={productDetail.name}
                className="w-full h-[500px]"
              />
              {/* Carousel butonları */}
              <button className="absolute top-1/2 left-5 text-white max-[420px]:left-1.5">
                <ChevronLeft size={60} strokeWidth={1} />
              </button>
              <button className="absolute top-1/2 right-5 text-white max-[420px]:right-1.5">
                <ChevronRight size={60} strokeWidth={1} />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-7 w-1/2 py-2 px-7 max-[420px]:w-full max-[420px]:px-0">
            <h4 className="text-[#252B42] text-xl font-bold">{productDetail.name}</h4>
            <h3 className="text-[#252B42] text-2xl font-bold">
              ${productDetail.price.toFixed(2)}
            </h3>
            <div className="flex gap-1.5">
              <h6 className="text-[#737373] text-sm font-bold">Availability:</h6>
              <h6 className="text-[#23A6F0] text-sm font-bold">
                {productDetail.stock > 0 ? "In Stock" : "Out of Stock"}
              </h6>
            </div>
            <p className="text-sm text-[#858585]">{productDetail.description}</p>
            <button 
            className="text-sm text-white font-bold bg-[#23A6F0] rounded-md py-3 w-30"
            onClick={handleAddToCart}
            >Sepete Ekle</button>
          </div>
        </div>
      </section>
    
    <section className="px-[190px] font-montserrat max-[420px]:px-[33px]">
        <div className="bg-[repeating-linear-gradient(to_right,_rgba(255,0,0,0.1)_0px,_rgba(255,0,0,0.1)_62px,_#FFFFFF_62px,_#FFFFFF_92px)] relative z-0  flex flex-col gap-5 max-[420px]:flex-col max-[420px]:bg-none">
            <div className='flex text-[#737373] text-sm font-bold justify-center items-center gap-8 py-5 max-[420px]:gap-0 max-[420px]:justify-between max-[420px]:w-full max-[420px]:text-xs'>
                <a>Description</a>
                <a>Additional Information</a>
                <a>Reviews <span className='text-[#23856D]'>(0)</span></a>
            </div>
            <hr className='text-[#ECECEC]'/>
            <div className='flex gap-7 pt-4 pb-12 max-[420px]:flex-col'>
            <img src="/public/assets/ProductDetail/detail/1.png" alt="" className='w-[290px] max-[420px]:w-full' />
            <div className='flex flex-col gap-7 w-1/3 max-[420px]:w-full'>
                <h3 className='text-[22px] font-bold text-[#252B42]'>the quick fox jumps over </h3>
                <p className='text-sm text-[#737373]'>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br /><br/>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. <br /><br/>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met. 
                </p>
            </div>
            <div className='flex flex-col gap-7 w-1/3 max-[420px]:w-full'>
                <h3 className='text-[22px] font-bold text-[#252B42]'>the quick fox jumps over </h3>
                <div className='flex flex-col gap-1.5'>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                </div>
                 <h3 className='text-[22px] font-bold text-[#252B42]'>the quick fox jumps over </h3>
                <div className='flex flex-col gap-1.5'>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>
                    <h6 className='flex gap-1 text-sm font-bold text-[#737373] items-center'><ChevronRight strokeWidth={1}  size={30}/>the quick fox jumps over the lazy dog</h6>

                </div>

            </div>
            </div>
        </div>
    </section>

    <section className="px-[195px] font-montserrat py-12 flex flex-col gap-6 bg-[#FAFAFA] max-[420px]:px-[40px]">
    <h3 className='text-2xl font-bold text-[#252B42]'>BESTSELLER PRODUCTS</h3>
    <hr className='text-[#ECECEC]'/>

    <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
        {topRatedProducts.map((product) => (
        <div key={product.id} className="flex flex-col bg-white cursor-pointer hover:shadow-lg transition-shadow">
           <div className='h-56'>
             <img
            src={product.images?.[0]?.url || 'https://via.placeholder.com/300'}
            alt={product.name}
            className="w-full h-full object-cover"
            />
           </div>
            <div className="flex flex-col px-6 pt-6 pb-9 gap-2.5">
            <h5 className="text-[#252B42] font-bold text-base">{product.name}</h5>
            <a href="#" className="text-[#737373] font-bold text-sm">{product.categoryName}</a>
            <div className="flex gap-1.5">
                <span className="text-[#BDBDBD] font-bold text-base line-through">${(product.price * 1.5).toFixed(2)}</span>
                <span className="text-[#23856D] font-bold text-base">${product.price.toFixed(2)}</span>
            </div>
            </div>
        </div>
        ))}
    </div>
</section>

    <Clients />
    <Footer />

    </>
  )
}

export default ProductDetailPage