
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../store/actions/clientActions'; 
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom/cjs/react-router-dom';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const [remember, setRemember] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
  try {
    await dispatch(loginUser(data.email, data.password, remember));
    toast.success('Giriş başarılı!');

    if (history.action === 'POP' && history.length <= 2) {
      history.push('/home');
    } else {
      history.goBack();
    }

  } catch (error) {
    toast.error('Giriş başarısız: ' + (error?.message || 'Bir hata oluştu'));
  }
};

   
  return (
    <>
        <div className='px-40 py-10 flex justify-center items-center h-[600px] font-montserrat'>
             <div className='flex w-full h-full shadow rounded-2xl '>
                <div className="relative w-1/2 h-full rounded-tl-2xl rounded-bl-2xl overflow-hidden ">
                    <video
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        src="/public/assets/SignUp/original-9e17872fb6e2e91ca7ba42d46862a0d2.mp4"
                        autoPlay
                        loop
                        muted
                    />
                </div>
                <div className="w-1/2 h-full flex flex-col justify-center items-center gap-7">
                     <form onSubmit={handleSubmit(onSubmit)} className='w-4/5 flex flex-col justify-center items-center gap-4'>
                        <h2 className="text-2xl font-bold text-[#252B42]">Login</h2>
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
                    <div className='flex flex-col gap-2 w-full'>
                        <label className='text-[#595959] text-sm font-bold'>Password</label>
                        <input
                            type="password"
                            className="input px-4 py-2 border border-[#9C9AA5] rounded-lg text-sm"
                            {...register('password', {
                            required: 'Şifre gerekli',
                            minLength: {
                                value: 6,
                                message: 'Şifre en az 6 karakter olmalı',
                            },
                            })}
                        />
                        {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                    </div>
                    <div className='flex justify-between items-center w-full'>
                        <label className='text-sm flex items-center gap-2'>

                            <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} />
                            Remember me
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="bg-[#252B42] text-white px-6 py-2 rounded-lg font-semibold w-1/3"
                        >
                        Login
                    </button>
                     </form>
                    
                    <Link to="/signup" className="text-gray-400 underline ">Create an account</Link>
                       
                </div>
             </div>
             
        </div>
    </>
  )
}
 
export default Login