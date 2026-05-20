import { useNavigate } from "react-router";
import type { Course } from "../../types";

export const CourseCard = ({ id, title, startDate, endDate, price, maxCapacity, attendantsCount, categoryName }: Course) => {

    const navigate = useNavigate();
    const occupancyRate = (attendantsCount / maxCapacity) * 100;
    const isFull = attendantsCount >= maxCapacity;

    const handleRegistration = (id: number) => {
        navigate(`registrationCourse/${id}`);
    }

    return (
        <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden">
            <div className="h-32 bg-slate-900 relative p-6 flex items-end">
                <span className="absolute top-6 right-6 bg-white/10 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full border border-white/20 uppercase tracking-widest">
                    {categoryName}
                </span>
            </div>
            <div className="p-6 flex flex-col flex-grow">
                <h3 title={title} className="text-xl font-black text-gray-900 leading-tight group-hover:text-blue-600 transition-colors h-12 line-clamp-2">
                    {title}
                </h3>
                <div className="mt-4 flex items-center gap-2">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Termin kursu</span>
                        <span className="text-sm font-semibold text-gray-700">
                            {startDate} — {endDate}
                        </span>
                    </div>
                </div>
                <div className="mt-6 space-y-2">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] font-bold text-gray-400 uppercase">Uczestnicy</span>
                        <span className={`text-xs font-black ${isFull ? 'text-red-500' : 'text-blue-600'}`}>
                            {attendantsCount} / {maxCapacity}
                        </span>
                    </div>
                    <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                        <div
                            className={`h-full transition-all duration-500 ${isFull ? 'bg-red-500' : 'bg-blue-600'}`}
                            style={{ width: `${Math.min(occupancyRate, 100)}%` }}
                        ></div>
                    </div>
                </div>
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-50">
                    <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Cena kursu</span>
                        <span className="text-2xl font-black text-gray-900 leading-none">
                            {price} zł
                        </span>
                    </div>

                    <button
                        disabled={isFull}
                        onClick={() => handleRegistration(id)}
                        className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all active:scale-95 shadow-lg shadow-blue-100 hover:cursor-pointer
              ${isFull
                                ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                    >
                        {isFull ? 'Brak miejsc' : 'Zapisz się'}
                    </button>
                </div>
            </div>
        </div>
    );
};