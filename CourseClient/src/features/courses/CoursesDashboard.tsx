import EmptyCoursesState from "../../app/pages/EmptyCoursesState";
import ErrorPage from "../../app/pages/ErrorPage";
import LoadingPage from "../../app/pages/LoadingPage";
import { useCourses } from "../../hooks/useCourse";
import { CourseCard } from "./CourseCard";

export default function CoursesDashboard() {
    const { data: courses, isLoading, isError } = useCourses();

    if (isLoading) {
        return <LoadingPage></LoadingPage>
    }

    if (isError || !courses) {
        return <ErrorPage></ErrorPage>
    }

    if (courses.length === 0) {
        return <EmptyCoursesState></EmptyCoursesState>
    }

    return (
        <div className="relative">
            <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100 py-6 mb-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <h1 className="text-3xl font-black text-gray-900 tracking-tighter">
                        Dostępne Kursy
                    </h1>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">
                        Liczba dostępnych kursów ({courses.length})
                    </p>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 pb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {courses.map((course) => (
                        <CourseCard key={course.id} {...course}></CourseCard>
                    ))}
                </div>
            </div>
        </div>
    );
};