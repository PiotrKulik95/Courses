import { useMutation, useQuery } from "@tanstack/react-query"
import type { Course } from "../types";
import type { CourseRegistrationSchema } from "../features/courses/schema/courseRegistrationSchema";
import axios, { AxiosError } from "axios";
import type { AttendantApiError } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL;

const getCourses = async (): Promise<Course[]> => {
    const response = await axios.get<Course[]>(`${BASE_URL}/course`);
    return response.data;
}

const addAttendant = async (data: CourseRegistrationSchema) => {
    const response = await axios.post(`${BASE_URL}/attendant`, data)
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