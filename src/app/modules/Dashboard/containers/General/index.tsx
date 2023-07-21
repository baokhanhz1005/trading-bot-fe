import React, { useEffect } from "react";
import { TGeneral } from "./type";
import { WrapperGeneral } from "./styles";
import SidebarPanel from "app/components/Organisms/Sidebar";
import Header from "app/components/Organisms/Header";
import { WrapperModule } from "../../styled";
import { Text } from "app/components/Atoms";
import BlockItemGeneral from "./components/BlockItemGeneral";
import BlockRevenue from "./components/BlockRevenue";
import { useDispatch } from "react-redux";
import { init } from "./actions";
import { injectReducer, useInjectReducer, useInjectSaga } from "redux-injectors";
import { MODULE_CONFIG } from "./config";
import reducer from './reducer';
import saga from './saga';


const General: React.FC<TGeneral> = props => {

    const dispatch = useDispatch();

    useInjectReducer({
        key: MODULE_CONFIG.key,
        reducer
    });

    useInjectSaga({
        key: MODULE_CONFIG.key,
        saga,
    });

    useEffect(() => {
        dispatch(init({
            isLoading: false
        }));
    }, [])

    return (
        <WrapperGeneral>
            <div className="d-flex h-100">
                <SidebarPanel />
                <div className="d-flex flex-1" style={{ flexDirection: 'column' }}>
                    <Header />
                    <WrapperModule>
                        <Text padding="10px 0" fontWeight='bold' size="30px" color="#fff">General</Text>
                        <BlockItemGeneral />
                        <BlockRevenue />
                    </WrapperModule>
                </div>
            </div>
        </WrapperGeneral>
    )
};
export default General;