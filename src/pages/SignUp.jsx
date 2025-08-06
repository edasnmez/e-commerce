import React, { useEffect, useState } from 'react' ;
import { useForm } from 'react-hook-form';
import api from '../api';
import axios from 'axios';
function SignUp() {
   const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');

     useEffect(() => {
        api.get('/roles')
      .then((res) => {
        setRoles(res.data);
        // Varsayılan olarak "customer" rolünü seç (örnek: name 'customer' ise)
        const customerRole = res.data.find(role => role.name.toLowerCase() === 'müşteri');
        if (customerRole) {
          setSelectedRole(customerRole.id.toString());
        }
      })
      .catch((err) => {
        console.error('Rol verileri alınamadı:', err);
      });
  }, []);

    const onSubmit = async (data) => {
    try {
      // Eğer store seçili değilse store objesini gönderme
      if (selectedRole !== roles.find(r =>  r.name.toLowerCase() === 'mağaza')?.id.toString()) {
        delete data.store;
      }

      // role_id değerini manuel güncelle (çünkü select inputa onChange ekledik)
      data.role_id = selectedRole;

      await axios.post('https://workintech-fe-ecommerce.onrender.com/signup', data);

      alert('You need to click link in email to activate your account!');
      // Örneğin önceki sayfaya yönlendirme veya başka işlem yapılabilir
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        alert('Kayıt hatası: ' + error.response.data.message);
      } else {
        alert('Kayıt işlemi başarısız oldu.');
      }
      console.error('Kayıt hatası:', error);
    }
  };

  return (
    <>
    <div className='px-10 py-10 flex justify-center items-center h-[760px] font-montserrat'>
        <div className='flex w-full h-full shadow rounded-2xl'>
            
            <div className="w-[60%] h-full flex flex-col justify-center items-center gap-7">
                  <h2 className="text-2xl font-bold text-[#252B42]">Sign Up</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className='w-4/5 flex flex-col justify-center items-center gap-4'>
                    <div className='flex gap-5 w-full'>
                         <div className='flex flex-col gap-2 w-full'>
                        <label className='text-[#595959] text-sm font-bold'>Name</label>
                        <input
                            className="input py-2 px-3 border border-[#9C9AA5] rounded-lg text-sm"
                             {...register('name', { required: 'İsim gerekli', minLength: { value: 3, message: 'En az 3 karakter olmalı' } })}
                        />
                         {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                     </div>
                     <div className='flex flex-col gap-2 w-full'>
                        <label className='text-[#595959] text-sm font-bold'>Email</label>
                        <input
                            className="input px-4 py-2 border border-[#9C9AA5] rounded-lg text-sm"
                           {...register('email', {
                                required: 'Email gerekli',
                                pattern: { value: /^\S+@\S+$/i, message: 'Geçerli bir email girin' },
                            })}
                        />
                        {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                    </div>
                    </div>
                    <div className='flex gap-5 w-full'>
                        <div className='flex flex-col gap-2 w-full'>
                        <label className='text-[#595959] text-sm font-bold'>Password</label>
                        <input
                            type="password"
                            className="input px-4 py-2 border border-[#9C9AA5] rounded-lg text-sm"
                             {...register('password', {
                                required: 'Şifre gerekli',
                                pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&^])[A-Za-z\d@$!%*?#&^]{8,}$/,
                                message: 'En az 8 karakter, büyük, küçük, sayı ve özel karakter olmalı',
                                },
                            })}
                        />
                         {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                        </div>
                         <div className='flex flex-col gap-2 w-full'>
                            <label className='text-[#595959] text-sm font-bold'>Confirm Password</label>
                            <input
                                type="password"
                                className="input px-3 py-2 border border-[#9C9AA5] rounded-lg text-sm"
                                {...register('confirmPassword', {
                                required: 'Şifre tekrarı gerekli',
                                validate: (value, formValues) => {
                                const password = formValues.password;
                                return value === password || 'Şifreler eşleşmiyor';
                                }
                            })}
                            />
                            {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-[#595959] text-sm font-bold'>Role</label>
                        <select className="input px-3 py-2 border border-[#9C9AA5] rounded-lg text-sm w-[300px]" 
                            value={selectedRole}
                            onChange={(e) => setSelectedRole(e.target.value)}
                            >
                            {roles.map(role => (
                                <option key={role.id} value={role.id.toString()}>
                                {role.name}
                                </option>
                            ))}
                        </select>
                            {errors.role_id && <p className="text-red-500 text-xs">{errors.role_id.message}</p>}
                        </div>
                        
                        {roles.find(r => r.id.toString() === selectedRole && (r.name.toLowerCase() === 'mağaza')) && (
                            <>
                                <div className='flex gap-5 w-full'>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <label className='text-[#595959] text-sm font-bold'>Store Name</label>
                                        <input
                                        className="input px-3 py-2 border border-[#9C9AA5] rounded-lg text-sm"
                                        {...register('store.name', { required: 'Mağaza adı gerekli', minLength: { value: 3, message: 'En az 3 karakter olmalı' } })}
                                        />
                                        {errors.store?.name && <p className="text-red-500">{errors.store.name.message}</p>}
                                    </div>
                                    <div className='flex flex-col gap-2 w-full'>
                                        <label className='text-[#595959] text-sm font-bold'>Store Phone</label>
                                        <input
                                        className="input px-3 py-2 border border-[#9C9AA5] rounded-lg text-xs"
                                        {...register('store.phone', {
                                            required: 'Telefon numarası gerekli',
                                            pattern: { value: /^(\+90|0)?5\d{9}$/, message: 'Geçerli Türkiye telefonu girin' }
                                        })}
                                        />
                                        {errors.store?.phone && <p className="text-red-500 text-xs">{errors.store.phone.message}</p>}
                                    </div>
                                </div>
                                <div className='flex gap-5 w-full'>
                                     <div className='flex flex-col gap-2 w-full'>
                                        <label className='text-[#595959] text-sm font-bold'>Store Tax ID</label>
                                        <input
                                        className="input px-3 py-2 border border-[#9C9AA5] rounded-lg text-xs"
                                        {...register('store.tax_no', {
                                            required: 'Vergi numarası gerekli',
                                            pattern: { value: /^T\d{4}V\d{6}$/, message: 'Format: TXXXXVXXXXXX' }
                                        })}
                                        />
                                        {errors.store?.tax_no && <p className="text-red-500 text-xs">{errors.store.tax_no.message}</p>}
                                    </div>

                                    <div className='flex flex-col gap-2 w-full'>
                                        <label className='text-[#595959] text-sm font-bold'>Store Bank Account (IBAN)</label>
                                        <input
                                        className="input px-3 py-2 border border-[#9C9AA5] rounded-lg text-xs"
                                        {...register('store.bank_account', {
                                            required: 'IBAN gerekli',
                                            pattern: { value: /^TR\d{2}\d{16}$/, message: 'Geçerli IBAN girin' }
                                        })}
                                        />
                                        {errors.store?.bank_account && <p className="text-red-500 text-xs">{errors.store.bank_account.message}</p>}
                                    </div>
                                </div>
                            </>
                        )}
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-6 rounded-lg disabled:opacity-50"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Gönderiliyor...' : 'Kayıt Ol'}
                        </button>
                  </form>
            </div>

            <div className="relative w-[40%] h-full overflow-hidden rounded-tr-2xl rounded-br-2xl">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="/assets/SignUp/bubbles.mp4"
                autoPlay
                loop
                muted
            />
            </div>
        </div>
    </div>

    
    </>
  )
}

export default SignUp