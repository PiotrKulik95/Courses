import { useNavigate, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import { courseRegistrationSchema, type CourseRegistrationSchema } from '../schema/courseRegistrationSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAddAttendant } from '../../../hooks/useCourse';
import axios from 'axios';

export default function RegistrationCourseForm() {
    const navigate = useNavigate();

    const { id } = useParams();

    const { mutateAsync, isPending } = useAddAttendant();

    const { register, setError, handleSubmit, formState: { errors } } = useForm<CourseRegistrationSchema>({
        resolver: zodResolver(courseRegistrationSchema),
        defaultValues: { CourseId: id ? Number(id) : 0 }
    });

    const handleFormSubmit = async (data: CourseRegistrationSchema) => {
        try {
            await mutateAsync(data);
            navigate('/courses/success', { state: { message: data.Name }, replace: true });
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const responseData = error.response?.data;

                if (responseData) {
                    if (responseData.success === false) {
                        navigate('/error', { state: { message: responseData.message }, replace: true });
                        return;
                    }

                    if (responseData.errors) {
                        Object.keys(responseData.errors).forEach((field) => {
                            const messages = responseData.errors[field];

                            setError(field as keyof CourseRegistrationSchema, {
                                type: "server",
                                message: messages[0]
                            });
                        });
                        return;
                    }
                }

                navigate('/error', { state: { message: "Błąd serwera. Spróbuj ponownie później." }, replace: true });
            } else {
                const err = error as Error;
                navigate('/error', { state: { message: err.message || "Wystąpił nieoczekiwany błąd" }, replace: true });
            }
        }
    }

    return (
        <div className="min-h-screen bg-[#F8FAFC] py-4 px-4">
            <div className="max-w-xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="group flex items-center gap-2 text-gray-400 hover:text-gray-900 hover:cursor-pointer transition-colors mb-8"
                >
                    <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
                    <span className="text-xs font-black uppercase tracking-widest">Wróć do kursów</span>
                </button>
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">
                        Zapisz się na kurs
                    </h1>
                    <p className="text-gray-500 font-medium">
                        Wypełnij poniższe dane, aby zarezerwować miejsce
                    </p>
                </div>

                <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-10">
                    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Imię</label>
                            <input
                                type="text"
                                placeholder="Jan"
                                {...register('Name')}

                                className={`w-full p-4 bg-gray-50 border-2 border-transparent ${errors.Name ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                            {errors.Name && (<p className="ml-1 text-xs font-bold text-red-600 uppercase tracking-tighter">{errors.Name.message}</p>)}
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Nazwisko</label>
                            <input
                                type="text"
                                placeholder="Kowalski"
                                {...register('Surname')}

                                className={`w-full p-4 bg-gray-50 border-2 border-transparent ${errors.Surname ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                            {errors.Surname && (<p className="ml-1 text-xs font-bold text-red-600 uppercase tracking-tighter">{errors.Surname.message}</p>)}
                        </div>
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
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Numer telefonu</label>
                            <input
                                type="text"
                                placeholder="600724987"
                                {...register('Phone')}

                                className={`w-full p-4 bg-gray-50 border-2 border-transparent ${errors.Phone ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                            {errors.Phone && (<p className="ml-1 text-xs font-bold text-red-600 uppercase tracking-tighter">{errors.Phone.message}</p>)}
                        </div>

                        <div className="pt-4">
                            <button disabled={isPending} className={`${isPending ? 'bg-gray-400 cursor-not-allowed opacity-70' : 'bg-blue-600 hover:bg-blue-700 hover:cursor-pointer'} w-full text-white py-5 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-blue-100 active:scale-[0.98] transition-all`}>
                                Potwierdź rejestrację
                            </button>
                            <p className="text-center mt-4 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                Bezpieczne zapisy przez MountainCourses
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
