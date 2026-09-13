import { createBrowserRouter } from "react-router";
import { RootLayout } from "../layout/RootLayout";
import HomePage from "../pages/HomePage";
import CoursesDashboard from "../../features/courses/CoursesDashboard";
import ContactPage from "../pages/ContactPage";
import RegistrationCourseForm from "../../features/courses/form/RegistrationCourseForm";
import ErrorPage from "../pages/ErrorPage";
import SuccessPage from "../pages/SuccessPage";
import UserLoginForm from "../../features/users/form/UserLoginForm";
import ProtectedRoute from "./ProtectedRoute";
import AddCourseForm from "../../features/courses/form/AddCourseForm";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            { path: '', element: <HomePage></HomePage> },
            { path: 'courses', element: <CoursesDashboard></CoursesDashboard> },
            { path: 'contact', element: <ContactPage></ContactPage> },
            { path: 'courses/registrationCourse/:id', element: <RegistrationCourseForm></RegistrationCourseForm> },
            { path: 'courses/success', element: <SuccessPage></SuccessPage> },
            { path: 'login', element: <UserLoginForm></UserLoginForm> },
            { path: 'error', element: <ErrorPage></ErrorPage> },
            { path: '*', element: <ErrorPage></ErrorPage> },
            {
                element: <ProtectedRoute></ProtectedRoute>,
                children: [
                    { path: '/coursesAdd', element: <AddCourseForm></AddCourseForm> }
                ]
            }
        ]
    }
]);