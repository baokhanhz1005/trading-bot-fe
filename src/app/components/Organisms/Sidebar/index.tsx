import React, { useState } from 'react';
import { SidebarContainer } from './styles';

type TSidebarPannel = {};

const SidebarPanel: React.FC<TSidebarPannel> = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <SidebarContainer className={`side-bar ${isOpen ? 'open' : 'close'}`}>
            <div> this is a side pannel</div>
            <button onClick={() => setIsOpen(!isOpen)}>click me !!</button>
        </SidebarContainer>
    )
};

export default SidebarPanel;