import React, { useEffect, useRef } from "react";
import { WrapperLineChart } from "./styles"
import * as d3 from 'd3';

type TLineChart = {};

const data = [
    { x: 1, y: 5 },
    { x: 1.1, y: 3.2 },
    { x: 1.2, y: 3.3 },
    { x: 1.3, y: 4.8 },
    { x: 1.4, y: 4.7 },
    { x: 1.5, y: 5 },

    { x: 2, y: 10 },
    { x: 3, y: 8 },
    { x: 4, y: 15 },
    { x: 5, y: 12 }
];

export const LineChart: React.FC<TLineChart> = props => {

    const chartRef: any = useRef(null);

    useEffect(() => {
        const width = chartRef?.current?.offsetWidth;
        const height = chartRef?.current?.offsetHeight;
        const margin = { top: 20, right: 20, bottom: 30, left: 50 };
        const innerWidth = width - margin.left - margin.right;
        const innerHeight = height - margin.top - margin.bottom;
        // Khởi tạo SVG container
        const svg = d3
            .select(chartRef.current)
            .append('svg')
            .attr('width', width)
            .attr('height', height);

        // Tạo scale cho trục hoành và trục tung
        const xScale = d3
            .scaleLinear()
            .domain([1, 5]) // Phạm vi của dữ liệu trục hoành
            .range([0, innerWidth]);

        const yScale = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d: any) => d.y)]) // Phạm vi của dữ liệu trục tung
            .range([innerHeight, 0]);

        // Tạo line generator
        const line: any = d3
            .line()
            .x((d: any) => xScale(d.x + 0.18))
            .y((d: any) => yScale(d.y - 1.3));

        // Vẽ đường dựa trên dữ liệu
        svg
            .append('path')
            .datum(data)
            .attr('fill', 'none')
            .attr('stroke', 'steelblue')
            .attr('stroke-width', 2)
            .attr('d', line);

        // Tạo trục hoành và trục tung
        const xAxis = d3.axisBottom(xScale);
        const yAxis = d3.axisLeft(yScale);

        svg
            .append('g')
            .attr('transform', `translate(${margin.left}, ${height - margin.bottom})`)
            .call(xAxis);

        svg
            .append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`)
            .call(yAxis);
    }, []);



    return (
        <div ref={chartRef} style={{ width: '100%', height: '250px' }}></div>
    )
}

export default LineChart;