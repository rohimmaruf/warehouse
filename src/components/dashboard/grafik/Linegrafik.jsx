// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { Line } from "react-chartjs-2"
// // import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// );

// export const option = {
//      responsive: true,
//   plugins: {
//     legend: {
//       position: 'top',
//     },
//     title: {
//       display: true,
//       text: 'Chart.js Line Chart',
//     },
//   },
// }

// const labels = ['Senin', 'Selasa', 'Rabu', 'kamis', 'Jumat', 'Sabtu', 'Minggu'];


// export const data = {
//   labels,
//   datasets: [
//     {
//       label: 'Barang Masuk',
//       data: [20,35,23,40,30,45,50],
//       borderColor: '#f24543',
//       backgroundColor: '#f24543',
//     },
//     {
//       label: 'Barang Keluar',
//       data: [21,31,21,41,31,41,51],
//       borderColor: '#5aca7f',
//       backgroundColor: '#5aca7f',
//     },
//   ],
// };



// const LineGrafik = () => {

//     return(
//         <Line options={option} data={data}/>
//     )
// }

// export default LineGrafik
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  maintainAspectRatio: false,

  interaction: {
    mode: "index",
    intersect: false,
  },

  plugins: {
    legend: {
      position: "top",
      align: "end",

      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 8,
        boxHeight: 8,
        padding: 20,

        font: {
          size: 12,
          weight: "500",
        },

        color: "#667477",
      },
    },

    tooltip: {
      backgroundColor: "#17262A",
      titleColor: "#FFFFFF",
      bodyColor: "#FFFFFF",

      padding: 12,
      cornerRadius: 10,

      displayColors: true,

      titleFont: {
        size: 12,
        weight: "600",
      },

      bodyFont: {
        size: 12,
      },
    },
  },

  scales: {
    x: {
      grid: {
        display: false,
      },

      border: {
        display: false,
      },

      ticks: {
        color: "#94A1A3",
        font: {
          size: 11,
        },
      },
    },

    y: {
      beginAtZero: true,

      grid: {
        color: "#E8E8E6",
        drawTicks: false,
      },

      border: {
        display: false,
      },

      ticks: {
        color: "#94A1A3",
        font: {
          size: 11,
        },

        padding: 8,
      },
    },
  },

  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
    },

    point: {
      radius: 3,
      hoverRadius: 5,
      borderWidth: 2,
    },
  },
}

const labels = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
]

const data = {
  labels,

  datasets: [
    {
      label: "Incoming Stock",

      data: [20, 35, 23, 40, 30, 45, 50],

      borderColor: "#22B573",
      backgroundColor: "#22B573",

      pointBackgroundColor: "#FFFFFF",
      pointBorderColor: "#22B573",

      fill: false,
    },

    {
      label: "Outgoing Stock",

      data: [21, 31, 21, 41, 31, 41, 51],

      borderColor: "#F59E0B",
      backgroundColor: "#F59E0B",

      pointBackgroundColor: "#FFFFFF",
      pointBorderColor: "#F59E0B",

      fill: false,
    },
  ],
}

const LineGrafik = () => {
  return <Line options={options} data={data} />
}

export default LineGrafik