import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ chartData }) {
  return (
    <div className="w-[250px] h-[250px] my-[50px] mx-[130px] ">
      <Pie data={chartData} />
    </div>
  );
}

export default PieChart;
