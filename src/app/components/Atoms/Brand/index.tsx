import styled from "styled-components";


type TBrand = {
    children: string,
    top?: string,
    left?: string,
    right?: string,
    bottom?: string,
    color?: string,
    background?: string,
    position?: string,
};

const Label = styled.span<TBrand>`
    padding: 5px 10px;
    position: ${props => props.position};
    right: ${props => props.right};
    top: ${props => props.top};
    left: ${props => props.left || ''};
    bottom: ${props => props.bottom || ''};
    border-radius: 15px;
    color: ${props => props.color};
    background-color: ${props => props.background};
    font-weight: 700;
`

export const Brand: React.FC<TBrand> = props => {
    const { children, ...rest } = props;
    return (
        <Label {...rest}>
            {children}
        </Label>
    )
};

Brand.defaultProps = {
    top: '-7px',
    right: '-20px',
    background: 'green',
    color: '#fff',
    position: 'absolute',
}