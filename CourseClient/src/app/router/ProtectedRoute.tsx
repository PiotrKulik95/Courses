import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

export default function ProtectedRoute() {
    const { getCurrentUser } = useAuth();

    if (!getCurrentUser.data) {
        return <Navigate to='/'></Navigate>
    }

    return (
        <Outlet></Outlet>
    )
}
