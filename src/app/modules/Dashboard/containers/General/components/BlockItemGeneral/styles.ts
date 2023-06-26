import styled from "styled-components";


export const WrapperBlock = styled.div`
    flex: 1;
    padding: 20px;
    background: ${props => props.color || '#fff'};
    border-radius: 10px;
    box-shadow: 2px 2px 5px 0px #000;
`