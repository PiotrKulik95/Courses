import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { userLoginSchema, type UserLoginSchema } from "../schema/userLoginSchema";
import { zodResolver } from '@hookform/resolvers/zod';
import { useUser } from '../../../hooks/useUser';
import type { AxiosError } from 'axios';
import { useQueryClient } from '@tanstack/react-query';

export default function UserLoginForm() {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { register, setError,
        handleSubmit, formState: { errors } } = useForm<UserLoginSchema>({
            resolver: zodResolver(userLoginSchema)
        });

    const { logInUser } = useUser();

    const handleFormSubmit = async (data: UserLoginSchema) => {
        logInUser.mutate(data, {
            onSuccess: async () => {
                await queryClient.invalidateQueries({ queryKey: ['currentUser'] });

                navigate('/coursesAdd');
            },
            onError: (error) => {
                const axiosError = error as AxiosError;
                if (axiosError.status === 401) {
                    setError('Email', { message: 'Podaj poprawny adres email' })
                    setError('Password', { message: 'Podaj hasło' })
                }
                else {
                    navigate('/error', { state: { message: "Wystąpił nieoczekiwany błąd" }, replace: true });
                    return;
                }
            }
        });
    }

    return (
        <div className="bg-[#F8FAFC] py-4 px-4">
            <div className="max-w-xl mx-auto">
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">
                        Wprowadź dane logowania
                    </h1>
                </div>
                <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-10">
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Email</label>
                            <input
                                type="text"
                                placeholder="jkowalski@gmail.com"
                                {...register('Email')}
                                className={`w-full p-4 bg-gray-50 border-2 border-transparent ${errors.Email ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                            {errors.Email && (<p className="ml-1 text-xs font-bold text-red-600 uppercase tracking-tighter">{errors.Email.message}</p>)}
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Hasło</label>
                            <input
                                type="password"
                                {...register('Password')}
                                className={`w-full p-4 bg-gray-50 border-2 border-transparent ${errors.Password ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                            {errors.Password && (<p className="ml-1 text-xs font-bold text-red-600 uppercase tracking-tighter">{errors.Password.message}</p>)}
                        </div>
                        <div className="pt-4">
                            <button disabled={logInUser.isPending} className={`${logInUser.isPending ? 'bg-gray-400 cursor-not-allowed opacity-70' : 'bg-blue-600 hover:bg-blue-700 hover:cursor-pointer'} w-full text-white py-5 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-blue-100 active:scale-[0.98] transition-all`}>
                                Zaloguj się
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
