
import '../index.css'
import Sidebar from '../components/dashboard/Sidebar'
import Topbar from '../components/dashboard/Topbar'
import { useState } from 'react'
import Card from '../components/dashboard/Card'
import Grafik from '../components/dashboard/Grafik'
import Transaksi from '../components/dashboard/Transaksi'
import Stokmenipis from '../components/dashboard/Stokmenipis'
import Aksicepat from '../components/dashboard/Aksicepat'

const Dashboard = () => {

    const [isSidebar, setIsSidebar] = useState(true)

    return (
        <>
            <div className='flex  bg-[#f8f9fc]'>
                {/* Side bar */}
                {/* <Sidebar/> */}
                {isSidebar && <Sidebar />}
                {/* Main */}
                <div className='w-full '>
                    <Topbar navigasi={setIsSidebar} /> 
                    <Card/>
                    <div className='grid grid-cols-2 m-4 gap-4 px border-4 border-red-500 '>
                        <div className='border-4 border-blue-500'>
                        <Grafik />
                        <Transaksi/>
                    </div>
                    <div className='border-4 border-blue-500'>
                        <Stokmenipis/>
                        <Aksicepat/>
                    </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Dashboard