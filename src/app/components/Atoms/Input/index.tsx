import React from "react";
import { StyledInput, WrapperInput } from "./styles";

type TInput = {
    theme?: 'dark' | 'light' | 'outline';
    fullWidth?: boolean;
    // extend props;
};

export type InputProps = TInput & React.InputHTMLAttributes<HTMLInputElement>

export const Input: React.FC<InputProps> = (props) => {
    const { theme, ...rest } = props;

    return (
        <WrapperInput>
            <StyledInput {...rest} theme={theme} />
        </WrapperInput>
    );
};

Input.defaultProps = {

};