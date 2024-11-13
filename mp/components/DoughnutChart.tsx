"use client"

import {Chart as ChartJS, ArcElement, Tooltip, Legend}
from "chart.js";
import {Doughnut} from "react-chartjs2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {}
    return <Doughnut data={[]}/>
}

export default DoughnutChart
