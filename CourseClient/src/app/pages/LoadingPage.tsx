import React from 'react'

export default function LoadingPage() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-6">
                <div className="relative">
                    <div className="w-16 h-16 border-[6px] border-gray-100 rounded-full"></div>
                    <div className="absolute top-0 left-0 w-16 h-16 border-[6px] border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <div className="text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 ml-1">
                        Wczytywanie
                    </p>
                </div>
            </div>
        </div>
    );
}
