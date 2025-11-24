import React, { useEffect, useState } from 'react'
import Header from '../layout/Header'
import api from "../api";
import { setAddress,fetchCards,addCard,updateCard} from "../store/actions/shoppingCartActions";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import {  BadgePlus, Phone, Plus, SquarePen, Trash2, UserRound } from 'lucide-react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function OrderPage() {
    
const dispatch = useDispatch();
  const history = useHistory();
  const selectedAddress = useSelector((state) => state.cart.address);
  const [addresses, setAddresses] = useState([]);
  const [showModal, setShowModal] = useState(false); 
  const [isEditing, setIsEditing] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const [selectedCard, setSelectedCard] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    name: "",
    surname: "",
    phone: "",
    city: "",
    district: "",
    neighborhood: "",
    address: "",
  });

 const payment = useSelector((state) => state.cart.payment);
 const [cardData, setCardData] = useState({
    card_no: "",
    expire_month: "",
    expire_year: "",
    name_on_card: ""
  });
    const [showModalCard, setShowModalCard] = useState(false);
    const [editingCard, setEditingCard] = useState(null);

  const fetchAddresses = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    toast.warning("Sipariş vermek için giriş yapmalısınız.");
    history.push("/login");
    return;
  }

  try {
    const res = await api.get("/user/address");
    setAddresses(res.data);
  } catch (err) {
    console.error(err);
    if (err.response?.data?.message === "Not verified") {
      toast.error("Kullanıcı doğrulanmamış. Lütfen emailinizi onaylayın.");
    } else {
      toast.error("Adresler yüklenirken hata oluştu");
    }
  }
};

useEffect(() => {
  fetchAddresses();
}, [history]);

const handleSelect = (address) => { dispatch(setAddress(address)); };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (
    !formData.title.trim() ||
    !formData.name.trim() ||
    !formData.surname.trim() ||
    !formData.phone.trim() ||
    !formData.city.trim() ||
    !formData.district.trim() ||
    !formData.neighborhood.trim() ||
    !formData.address.trim()
  ) {
    toast.error("Lütfen tüm alanları doldurunuz.");
    return;
  }

  if (formData.phone.length !== 11) {
    toast.error("Telefon numarası 11 haneli olmalıdır.");
    return;
  }

  try {
    let res;
    if (isEditing) {
      // Güncelleme
      res = await api.put("/user/address", formData);
      toast.success("Adres güncellendi!");

      setAddresses(prev =>
        prev.map(addr => (addr.id === formData.id ? res.data : addr))
      );
    } else {
      // Yeni adres ekleme
      res = await api.post("/user/address", formData);
      toast.success("Adres eklendi!");
      setAddresses(prev => [...prev, res.data]);
    }
    await fetchAddresses();
    dispatch(setAddress(formData)); 
    setShowModal(false);
    setIsEditing(false);
    setFormData({
      title: "",
      name: "",
      surname: "",
      phone: "",
      city: "",
      district: "",
      neighborhood: "",
      address: "",
    });
  } catch (err) {
    console.error(err);
    toast.error(isEditing ? "Adres güncellenirken hata oluştu" : "Adres eklenirken hata oluştu");
  }
};


  const handleEdit = (address) => {
 setFormData({
      ...address,
      title: address.title || "",
      name: address.name || "",
      surname: address.surname || "",
      phone: address.phone || "",
      city: address.city || "",
      district: address.district || "",
      neighborhood: address.neighborhood || "",
      address: address.address || "",
    });
  setIsEditing(true);     
  setShowModal(true);     
};

const handleDelete = async (id) => {
  if (!window.confirm("Bu adresi silmek istediğinize emin misiniz?")) return;

  try {
    await api.delete(`/user/address/${id}`);
    toast.success("Adres silindi!");
    setAddresses(prev => prev.filter(addr => addr.id !== id));

    // seçili adres silindiyse sıfırla
    if (selectedAddress?.id === id) {
      dispatch(setAddress(null));
    }
  } catch (err) {
    console.error(err);
    toast.error("Adres silinirken hata oluştu");
  }
};

// Kartla ilgili bölüm
useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

   const handleCardChange  = (e) => {
    const { name, value } = e.target;
    if (name === "card_no") {

    if (/^\d*$/.test(value) && value.length <= 12) {
      setCardData(prev => ({ ...prev, [name]: value }));
    }
  } else {
    setCardData(prev => ({ ...prev, [name]: value }));
  }
  };

  const handleEditCard = (card) => {
  setEditingCard(card);
  setCardData({ 
    card_no: card.card_no, 
    expire_month: card.expire_month, 
    expire_year: card.expire_year, 
    name_on_card: card.name_on_card,
    id: card.id
  });
  setShowModalCard(true);
};

const handleSaveCard = async (e) => {
  e.preventDefault();
  if (editingCard) {
    await dispatch(updateCard(cardData));
    toast.success("Kart güncellendi!");
  } else {
    await dispatch(addCard(cardData));
    toast.success("Kart eklendi!");
  }
  setShowModalCard(false);
  setEditingCard(null);
  setCardData({ card_no: "", expire_month: "", expire_year: "", name_on_card: "" });
};

const handleDeleteCard = async (id) => {
  if (!window.confirm("Kartı silmek istediğinize emin misiniz?")) return;
  try {
    await api.delete(`/user/card/${id}`);
    dispatch(fetchCards());
    toast.success("Kart silindi!");
  } catch (err) {
    console.error(err);
    toast.error("Kart silinirken hata oluştu");
  }
};

const handleOrder = async () => {
  if (!selectedAddress) {
    toast.error("Lütfen teslimat adresi seçin.");
    return;
  }

  if (!selectedCard) {
    toast.error("Lütfen bir ödeme kartı seçin.");
    return;
  }

  const orderPayload = {
  address_id: selectedAddress.id,
  order_date: new Date().toISOString(),
  card_no: selectedCard.card_no,
  card_name: selectedCard.name_on_card,
  card_expire_month: selectedCard.expire_month,
  card_expire_year: selectedCard.expire_year,
  card_ccv: selectedCard.card_ccv || 321,
  price: cart.reduce((total, item) => total + item.product.price * item.count, 0),
  products: cart.map(item => ({
    product_id: item.product.id,
    count: item.count,
    detail: item.product.detail || item.product.name
  }))
};


  try {
    const res = await api.post("/order", orderPayload);

    if (res.status === 200 || res.status === 201) {
      toast.success("Siparişiniz başarıyla alındı! 🎉");
      dispatch({ type: "CLEAR_CART" }); 
      history.push("/previous-orders"); 
    } else {
      toast.error("Sipariş sırasında bir hata oluştu. Lütfen tekrar deneyin.");
    }
  } catch (err) {
    console.error(err);
    toast.error("Sipariş sırasında bir hata oluştu. Lütfen tekrar deneyin.");
  }
};




  return (
    <>
    <Header />
    <section className=' w-[70%] flex justify-between border border-[#BDBDBD] rounded-md mx-auto my-10 px-10 font-montserrat bg-[#FAFAFA]'>
      <div className=' py-6 text-[#252B42] font-semibold'>
          Sepetimdeki Ürünler ({cart.length})
      </div>
      <button
        onClick={handleOrder}
        className={`font-medium text-sm px-2 text-white rounded-md my-4
          ${(!selectedAddress || !selectedCard) ? "bg-gray-400 cursor-not-allowed" : "bg-[#252B42]"}
        `}
        disabled={!selectedAddress || !selectedCard}
      >
        Siparişi Onayla
      </button>

    </section>
    <section className=' w-[70%] border border-[#BDBDBD] rounded-md flex flex-col mx-auto my-10 font-montserrat'>
        <div className='p-10 flex flex-col gap-4'>
              <h2 className=' font-semibold'>Teslimat Adresi</h2>
             

            <hr  className='w-full text-[#BDBDBD]'/>
            <div className='flex w-full justify-between'>
                <div className='w-[48%] border border-[#BDBDBD] rounded-md p-4'>
                    <div className='border border-[#BDBDBD] bg-[#FAFAFA] rounded-md flex flex-col h-24 justify-center items-center gap-1' onClick={() => setShowModal(true)}>
                        <BadgePlus color="#23856D" />
                        <span className='text-[#252B42] text-sm'>Yeni Adres Ekle</span>
                    </div>

                </div>
                <div className='w-[48%]'>
                     <div className="flex flex-col gap-4 justify-center items-center">
                        {addresses.map((address) => (
                            <div
                            key={address.id} 
                            className={`w-full border rounded-md p-4 text-sm text-[#252B42] bg-[#FAFAFA] flex flex-col gap-4 ${
                                selectedAddress?.id === address.id ? "border-blue-500" : "border-[#BDBDBD]"
                            }`}
                            >
                            <div className="flex justify-between items-center">
                                <input
                                type="radio"
                                name="selectedAddress"
                               checked={selectedAddress?.id === address.id}
                                className={`w-4 h-4 border rounded-md p-4 ${
                                    selectedAddress?.id === address.id ? "border-blue-500" : "border-[#BDBDBD]"
                                }`}

                                onChange={() => handleSelect(address)}
                                />
                                <div className='flex gap-2 items-center'>
                                    <SquarePen size={18} color="var(--color-blue-500) "   className="cursor-pointer" onClick={() => handleEdit(address)}/>
                                    <Trash2 size={18} color="var(--color-blue-500) "   className="cursor-pointer"  onClick={() => handleDelete(address.id)} />
                                </div>
                                
                            </div>
                            <div className="flex flex-col gap-2">
                              <div className='flex justify-between '>
                                <div className='flex gap-2 '>
                                  <UserRound size={16} color="#23856D" strokeWidth={2} />
                                  <span className="font-semibold text-[#23856D]">{address.title}</span>
                                  <span>|</span>
                                  <span>{address.name} {address.surname}</span>
                                </div>
                                <div className='flex gap-2'>
                                  <Phone size={16} color="#23856D" strokeWidth={2} />
                                <span>{address.phone}</span>
                                </div>
                              </div>
                                <div className='flex flex-col'>
                                  <p>{address.neighborhood}, {address.address}</p>
                                  <span>{address.district} / {address.city}</span>
                                </div>
                                
                                
                                
                            </div>
                            </div>
                        ))}
                        </div>
                </div>
            </div>
            
        </div>
        
    </section>

    <section className=' w-[70%] border border-[#BDBDBD] rounded-md flex flex-col mx-auto my-10 font-montserrat text-[#252B42]'>
        <div className='p-10 flex flex-col gap-4'>
            <h2 className=' font-semibold'>Ödeme Seçenekleri</h2>
            <hr  className='w-full text-[#BDBDBD]'/>
           <div className='flex flex-col border border-[#BDBDBD] rounded-tl-md rounded-tr-md p-4'>
                <div className='flex justify-between items-center '>
                    <h4>Kart Bilgileri</h4>
                    <button className='flex gap-2 border rounded-md border-[#23856D] text-sm items-center font-semibold py-1 px-2'  onClick={() => setShowModalCard(true)}>
                      <Plus size={18} color="#23856D"/> Kart Ekle</button>
                </div>
                
           </div>
           
          <div className="grid grid-cols-3 gap-4 py-4">
            { !payment || payment.length === 0 ? (
              <p className="text-sm text-gray-500 col-span-3">Kayıtlı kartınız yok</p>
            ) : (
              payment.map(p => (
                <div key={p.id} className="border border-[#BDBDBD] rounded-md p-3 flex flex-col justify-between bg-[#FAFAFA] gap-2">
                  <div className='flex justify-between'>
                     <input
                      type="radio"
                      name="selectedCard"
                      checked={selectedCard?.id === p.id}
                      onChange={() => setSelectedCard(p)}
                      className={`w-4 h-4 border rounded-md p-4 ${
                        selectedCard?.id === p.id ? "border-blue-500" : "border-[#BDBDBD]"
                      }`}
                    />


                    <div className='flex gap-3'>
                      <button className="cursor-pointer" onClick={() => handleEditCard(p)}><SquarePen size={18} color="var(--color-blue-500)"/></button>
                      <button className="text-red-500 cursor-pointer" onClick={() => handleDeleteCard(p.id)} ><Trash2 size={18} /></button>
                    </div>
                    
                  </div>
                  <div>
                    <p className="font-medium">{p.card_no}</p>
                    <p className="text-sm text-gray-500">{p.name_on_card} - {p.expire_month}/{p.expire_year}</p>
                  </div>
                  
                </div>
              ))
            )}
          </div>

        </div>
        
    </section>


    {showModal && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded w-[400px] relative">
              <button
                className="absolute top-2 right-6 text-gray-500"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
             <h3 className="text-lg font-semibold mb-3 text-[#252B42]">
              {isEditing ? "Adres Güncelle" : "Yeni Adres Ekle"}
            </h3>
              <form className="flex flex-col gap-2 " onSubmit={handleSubmit}>
                <input name="title" placeholder="Adres Başlığı" value={formData.title} onChange={handleChange} className="border px-2 py-1 rounded border-gray-600" required />
                <input name="name" placeholder="Ad" value={formData.name} onChange={handleChange} className="border px-2 py-1 rounded border-gray-600" required />
                <input name="surname" placeholder="Soyad" value={formData.surname} onChange={handleChange} className="border px-2 py-1 rounded border-gray-600" required />
               <input
                  name="phone"
                  placeholder="Telefon (05XXXXXXXXX)"
                  value={formData.phone}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*$/.test(val) && val.length <= 11) {
                      setFormData(prev => ({ ...prev, phone: val }));
                    }
                  }}
                  className="border px-2 py-1 rounded border-gray-600"
                  required
                />
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="border px-2 py-1 rounded border-gray-600 text-gray-500"
                  required
                >
                  <option value="">İl Seçiniz</option>
                  <option value="İstanbul">İstanbul</option>
                  <option value="Ankara">Ankara</option>
                  <option value="İzmir">İzmir</option>
                  <option value="Bursa">Bursa</option>
                  <option value="Antalya">Antalya</option>
                </select>
                <input name="district" placeholder="İlçe" value={formData.district} onChange={handleChange} className="border px-2 py-1 rounded border-gray-600" required />
                <input name="neighborhood" placeholder="Mahalle" value={formData.neighborhood} onChange={handleChange} className="border px-2 py-1 rounded border-gray-600" required />
                <textarea name="address" placeholder="Adres detayları" value={formData.address} onChange={handleChange} className="border px-2 py-1 rounded border-gray-600" rows={3} required />
                <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded mt-2">
                {isEditing ? "Güncelle" : "Kaydet"}
              </button>
              </form>
            </div>
          </div>
        )}
    
    {showModalCard && (
        <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-[400px] relative">
            <button className="absolute top-2 right-6 text-gray-500" onClick={() => setShowModalCard(false)}>X</button>
             <h3 className="text-lg font-semibold mb-3 text-[#252B42]">{editingCard ? "Kart Güncelle" : "Yeni Kart Ekle"}</h3>

            <form className="flex flex-col gap-2" onSubmit={handleSaveCard}>
              <input
                name="card_no"
                placeholder="Kart Numarası"
                value={cardData.card_no}
                onChange={handleCardChange }
                className="border px-2 py-1 rounded border-gray-600"
                required
              />
              <div className='flex gap-2'>
                <input
                name="expire_month"
                placeholder="Ay (MM)"
                value={cardData.expire_month}
                onChange={handleCardChange }
                className="border px-2 py-1 rounded border-gray-600 w-[50%]"
                type="number"
                min={1}
                max={12}
                required
              />
              <input
                name="expire_year"
                placeholder="Yıl (YYYY)"
                value={cardData.expire_year}
                onChange={handleCardChange }
                className="border px-2 py-1 rounded border-gray-600"
                type="number"
                min={2025}
                required
              />
              </div>
              <input
                name="name_on_card"
                placeholder="Kart Sahibinin Adı"
                value={cardData.name_on_card}
                onChange={handleCardChange }
                className="border px-2 py-1 rounded border-gray-600"
                required
              />
              
             <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded mt-2">
                {editingCard ? "Güncelle" : "Kaydet"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default OrderPage