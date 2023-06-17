import styled, { css } from "styled-components";
import { InputProps } from ".";

export const WrapperInput = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const StyledInput = styled.input<InputProps>`
  border: none;
  padding: 10px;
  transition: ease 500ms;
  width: 50%;

  ${(props) => {
    switch (props.theme) {
      case "dark":
        return css`
          color: #fff;
          background-color: #0000008f !important;
          border-radius: 10px;

          &:focus {
            outline: none;
            border: none;
            background-color: #000;
          }

          ::placeholder {
            color: #fff;
          }
        `;
      case "light":
        return css`
          color: #000;
          background-color: #fff !important;
          border-radius: 10px;

          &:focus {
            outline: none;   
          }

          ::placeholder {
            color: #000;
          }
        `;
      default:
        return css`
          color: #fff;
          background-color: transparent !important;
          border-bottom: 2px #2196f3 solid;

          &:focus {
            outline: none;
            // border: none;
            background-color: #000;     
          }

          ::placeholder {
            color: #fff;
          }
        `;
    }
  }}

  &:active {
    outline: none;
  }
`;
