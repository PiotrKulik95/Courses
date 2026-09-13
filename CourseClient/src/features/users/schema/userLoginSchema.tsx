import z from "zod";

export const userLoginSchema = z.object({
    Email: z.email('Podaj poprawny adres email'),
    Password: z.string().min(3, 'Podaj hasło')
});

export type UserLoginSchema = z.infer<typeof userLoginSchema>;