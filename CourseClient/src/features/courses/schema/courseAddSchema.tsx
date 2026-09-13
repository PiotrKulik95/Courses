import * as z from "zod";

export const courseAddSchema = z.object({
    Title: z.string()
        .min(1, 'Podaj tytuł kursu'),
    StartDate: z.string()
        .min(1, 'Data rozpoczęcia jest wymagana'),
    EndDate: z.string()
        .min(1, 'Data zakończenia jest wymagana'),
    Price: z.coerce
        .number({ message: 'Cena jest wymagana' })
        .min(1, 'Cena nie może być ujemna')
    ,
    MaxCapacity: z.coerce.number({ message: 'Maxymalna liczba uczestników jest wymagana' })
        .int('Liczba uczestników musi być liczbą całkowitą')
        .min(1, 'Maxymalna liczba uczestników jest wymagana')
    ,
    CategoryId: z.coerce
        .number({ message: 'Kategoria jest wymagana' })
        .min(1, 'Kategoria jest wymagana')
});

export type CourseAddSchema = z.infer<typeof courseAddSchema>;