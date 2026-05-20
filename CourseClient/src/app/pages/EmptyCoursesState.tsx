import { useNavigate } from 'react-router';

export default function EmptyCoursesState() {
    const navigate = useNavigate();

    return (
        <div className="w-full bg-white rounded-[40px] border border-gray-100 p-8 md:p-12 shadow-sm text-center max-w-2xl mx-auto my-10">
            <div className="flex justify-center mb-8">
                <div className="relative w-32 h-24 bg-gray-50 rounded-2xl flex items-end justify-center overflow-hidden border border-gray-100/50">
                    <div className="absolute w-16 h-16 bg-gray-200 rotate-45 rounded-tl-lg translate-y-6 -translate-x-4"></div>
                    <div className="absolute w-20 h-20 bg-gray-300 rotate-45 rounded-tl-xl translate-y-8 translate-x-6 z-10"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 via-gray-50/90 to-transparent z-20 backdrop-blur-[1px]"></div>
                </div>
            </div>
            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tighter mb-3">
                Szlaki chwilowo puste
            </h3>

            <p className="text-gray-500 font-medium text-sm max-w-md mx-auto leading-relaxed mb-8">
                Aktualnie wszystkie grupy szkoleniowe są pełne lub przygotowujemy nowy grafik wypraw na nadchodzący sezon.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <button
                    type="button"
                    onClick={() => navigate('/contact')}
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:cursor-pointer hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-100 active:scale-[0.98] transition-all"
                >
                    Zapytaj o indywidualny termin
                </button>

                <button
                    type="button"
                    onClick={() => window.location.reload()}
                    className="w-full bg-white text-gray-400 py-4 px-6 rounded-2xl font-black text-xs uppercase tracking-widest border border-gray-100 hover:text-gray-900 hover:cursor-pointer hover:border-gray-300 transition-all"
                >
                    Odśwież stronę
                </button>
            </div>

        </div>
    );
}