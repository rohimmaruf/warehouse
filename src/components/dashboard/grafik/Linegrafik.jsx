import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2"
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const option = {
     responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
}

const labels = ['Senin', 'Selasa', 'Rabu', 'kamis', 'Jumat', 'Sabtu', 'Minggu'];


export const data = {
  labels,
  datasets: [
    {
      label: 'Barang Masuk',
      data: [20,35,23,40,30,45,50],
      borderColor: '#f24543',
      backgroundColor: '#f24543',
    },
    {
      label: 'Barang Keluar',
      data: [21,31,21,41,31,41,51],
      borderColor: '#5aca7f',
      backgroundColor: '#5aca7f',
    },
  ],
};



const LineGrafik = () => {

    return(
        <Line options={option} data={data}/>
    )
}

export default LineGrafik