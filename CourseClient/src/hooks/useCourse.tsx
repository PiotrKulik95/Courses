import { useMutation, useQuery } from "@tanstack/react-query"
import type { Course } from "../types";
import type { CourseRegistrationSchema } from "../features/courses/schema/courseRegistrationSchema";
import { AxiosError } from "axios";
import type { AttendantApiError } from "../types";
import { agent } from "./agent";
import type { CourseAddSchema } from "../features/courses/schema/courseAddSchema";

const getCourses = async (): Promise<Course[]> => {
    const response = await agent.get<Course[]>('/api/course');
    return response.data;
}

const addAttendant = async (data: CourseRegistrationSchema) => {
    const response = await agent.post('/api/attendant', data)
    return response.data;
}

export const useCourses = () => {
    return useQuery({
        queryKey: ['courses'],
        queryFn: getCourses
    });
}

export const useAddAttendant = () => {
    return useMutation<unknown, AxiosError<AttendantApiError>, CourseRegistrationSchema>({
        mutationFn: addAttendant
    });
}

export const useCourse = () => {
    const addCourse = useMutation({
        mutationFn: async (data: CourseAddSchema) => {
            const response = await agent.post('/api/course/add', data);

            return response.data;
        }
    });

    return { addCourse }
}
