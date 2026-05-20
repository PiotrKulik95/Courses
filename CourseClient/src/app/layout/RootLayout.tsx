import { Outlet } from 'react-router-dom';
import { NavBar } from './NavBar';

export const RootLayout = () => (
    <div className="bg-slate-50">
        <NavBar />
        <main className="max-w-7xl mx-auto py-4 px-4">
            <Outlet />
        </main>
    </div>
);