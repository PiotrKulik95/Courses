import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function ErrorPage() {
    const location = useLocation();

    const errorMessage = location.state?.message || "Coś poszło nie tak";

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">
            <div className="max-w-md w-full">
                <div className="flex justify-center mb-10">
                    <div className="relative">
                        <div className="w-24 h-24 bg-red-50 rounded-[32px] flex items-center justify-center animate-pulse">
                            <div className="w-12 h-12 bg-red-500 rounded-[18px] flex items-center justify-center">
                                <div className="w-1.5 h-6 bg-white rounded-full mb-1"></div>
                                <div className="absolute bottom-6 w-1.5 h-1.5 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="absolute -z-10 top-0 left-0 w-24 h-24 bg-red-200 blur-2xl opacity-30"></div>
                    </div>
                </div>
                <h1 className="text-4xl font-black text-gray-900 tracking-tighter mb-4 uppercase">
                    {errorMessage}
                </h1>
                <div className="flex flex-col gap-3">
                    <button
                        onClick={() => navigate('/')}
                        className="w-full bg-white text-gray-400 py-4 rounded-2xl font-black text-sm uppercase tracking-widest border border-gray-100 hover:text-gray-900 hover:cursor-pointer hover:border-gray-300 transition-all"
                    >
                        Wróć do strony głównej
                    </button>
                </div>
            </div>
        </div>
    );
};
