export type Course = {
    id: number,
    title: string,
    startDate: string,
    endDate: string,
    price: number,
    maxCapacity: number,
    attendantsCount: number,
    categoryName: string
}

type ServiceApiError = {
    succes: boolean;
    message: string;
};

type ValidationErrorApiError = {
    type: string;
    title: string;
    status: number;
    errors: {
        [key: string]: string[];
    };
};

export type AttendantApiError = ServiceApiError & ValidationErrorApiError;
