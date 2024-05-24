/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from "chart.js";



// Registering necessary components for Chart.js
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

// Chart component to display counter values as a line chart
const CounterChart = ({ dataPoints }) => {
    // data for the chart
    const chartData = {
        labels: dataPoints.map((index) => index),
        datasets: [
            {
                label: "Counter chart",
                data: dataPoints, // border color
                // backgroundColor: "red", // fill color
                // innerWidth: 10,
                // fill: true,
            },
        ],
    };

    // options for the x and y axis in chart
    const options = {
        scales: {
            x: {
                title: {
                    display: true,
                    color: "black",
                    font: {
                        size: 14,
                        weight: "bold",
                    },
                },
            },
            y: {
                title: {
                    display: true,
                    color: "black",
                    font: {
                        size: 14,
                        weight: "bold",
                    },
                },
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default CounterChart;