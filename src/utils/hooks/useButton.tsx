import {useState} from "react";

interface ButtonProps {
    text: string;
    theme?: string;
    isDisabled?: boolean;
    type?: string;
    size?: string;
}

const useButton = ({
                       text,
                       theme = "normal",
                       isDisabled = false,
                       type = "button",
                       size = "normal"
                   }: ButtonProps) => {
    const [disabled, setDisabled] = useState<boolean>(isDisabled);

    const allow = () => {
        setDisabled(false);
    };

    const disallow = () => {
        setDisabled(true);
    };

    return {
        text,
        disabled,
        theme,
        type,
        size,
        allow,
        disallow
    };
};

export default useButton;
