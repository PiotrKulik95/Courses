import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LogOut, User } from 'lucide-react';
import { useUser } from '../../hooks/useUser';
import { toast } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth';
import { useQueryClient } from '@tanstack/react-query';

export const NavBar = () => {
    const { getCurrentUser } = useAuth();
    const { logOutUser } = useUser();
    const queryClient = useQueryClient();

    const location = useLocation();
    const locationTo = location.pathname === '/' ? 'courses' : '/';
    const navigate = useNavigate();

    const navLinkClass = ({ isActive }: { isActive: boolean }) =>
        `px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${isActive
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-100'
            : 'text-gray-500 hover:text-blue-600 hover:bg-gray-50'
        }`;

    const handleLogOut = () => {
        logOutUser.mutate(undefined, {
            onSuccess: () => {
                toast.success('Pomyślnie wylogowano');
            },
            onError: () => {
                toast.error('Wystąpił problem z wylogowaniem');
            },
            onSettled: () => {
                queryClient.setQueryData(['currentUser'], null);

                navigate('/courses', { replace: true })
            }
        });
    }

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
                    {
                        getCurrentUser.data ? (
                            <>
                                <NavLink to="/coursesAdd" className={navLinkClass}>
                                    Dodaj kurs
                                </NavLink>
                                <div className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 text-gray-500 hover:text-red-600 hover:bg-gray-50 hover:cursor-pointer">
                                    <LogOut onClick={handleLogOut} className="w-5 h-5" />
                                </div>
                            </>
                        ) : (

                            <NavLink to="/login" className={navLinkClass}>
                                <User className="w-5 h-5" />
                            </NavLink>
                        )
                    }
                </div>
            </div>
        </nav >
    );
};