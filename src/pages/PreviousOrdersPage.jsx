import React, { useEffect, useState } from "react";
import Header from "../layout/Header";
import api from "../api";
import { toast } from "react-toastify";

function PreviousOrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openRow, setOpenRow] = useState(null); // collapsible

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Giriş yapmalısınız");

      const res = await api.get("/order", {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("API Response:", res.data);
      setOrders(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Siparişler yüklenirken hata oluştu");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) return <p className="text-center mt-10">Yükleniyor...</p>;

  const lastOrder = orders.length > 0 ? orders[orders.length - 1] : null;

  return (
    <>
      <Header />

      {/* Son sipariş tebrik mesajı */}
      {lastOrder && (
        <div className="mb-8 p-5 border-l-4 border-green-600 bg-green-50 rounded shadow">
          <h3 className="text-lg font-semibold text-green-700">
            🎉 Tebrikler! Siparişiniz başarıyla verilmiştir.
          </h3>

          <p className="mt-2 text-gray-700">
            <strong>Toplam Tutar:</strong> {lastOrder.price} TL
          </p>

          {lastOrder.products?.length > 0 && (
            <>
              <p className="mt-1 text-gray-700">
                <strong>Ürün:</strong> {lastOrder.products[0].detail}
              </p>
              <p className="mt-1 text-gray-700">
                <strong>Adet:</strong> {lastOrder.products[0].count}
              </p>
            </>
          )}
        </div>
      )}

      <div className="w-[80%] mx-auto my-10 font-montserrat">
        <h2 className="font-semibold text-xl mb-6">Önceki Siparişleriniz</h2>

        {orders.length === 0 ? (
          <p>Henüz siparişiniz yok.</p>
        ) : (
          <table className="w-full border-collapse shadow-md">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border p-3">Sipariş ID</th>
                <th className="border p-3">Tarih</th>
                <th className="border p-3">Toplam</th>
                <th className="border p-3">Detay</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <React.Fragment key={index}>
                  <tr className="hover:bg-gray-50">
                    <td className="border p-3">{index + 1}</td>
                    <td className="border p-3">
                      {new Date(order.order_date).toLocaleString()}
                    </td>
                    <td className="border p-3">{order.price} TL</td>
                    <td
                      className="border p-3 text-blue-600 cursor-pointer"
                      onClick={() =>
                        setOpenRow(openRow === index ? null : index)
                      }
                    >
                      {openRow === index ? "Gizle ▲" : "Göster ▼"}
                    </td>
                  </tr>
                  {openRow === index && (
                    <tr>
                      <td colSpan="4" className="border p-4 bg-gray-50">
                        <p>
                          <strong>Adres ID:</strong> {order.address_id}
                        </p>

                        <p className="mt-3 font-semibold">Ürünler:</p>
                        <ul className="list-disc ml-6 mt-1">
                          {order.products?.length > 0 ? (
                            order.products.map((p, idx) => (
                              <li key={idx}>
                                {p.detail} — <strong>{p.count} adet</strong>
                              </li>
                            ))
                          ) : (
                            <li>Ürün bilgisi yok</li>
                          )}
                        </ul>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default PreviousOrdersPage;
