import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

export const data = {
    labels: ['Barang Masuk', 'Barang Keluar'],
    datasets: [
        {
            label: 'Jumlah Barang',
            data: [238, 242],
            backgroundColor: [
                '#5aca7f',
                '#f24543',

            ],
            borderWidth: 1,
        },
    ],
};

export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'top',
        },
    },
};

const Piegrafik = () => {
    return (
        <div className='flex w-full h-[450px] justify-center items-center gap-4 '><Pie
            data={data}
            options={options}
        /></div>
        
    );
};

export default Piegrafik;