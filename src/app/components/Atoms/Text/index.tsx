import React from 'react';
import styled from 'styled-components';

type TText = {
    children: any,
    color?: string,
    size?: string,
    margin?: string,
    padding?: string,
    type?: string | 'block' | 'inline-block' | 'inline',
    fontWeight?: string | number,
    style?: React.CSSProperties,
    className?: string,
};
export const Text: React.FC<TText> = props => {
    const { children, ...restOf } = props
    return (
        <StyledText {...restOf}>
            {children}
        </StyledText>
    )
};

Text.defaultProps = {
    type: 'block',
    color: 'inherit',
    size: 'inherit',
}

const StyledText = styled.div<TText>`
    display: ${props => props.type};
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: ${props => props.fontWeight};
    margin: ${props => props.margin};
    padding: ${props => props.padding};

`