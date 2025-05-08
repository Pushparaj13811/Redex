interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: string;
    position: string;
    interest: string;
    message: string;
}

interface FormErrors {
    [key: string]: string;
}

export type { FormData, FormErrors };