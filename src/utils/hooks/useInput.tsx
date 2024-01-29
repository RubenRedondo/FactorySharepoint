import { useState, ChangeEvent } from "react";

interface InputConfig {
    isFilter: boolean;
}

interface InputProps {
    name: string;
    label: string;
    placeholder?: string;
    initialValue?: string;
    type?: string;
    validators: ((value: string) => boolean)[];
    maxLength?: number;
    config?: InputConfig;
}

const useInput = ({
                      name,
                      label,
                      placeholder = "",
                      initialValue = "",
                      type = "text",
                      validators,
                      maxLength,
                      config = {
                          isFilter: false
                      }
                  }: InputProps) => {
    const [value, setValue] = useState<string>(initialValue);
    const [error, setError] = useState<null | string>(null);
    const [isValid, setIsValid] = useState<boolean>(false);

    const validate = (value: string) => {
        if (value.length === 0) {
            setIsValid(false);
        } else {
            const validationResults = validators.map((validator) => validator(value));
            const hasError = validationResults.some((result) => result !== true);
            setIsValid(!hasError);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value.length < 1) {
            setValue(value);
            setIsValid(false);
        } else {
            setValue(value);
            validate(value);
        }
    };

    const handleFileChange = (value: string) => {
        if (value.length < 1) {
            setValue(`${value}`);
            setIsValid(false);
        } else {
            setValue(`${value}`);
            setIsValid(true);
        }
    };

    const isNumberKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const numberRegex = /^\d+$/;
        const isArrowKey = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key);
        const isBackspace = event.key === 'Backspace';
        const isDelete = event.key === 'Delete';
        const isHomeKey = event.key === 'Home';
        const isEndKey = event.key === 'End';
        const isTabKey = event.key === 'Tab';
        const isPaste = (event.ctrlKey || event.metaKey) && event.key === 'v';

        return (
            numberRegex.test(event.key) ||
            isArrowKey ||
            isBackspace ||
            isDelete ||
            isHomeKey ||
            isEndKey ||
            isTabKey ||
            isPaste
        );
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (type === "number" && !isNumberKey(event)) {
            event.preventDefault();
        }
    };

    const clear = () => {
        setValue(initialValue);
        setError(null);
        setIsValid(false);
    };

    return {
        name,
        label,
        value,
        error,
        setError,
        onChange: handleChange,
        onKeyDown: handleKeyDown,
        handleFileChange,
        clear,
        type,
        placeholder,
        setValue,
        isValid,
        maxLength,
        isFilter: config.isFilter
    };
};

export default useInput;
