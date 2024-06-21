import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';
import '../App.css';


const ProductGraph = () => {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

        const ctx = canvasRef.current.getContext("2d");

        const xValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const yValues = [100, 120, 163, 636, 183, 283, 974, 458, 763, 163, 385, 579];

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: xValues,
                datasets: [{
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: yValues
                }]
            },
            options: {
                scales: {
                    x: {
                        grid: {
                            display: true,
                            color: "rgba(255,255,255,50)", // Background line color
                            lineWidth: 1, // Width of the background lines
                            drawBorder: false, // Whether to draw the border of the chart area
                            drawOnChartArea: true // Whether to draw lines inside the chart area
                        },
                        ticks: {
                            maxRotation: 0, // Rotates the text to be horizontal
                            minRotation: 0, // Ensures text is horizontal
                            autoSkip: true, // Automatically skip ticks if they overlap
                            maxTicksLimit: 12 // Maximum number of ticks to display
                        }
                    },
                    y: {
                        grid: {
                            display: true,
                            color: "rgba(0,0,0,0.1)", // Background line color
                            lineWidth: 1, // Width of the background lines
                            drawBorder: false, // Whether to draw the border of the chart area
                            drawOnChartArea: true // Whether to draw lines inside the chart area
                        }
                    }
                }
            }
        });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="box-container bg-white roundbg d-flex shadow" style={{height: '500px'}}>
            <div className="col-12">
            <canvas ref={canvasRef} style={{ width: "100%", margin: "auto"}}></canvas>
            </div>
        </div>
    );
}

export default ProductGraph;

/*exemplo com bd
// src/ProductGraph.js
import React, { useEffect, useRef, useState } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

const ProductGraph = () => {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);
    const [monthlyData, setMonthlyData] = useState({ labels: [], profits: [] });

    useEffect(() => {
        // Register the necessary components
        Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

        // Fetch data from the API
        const fetchData = async () => {
            try {
                const response = await fetch('/api/monthly-profits'); // Replace with your API endpoint
                const data = await response.json();
                
                const labels = data.map(item => item.month); // Assuming data format is [{ month: "January", profit: 500 }, ...]
                const profits = data.map(item => item.profit);

                setMonthlyData({ labels, profits });
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        if (!monthlyData.labels.length) return;

        const ctx = canvasRef.current.getContext("2d");

        if (chartRef.current) {
            chartRef.current.destroy();
        }

        chartRef.current = new Chart(ctx, {
            type: 'line',
            data: {
                labels: monthlyData.labels,
                datasets: [{
                    label: 'Monthly Profits',
                    backgroundColor: "rgba(0,0,255,1.0)",
                    borderColor: "rgba(0,0,255,0.1)",
                    data: monthlyData.profits
                }]
            },
        });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [monthlyData]);

    return (
        <div className="box-container bg-white roundbg d-flex h-100">
            <div className="col-12">
                <canvas ref={canvasRef} style={{ width: "100%"}}></canvas>
            </div>
        </div>
    );
}

export default ProductGraph;
*/

/* backend
// server.js
const express = require('express');
const app = express();

app.get('/api/monthly-profits', (req, res) => {
    const monthlyProfits = [
        { month: "January", profit: 500 },
        { month: "February", profit: 1000 },
        { month: "March", profit: 1500 },
        { month: "April", profit: 2000 },
        { month: "May", profit: 2500 },
        // Add more data as needed
    ];
    res.json(monthlyProfits);
});

const port = 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));

*/