import styled, { DefaultTheme, ThemeProps, css } from "styled-components";
import { ButtonProps } from ".";

export const StyledButton = styled.button<ButtonProps>`
  ${(props) => (props.fullWidth ? "width: 100%" : "")};
  padding: 10px 15px;
  outline: none;
  transition: ease 500ms;
  cursor: pointer;
  border-radius: 20px;
  border: none;

  &:hover {
    opacity: 0.85;
  }
  ${({ theme, color }: ButtonProps & ThemeProps<DefaultTheme>) => {
    switch (theme) {
      case "primary":
        return css`
          background-color: #fff;
          color: ${color || '#000'};
          outline: #000;
        `;
      case "success":
        return css`
          background-color: #0abb29;
          color: ${color || '#fff'};
          outline: red;
        `;
      case "warning":
        return css`
          background-color: #ff9800;
          color: ${color || '#5a006b'};
          font-weight: 800;
        `;
      case "text":
        return css`
          background-color: transparent;
          padding: unset;
          color: ${color || '#fff'};
          font-weight: 600;
        `;
      default:
        return css`
          background-color: #fff;
          outline: blue;
          color: ${color || 'blue'};
        `;
    }
  }}
`;