
import '../index.css'
import Sidebar from '../components/dashboard/Sidebar'
import Topbar from '../components/dashboard/Topbar'
import { useState } from 'react'
import Card from '../components/dashboard/Card'
import Grafik from '../components/dashboard/Grafik'
import Transaksi from '../components/dashboard/Transaksi'
import Stokmenipis from '../components/dashboard/Stokmenipis'
import Aksicepat from '../components/dashboard/Aksicepat'
import Grafik2 from '../components/dashboard/Grafik2'

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
                    <Topbar navigasi={setIsSidebar} title='Dashboard' />
                    <div className='p-4 flex flex-col gap-4'>
                        <Card />
                        <Aksicepat />
                        <div className=' grid grid-cols-2   '>
                            <Grafik />
                            <Grafik2 />
                        </div>
                        <Stokmenipis />
                        <Transaksi />
                    </div>

                </div>

            </div>
        </>
    )

}

export default Dashboard