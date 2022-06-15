import React, {useState} from 'react';
import {Bar} from "react-chartjs-2";
import {Chart as ChartJs} from 'chart.js/auto'


const BarChartCard = ({chartData, options}) => {
    return (
        <div className="border-gray-800 m-4 rounded-2xl p-4 border-b-8 border-r-8 border-t-2 border-l-2">
          <Bar data={chartData} options={options} />
        </div>
    )
}

export default BarChartCard;