import { RouterProvider } from 'react-router-dom';
import '../../index.css';
import { router } from '../router/Routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const queryClient = new QueryClient();

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router}></RouterProvider>
            </QueryClientProvider>
            <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover></ToastContainer>
        </>


    )
}

export default App
