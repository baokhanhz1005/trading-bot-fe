import React from "react";
import { HeaderWrapper } from "./styles";

type THeader = {};

const Header: React.FC<THeader> = props => {
    return (
        <HeaderWrapper>
            this is a header
        </HeaderWrapper>
    )
}

export default Header;