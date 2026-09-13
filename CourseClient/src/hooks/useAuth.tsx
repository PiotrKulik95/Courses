import { useQuery } from "@tanstack/react-query";
import { agent } from "./agent";
import type { AuthUserDto } from "../types";

export const useAuth = () => {
    const getCurrentUser = useQuery<AuthUserDto>({
        queryKey: ['currentUser'],
        queryFn: async () => {
            const response = await agent.get('/api/user');
            return response.data;
        },
        retry: false
    });

    return { getCurrentUser };
}