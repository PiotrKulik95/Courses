import { zodResolver } from "@hookform/resolvers/zod";
import { courseAddSchema, type CourseAddSchema } from "../schema/courseAddSchema";
import { useForm } from "react-hook-form";
import { useCourse } from "../../../hooks/useCourse";
import { useNavigate } from "react-router";



export default function AddCourseForm() {
    const navigate = useNavigate();
    const { addCourse } = useCourse();

    const { register, //setError,
        handleSubmit, formState: { errors } } = useForm<CourseAddSchema>({
            resolver: zodResolver(courseAddSchema)
        });

    const handleSubmitForm = async (data: CourseAddSchema) => {
        addCourse.mutate(data, {
            onSuccess: () => {
                navigate('/courses');
            },
            onError: (error) => {
                console.log(error);
            }
        });
    }

    const getFutureDateString = (daysToAdd: number) => {
        const date = new Date();
        date.setDate(date.getDate() + daysToAdd);
        return date.toISOString().split('T')[0];
    };

    return (
        <div className="bg-[#F8FAFC] py-4 px-4">
            <div className="max-w-xl mx-auto">
                <div className="mb-10">
                    <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-2">
                        Wprowadź dane nowego kursu
                    </h1>
                </div>
                <div className="bg-white rounded-[40px] shadow-sm border border-gray-100 p-8 md:p-10">
                    <form onSubmit={handleSubmit(handleSubmitForm)} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Tytuł</label>
                            <input
                                type="text"
                                placeholder="Wspaniała wycieczka w góry"
                                {...register('Title')}
                                className={`w-full p-4 bg-gray-50 border-2 border-transparent ${errors.Title ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                            {errors.Title && (<p className="ml-1 text-xs font-bold text-red-600 uppercase tracking-tighter">{errors.Title.message}</p>)}
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Data rozpoczęcia</label>
                            <input
                                type="date"
                                defaultValue={getFutureDateString(7)}
                                {...register('StartDate')}
                                className={`w-full p-4 bg-gray-50 border-2 border-transparent ${errors.StartDate ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                            {errors.StartDate && (<p className="ml-1 text-xs font-bold text-red-600 uppercase tracking-tighter">{errors.StartDate.message}</p>)}
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Data zakończenia</label>
                            <input
                                type="date"
                                defaultValue={getFutureDateString(14)}
                                {...register('EndDate')}
                                className={`w-full p-4 bg-gray-50 border-2 border-transparent ${errors.EndDate ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                            {errors.EndDate && (<p className="ml-1 text-xs font-bold text-red-600 uppercase tracking-tighter">{errors.EndDate.message}</p>)}
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Cena</label>
                            <input
                                type="number"
                                defaultValue={1000}
                                {...register('Price')}
                                className={`w-full p-4 bg-gray-50 border-2 border-transparent ${errors.Price ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                            {errors.Price && (<p className="ml-1 text-xs font-bold text-red-600 uppercase tracking-tighter">{errors.Price.message}</p>)}
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Liczba uczestników</label>
                            <input
                                type="number"
                                defaultValue={1}
                                {...register('MaxCapacity')}
                                className={`w-full p-4 bg-gray-50 border-2 border-transparent ${errors.MaxCapacity ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                            {errors.MaxCapacity && (<p className="ml-1 text-xs font-bold text-red-600 uppercase tracking-tighter">{errors.MaxCapacity.message}</p>)}
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">Kategoria</label>
                            <input
                                type="number"
                                defaultValue={1}
                                {...register('CategoryId')}
                                className={`w-full p-4 bg-gray-50 border-2 border-transparent ${errors.CategoryId ? 'border-red-600 focus:border-red-500' : 'border-transparent focus:border-blue-600'} focus:bg-white rounded-2xl outline-none transition-all font-medium text-gray-900`}
                            />
                            {errors.CategoryId && (<p className="ml-1 text-xs font-bold text-red-600 uppercase tracking-tighter">{errors.CategoryId.message}</p>)}
                        </div>
                        <div className="pt-4">
                            <button disabled={addCourse.isPending} className={`${addCourse.isPending ? 'bg-gray-400 cursor-not-allowed opacity-70' : 'bg-blue-600 hover:bg-blue-700 hover:cursor-pointer'} w-full text-white py-5 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-blue-100 active:scale-[0.98] transition-all`}>
                                Dodaj kurs
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
