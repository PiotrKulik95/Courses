import { useNavigate } from 'react-router';

export default function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="bg-[#F8FAFC]">
            <header className="relative pt-5 pb-16 text-center max-w-4xl mx-auto">
                <span className="text-[11px] font-black uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full border border-blue-100/50">
                    Górska Szkoła i Szkolenia
                </span>
                <h1 className="mt-6 text-5xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
                    Zdobądź wiedzę,<br />
                    <span className="text-blue-600">Zaryzykuj bezpiecznie.</span>
                </h1>
                <p className="mt-6 text-lg text-gray-500 font-medium max-w-xl mx-auto leading-relaxed">
                    Profesjonalne kursy pod okiem przewodników Tatrzańskich i instruktorów PZA. Naucz się poruszać w terenie wysokogórskim.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                    <button
                        onClick={() => navigate('/courses')}
                        className="bg-blue-600 text-white px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:cursor-pointer hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-100 transition-all text-center"
                    >
                        Zobacz Kursy
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="bg-white text-gray-900 border border-gray-200 px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:cursor-pointer hover:border-gray-400 transition-all"
                    >
                        Skontaktuj się
                    </button>
                </div>
            </header>
            <section className="px-6 py-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex items-start gap-4">
                    <span className="text-2xl p-3 bg-emerald-50 rounded-2xl text-emerald-600">🛡️</span>
                    <div>
                        <h3 className="font-black text-gray-900 uppercase tracking-tight text-sm">100% Bezpieczeństwa</h3>
                        <p className="text-xs text-gray-500 font-medium mt-1">Małe grupy, certyfikowany sprzęt Black Diamond i Petzl.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex items-start gap-4">
                    <span className="text-2xl p-3 bg-blue-50 rounded-2xl text-blue-600">🏔️</span>
                    <div>
                        <h3 className="font-black text-gray-900 uppercase tracking-tight text-sm">Przewodnicy IVBV / PZA</h3>
                        <p className="text-xs text-gray-500 font-medium mt-1">Szkolisz się wyłącznie u ratowników TOPR i instruktorów.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-[32px] border border-gray-100 shadow-sm flex items-start gap-4">
                    <span className="text-2xl p-3 bg-amber-50 rounded-2xl text-amber-600">🎓</span>
                    <div>
                        <h3 className="font-black text-gray-900 uppercase tracking-tight text-sm">Oficjalne Certyfikaty</h3>
                        <p className="text-xs text-gray-500 font-medium mt-1">Każdy kurs kończy się wystawieniem patentu/certyfikatu szkoły.</p>
                    </div>
                </div>
            </section>
            <footer className="mt-20 border-t border-gray-200/60 rounded-[40px] bg-white py-10 px-6 text-center">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    © 2026 MountainCourses. Wszelkie prawa zastrzeżone.
                </p>
                <button
                    onClick={() => navigate('/contact')}
                    className="mt-2 text-[11px] font-black text-blue-600 hover:cursor-pointer hover:underline uppercase tracking-wider"
                >
                    Masz pytania? Przejdź do kontaktu
                </button>
            </footer>
        </div >
    );
}
