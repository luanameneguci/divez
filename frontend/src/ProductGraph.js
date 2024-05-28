// src/ProductGraph.js
import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale } from 'chart.js';

const ProductGraph = () => {
    const canvasRef = useRef(null);
    const chartRef = useRef(null);

    useEffect(() => {
        // Register the necessary components
        Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale);

        const ctx = canvasRef.current.getContext("2d");

        const xValues = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const yValues = [500, 1000, 1500, 2000, 2500];

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
        });

        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="box-container bg-white roundbg d-flex h-100">
            <div className="col-12">
                <canvas ref={canvasRef} style={{ width: "100%"}}></canvas>
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