import React from 'react';
import styled from 'styled-components';

type TText = {
    children: string,
    color?: string,
    size?: string,
    margin?: string,
    padding?: string,
    type?: string | 'block' | 'inline-block' | 'inline',
    fontWeight?: string | number,
    style?: React.CSSProperties,
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
    color: '#000',
    size: '12px',
}

const StyledText = styled.div<TText>`
    display: ${props => props.type};
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: ${props => props.fontWeight};
    margin: ${props => props.margin};
    padding: ${props => props.padding};

`