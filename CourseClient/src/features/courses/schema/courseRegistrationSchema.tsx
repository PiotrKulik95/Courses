import * as z from "zod";

export const courseRegistrationSchema = z.object({
    Name: z.string().regex(/^[a-zA-ZĄĆĘŁŃÓŚŹŻąęćłńóśźż]+$/, 'Podaj imię'),
    Surname: z.string().regex(/^[a-zA-ZĄĆĘŁŃÓŚŹŻąęćłńóśźż]+(?:[-][a-zA-ZĄĆĘŁŃÓŚŹŻąęćłńóśźż]+)*$/, 'Podaj nazwisko'),
    Email: z.email('Podaj poprawny adres email'),
    Phone: z.string().regex(/^[0-9]{9}$/, 'Podaj poprawny numer telefonu'),
    CourseId: z.number(),
});

export type CourseRegistrationSchema = z.infer<typeof courseRegistrationSchema>;