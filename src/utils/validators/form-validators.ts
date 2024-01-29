/*
    Example:


    const validators = [
        (value: string) => emailValidator(value),
    ];

    const inputSSO = useInput("SSO", "SSO", "Ingresa tu SSO", "", "email", validators);

 */

// SINGLE FUNCTIONS:

export const maxLengthValidator = (value: string, maxLength: number): boolean => {
    return value.length <= maxLength;
}

export const minLengthValidator = (value: string, minLength: number): boolean => {
    return value.length >= minLength;
}

export const emailValidator = (value: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
};

export const notEmptyValidator = (value: string): boolean => {
    return value.length > 0;
};

export const numberValidator = (value: string): boolean => {
    const numberRegex = /^\d+$/;
    return numberRegex.test(value);
};

export const moreThanWhitespaceValidator = (value: string): boolean => {
    const whitespaceRegex = /^\s*$/;
    return !whitespaceRegex.test(value);
};

// ==================
// CATALOG
// ==================

export const emailValidators: ((value: string) => boolean)[] = [
    (value) => minLengthValidator(value, 1),
    (value) => emailValidator(value),
];

// ==================
// EVALUATE
// ==================

export const isTrue = (value: string | boolean): boolean => {
    return value === 'true' || value === true;
}
