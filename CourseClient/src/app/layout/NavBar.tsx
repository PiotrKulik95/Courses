import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export const NavBar = () => {
    const location = useLocation();
    const locationTo = location.pathname === '/' ? 'courses' : '/';
    const navigate = useNavigate();

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-100'
            : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
        }`;

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-center gap-12">
                <div className="flex items-center gap-2">
                    <span onClick={() => navigate(locationTo)} className="font-bold text-lg tracking-tight text-slate-800 hover:cursor-pointer">
                        MountainCourses
                    </span>
                </div>
                <div className="flex items-center space-x-2">
                    <NavLink to="/" className={navLinkClass}>
                        Start
                    </NavLink>
                    <NavLink to="/courses" className={navLinkClass}>
                        Kursy
                    </NavLink>
                    <NavLink to="/contact" className={navLinkClass}>
                        Kontakt
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};