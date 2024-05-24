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

// Configuration for the LineElement
ChartJS.defaults.elements.line.tension = 0.4; // Set the tension to control the curvature

// Chart component to display counter values as a line chart
const CounterChart = ({ dataPoints }) => {
    // data for the chart
    const chartData = {
        labels: dataPoints.map((index) => index),
        datasets: [
            {
                label: "Counter chart",
                data: dataPoints,
                backgroundColor: "rgba(75, 192, 192, 0.2)", // Set the background color
                borderColor: "rgba(75, 192, 192, 1)", // Set the border color
                borderWidth: 2, // Set the border width
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
                grid: {
                    display: false // this will remove the horizontal grid lines
                }
            },
            y: {
                title: {
                    display: true,
                    color: "black",
                    font: {
                        size: 15,
                        weight: "bold",
                    },
                },
                grid: {
                    display: false // this will remove the vertical grid lines
                }
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default CounterChart;
