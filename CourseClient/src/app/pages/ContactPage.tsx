import { useNavigate } from 'react-router';

export default function ContactPage() {

    const navigate = useNavigate();

    return (
        <div className="bg-[#F8FAFC] flex items-center justify-center p-4">
            <div className="mx-auto max-w-xl w-full">
                <div className="rounded-[40px] border border-gray-100 bg-white p-8 shadow-sm md:p-10 space-y-6">
                    <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                            Infolinia
                        </span>
                        <div className="w-full rounded-2xl bg-gray-50 p-5 font-medium border border-transparent">
                            <a
                                href="tel:+48123456789"
                                className="text-xl font-black text-blue-600 hover:text-blue-700 hover:underline block break-all"
                            >
                                +48 123 456 789
                            </a>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                            Godziny pracy
                        </span>
                        <div className="w-full rounded-2xl bg-gray-50 p-5 font-medium border border-transparent flex justify-between items-center">
                            <span className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                                Poniedziałek - Piątek
                            </span>
                            <span className="text-blue-600 bg-blue-50 px-3 py-1.5 rounded-xl text-xs font-black tracking-tight border border-blue-100/50">
                                8:00 - 16:00
                            </span>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 ml-1">
                            Napisz do nas
                        </span>
                        <div className="w-full rounded-2xl bg-gray-50 p-5 font-medium border border-transparent">
                            <a
                                href="mailto:kontakt@mountaincourses.pl"
                                className="text-lg font-black text-blue-600 hover:text-blue-700 hover:underline block break-all"
                            >
                                kontakt@mountaincourses.pl
                            </a>
                        </div>
                    </div>
                    <div className="pt-4 border-t border-gray-50">
                        <button
                            type="button"
                            onClick={() => navigate('/')}
                            className="w-full rounded-2xl bg-blue-600 py-5 text-lg font-black text-white transition-all hover:cursor-pointer hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-100 active:scale-[0.98]"
                        >
                            Wróć do strony głównej
                        </button>
                        <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            Odpowiadamy na wiadomości w ciągu 24h
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}