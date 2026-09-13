import { useMutation } from "@tanstack/react-query";
import type { UserLoginSchema } from "../features/users/schema/userLoginSchema";
import { agent } from "./agent";

export const useUser = () => {
    const logInUser = useMutation({
        mutationFn: async (data: UserLoginSchema) => {
            const response = await agent.post('/api/login?useCookies=true', data);

            return response.data;
        }
    });

    const logOutUser = useMutation({
        mutationFn: async () => {
            const response = await agent.post('/api/user/logout', {});

            return response.data;
        }
    });

    return { logInUser, logOutUser }
}