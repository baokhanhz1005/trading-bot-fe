import React from "react";
import { StyledButton } from "./styles";

type TButton = {
    theme?: 'primary' | 'success' | 'warning' | 'text';
    fullWidth?: boolean;
    color?: string;
}

export type ButtonProps = TButton & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = props => {
    const { theme, color, ...rest } = props;
    return (
            <StyledButton theme={theme} color={color} fullWidth {...rest}>
                {props.children}
            </StyledButton>
    )
}

Button.defaultProps = {
    fullWidth: false,
}