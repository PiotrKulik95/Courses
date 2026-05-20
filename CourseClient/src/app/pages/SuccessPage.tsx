import React from 'react'
import { useLocation, useNavigate } from 'react-router';

export default function SuccessPage() {
    const location = useLocation();

    const attendantName = location.state?.message;

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-md w-full">
                <div className="flex justify-center mb-10">
                    <div className="relative">
                        <div className="w-24 h-24 bg-emerald-50 rounded-[32px] flex items-center justify-center animate-bounce duration-[2000ms]">
                            <div className="w-12 h-12 bg-emerald-500 rounded-[18px] flex items-center justify-center relative">
                                <div className="w-6 h-3 border-l-4 border-b-4 border-white -rotate-45 -translate-y-0.5"></div>
                            </div>
                        </div>
                        <div className="absolute -z-10 top-0 left-0 w-24 h-24 bg-emerald-200 blur-2xl opacity-40"></div>
                    </div>
                </div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-4 uppercase">
                    Miejsce zarezerwowane!
                </h1>
                <p className="text-gray-500 font-medium mb-8">
                    {attendantName} twoje zgłoszenie zostało przyjęte.
                </p>
                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => navigate('/')}
                        className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer w-full text-white py-5 rounded-2xl font-black text-lg hover:shadow-xl hover:shadow-blue-100 active:scale-[0.98] transition-all"
                    >
                        Wróć do strony głównej
                    </button>
                </div>
            </div>
        </div>
    );
}
