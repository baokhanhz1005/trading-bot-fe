import styled from "styled-components"

type TDivider = {
    height?: string,
    align?: 'center' | 'flex-start' | 'flex-end' | string,
    color?: string,
    width?: string,
}

const DividerWrapper = styled.div<TDivider>`
    display: flex;
    justify-content: ${props => props.align};
    height: ${props => props.height};
`

const StyledDivider = styled.div<any>`
    background-color: ${props => props.color};
    width: ${props => props.width};
`

export const Divider: React.FC<TDivider> = props => {
    const { width, color, ...rest } = props;
    return (
        <DividerWrapper {...rest}>
            <StyledDivider width={width} color={color} />
        </DividerWrapper>
    )
};

Divider.defaultProps = {
    height: '1px',
    align: 'center',
    color: '#fff',
    width: '100%'
}
