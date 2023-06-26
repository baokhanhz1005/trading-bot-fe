import React from "react";
import { WrapperBlockRevenue } from "./styles";
import LineChart from "app/components/Chart/LineChart";

type TBlockRevenue = {};

export const BlockRevenue: React.FC<TBlockRevenue> = props => {
    return (
        <WrapperBlockRevenue>
            <LineChart />
        </WrapperBlockRevenue>
    )
};

export default BlockRevenue;