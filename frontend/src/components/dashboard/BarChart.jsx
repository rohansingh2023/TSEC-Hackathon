import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BarChart({ chartData }) {
    return(
    <div className="w-[400px] h-[400px] my-[50px] mx-[50px] ">

         <Bar data={chartData} />
    </div>
    );
}

export default BarChart;