import React from "react";
import { TGeneral } from "./type";
import { WrapperGeneral } from "./styles";
import SidebarPanel from "app/components/Organisms/Sidebar";


export const General: React.FC<TGeneral> = props => {
    return (
        <WrapperGeneral>
            <div className="d-flex h-100">
                <SidebarPanel />
                <div className="d-flex flex-1">
                    This is a general Page

                </div>
            </div>
        </WrapperGeneral>
    )
};