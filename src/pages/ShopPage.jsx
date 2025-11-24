import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts,  setSort, setFilter } from '../store/actions/productActions'; 
import Header from '../layout/Header'
import Clients from '../layout/Clients';
import Footer from '../layout/Footer';
import Pagination from '../components/Pagination';
import { ChevronRight,  LayoutGrid, List } from 'lucide-react';
import {  useHistory, useLocation} from 'react-router-dom/cjs/react-router-dom';


function ShopPage() {
const dispatch = useDispatch(); 
const history = useHistory();
const location = useLocation();

const selectedCategory = useSelector(state => state.categories.selectedCategory);

// Debug log
if (selectedCategory) {
  console.log("shop selected category:", selectedCategory.gender, selectedCategory.title, selectedCategory.id);
}

// Query parametreler
const searchParams = new URLSearchParams(location.search);
const urlFilter = searchParams.get('filter') || '';
const urlSort = searchParams.get('sort') || '';
const urlLimit = Number(searchParams.get('limit')) || 25;
const urlOffset = Number(searchParams.get('offset')) || 0;

// Redux state
const productState = useSelector((state) => state.product);
const { productList, fetchState, filter, sort, total } = productState;
const { items } = useSelector(state => state.categories);

// Local state
const [currentPage, setCurrentPage] = useState(Math.floor(urlOffset / urlLimit) + 1);
const itemsPerPage = urlLimit;

// URL’den Redux’a aktarım
useEffect(() => {
  if (filter !== urlFilter) dispatch(setFilter(urlFilter));
  if (sort !== urlSort) dispatch(setSort(urlSort));
}, [dispatch, urlFilter, urlSort]);

// API çağrısı
useEffect(() => {
  const offset = (currentPage - 1) * itemsPerPage;
  if (selectedCategory?.id) {
    dispatch(
      fetchProducts({
        category: selectedCategory.id,
        filter,
        sort,
        limit: itemsPerPage,
        offset,
      })
    );
  }
}, [dispatch, selectedCategory, filter, sort, currentPage, itemsPerPage]);

// URL güncelle
useEffect(() => {
  const offset = (currentPage - 1) * itemsPerPage;
  const params = new URLSearchParams(location.search);

  let hasChanged = false;
  const setParamIfChanged = (key, value) => {
    if (params.get(key) !== String(value)) {
      params.set(key, value);
      hasChanged = true;
    }
  };

  if (selectedCategory?.id) setParamIfChanged('category', selectedCategory.id);
  setParamIfChanged('filter', filter || '');
  setParamIfChanged('sort', sort || '');
  setParamIfChanged('limit', itemsPerPage);
  setParamIfChanged('offset', offset);

  if (hasChanged) {
    history.replace(`${location.pathname}?${params.toString()}`);
  }
}, [selectedCategory, filter, sort, currentPage, itemsPerPage, location.pathname, location.search, history]);

// Sayfa değişince yukarı kaydır
useEffect(() => {
  window.scrollTo(0, 0);
}, [currentPage]);

// Toplam sayfa sayısı
const totalPages = Math.ceil(total / itemsPerPage);

// Ürünleri kategori bilgisi ile zenginleştir
const enrichedProducts = productList.map(product => {
  const category = items.find(cat => cat.id === product.category_id);

  return {
    ...product,
    gender: category?.gender || 'unisex', 
    categoryName: category?.title.toLowerCase() || 'unknown',
    categoryId: category?.id || 0,
  };
});

// Görüntülenecek ürünler
const visibleItems = enrichedProducts.filter(product => 
  selectedCategory?.id ? product.categoryId === selectedCategory.id : true
);

// Event handlers
const handleFilterChange = (e) => {
  dispatch(setFilter(e.target.value));
  setCurrentPage(1);
};

const handleSortChange = (e) => {
  dispatch(setSort(e.target.value));
  setCurrentPage(1);
};



  return (
    <>
      <Header />
      <section>

            <div>
                Gender: {selectedCategory?.gender}, Category ID: {selectedCategory?.title}, Category Name: {selectedCategory?.id}, total: {total}
            </div>

      </section>
      <section className="bg-[#FAFAFA] w-full font-montserrat max-[420px]:px-10">
        <div className="py-6 px-[195px] flex justify-between max-[420px]:flex-col max-[420px]:px-0 max-[420px]:justify-center max-[420px]:items-center max-[420px]:gap-8">
          <h3 className="font-bold text-2xl text-[#252B42]">Shop</h3>
          <div className="flex gap-3">
            <a className="text-[#252B42] text-sm font-bold">Home</a>
            <ChevronRight size={22} color="#bdbdbd" strokeWidth={1} />
            <h6 className="font-bold text-sm text-[#BDBDBD]">Shop</h6>
          </div>
        </div>
        <div className="flex justify-center gap-3 pb-10 max-[420px]:flex-col ">
          <img src="assets/ShopPage/SectionOne/1.png" alt="" className="w-1/7 max-[420px]:w-full" />
          <img src="assets/ShopPage/SectionOne/2.png" alt="" className="w-1/7 max-[420px]:w-full" />
          <img src="assets/ShopPage/SectionOne/3.png" alt="" className="w-1/7 max-[420px]:w-full" />
          <img src="assets/ShopPage/SectionOne/4.png" alt="" className="w-1/7 max-[420px]:w-full" />
          <img src="assets/ShopPage/SectionOne/5.png" alt="" className="w-1/7 max-[420px]:w-full" />
        </div>
      </section>

      <section className="flex justify-between px-[195px] py-6 max-[420px]:flex-col max-[420px]:px-10 max-[420px]:items-center max-[420px]:gap-5">
        <h6 className="text-sm font-bold text-[#737373]">
          Showing all {visibleItems.length} results
        </h6>
        <div className="flex gap-4 items-center">
          <h6 className="text-sm font-bold text-[#737373]">Views:</h6>
          <LayoutGrid
            size={48}
            color="#252B42"
            strokeWidth={2}
            className="border border-[#ECECEC] p-3.5 rounded-md"
          />
          <List
            size={48}
            color="#737373"
            strokeWidth={1.4}
            className="border border-[#ECECEC] p-3.5 rounded-md"
          />
        </div>
        <div className="flex gap-4 relative">


        <select
        value={sort || ''}
        onChange={handleSortChange}
        className="bg-[#F9F9F9] text-[#737373] px-2 py-2 border border-[#DDDDDD] rounded-md hover:bg-gray-200 transition"
      >
        <option value="">Popularity</option>
        <option value="price:asc">Price: Low to High</option>
        <option value="price:desc">Price: High to Low</option>
        <option value="rating:asc">Rating: Low to High</option>
        <option value="rating:desc">Rating: High to Low</option>
      </select>

        <input
            type="text"
            placeholder="Search products..."
            value={filter || ''}
            onChange={handleFilterChange}
            className='bg-[#23A6F0] text-white px-2 placeholder-white rounded-md w-40'
        />


    
        </div>
      </section>

      <section className="px-[195px] py-12 max-[420px]:px-10">
  {fetchState === 'loading' && 
    <div className="flex justify-center items-center py-20">
      <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  }

  {fetchState === 'error' && (
    <div className="text-center text-red-500 font-bold py-20">
      Ürünler yüklenirken hata oluştu. Lütfen tekrar deneyin.
    </div>
  )}

  {fetchState === 'success' && (
    <>
      <div className="grid grid-cols-4 gap-7 max-[420px]:grid-cols-1">
        {visibleItems.map((product) => {
          // productNameSlug oluştur
          const productNameSlug = product.name
            .toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]/g, '');

          return (
            <div
              key={product.id}
              className="flex flex-col overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
            onClick={() =>
            history.push(
                `/shop/${product.gender}/${product.categoryName}/${product.categoryId}/${productNameSlug}/${product.id}`
            )
            }
            >
              <img
                src={product.images?.[0]?.url || 'https://via.placeholder.com/150'}
                alt={product.name}
                className="w-full h-[300px] object-cover"
              />

              <div className="flex flex-col px-6 pt-6 pb-9 gap-2.5 items-center justify-center">
                <h5 className="text-[#252B42] font-bold">{product.name}</h5>
                <p className="text-[#737373] font-bold text-sm w-full text-center">
                  {product.description}
                </p>

                <div className="flex gap-1.5 px-0.5 py-1">
                  <span className="text-[#BDBDBD] font-bold text-base line-through">
                    ${(product.price * 1.5).toFixed(2)}
                  </span>
                  <span className="text-[#23856D] font-bold text-base">${product.price.toFixed(2)}</span>
                </div>

                <div className="flex gap-1.5">
                  <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
                  <span className="w-4 h-4 rounded-full bg-[#23856D]"></span>
                  <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span>
                  <span className="w-4 h-4 rounded-full bg-[#252B42]"></span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      </div>
    </>
  )}
</section>


      <Clients />
      <Footer />
    </>
  );
}

export default ShopPage;
