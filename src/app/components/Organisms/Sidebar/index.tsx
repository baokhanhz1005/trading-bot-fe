import React, { useState } from 'react';
import { Avatar, HeaderSideBar, HeadingAccount, IconLogo, ModuleContain, SidebarContainer, WrapperChannel } from './styles';
import { Brand, Divider, Icon, Text } from 'app/components/Atoms';
import { LIST_MODULE } from './constant';

type TSidebarPannel = {};

const SidebarPanel: React.FC<TSidebarPannel> = () => {

    const [isOpen, setIsOpen] = useState(true);

    const renderContent = () => {

        return (
            <>
                {Object.values(LIST_MODULE).map(module => {
                    return (
                        <ModuleContain className='d-flex'>
                            <Icon style={{marginRight: 10}} size={'15px'} color='#fff' type={module.icon} />
                            <Text margin='2px 0 0 10px' size='20px' color='#fff' fontWeight='bold'>{module.label}</Text>
                        </ModuleContain>
                    )
                })}

            </>
        )
    };

    return (
        <SidebarContainer className={`side-bar ${isOpen ? 'open' : 'close'}`}>
            <HeaderSideBar>
                <IconLogo />
                <div className='d-flex justify-space-between align-center p-relative w-100'>
                    <HeadingAccount style={{ marginLeft: '10px' }}>Trading BOT</HeadingAccount>
                    <Brand right='0px' top='-4px' position='static'>Beta</Brand>
                </div>
            </HeaderSideBar>
            <div className='d-flex' style={{ padding: 15 }}>
                <Avatar />
                <div className='w-100 p-5'>
                    <div className='d-flex' style={{ flexDirection: 'column' }}>
                        <span style={{ color: '#fff', fontWeight: 'bold' }}>Nguyễn Bảo Khánh</span>
                        <span style={{ fontSize: '12px', color: '#fff', margin: '5px 0' }}>ID: 120-000-02</span>
                    </div>
                </div>
            </div>
            <Divider height='1px' width='90%' />
            <WrapperChannel>
                {renderContent()}
            </WrapperChannel>
            {/* <button onClick={() => setIsOpen(!isOpen)}>click me !!</button> */}
        </SidebarContainer>
    )
};

export default SidebarPanel;