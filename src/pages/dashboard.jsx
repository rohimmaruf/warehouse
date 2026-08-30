
import '../index.css'
import Sidebar from '../components/dashboard/sidebar'
import Topbar from '../components/dashboard/Topbar'
import { useState } from 'react'
import Card from '../components/dashboard/Card'
import Grafik from '../components/dashboard/Grafik'
import Transaksi from '../components/dashboard/Transaksi'

const Dashboard = () => {

    const [isSidebar, setIsSidebar] = useState(true)

    return (
        <>
            <div className='flex h bg-[#f8f9fc]'>
                {/* Side bar */}
                {/* <Sidebar/> */}
                {isSidebar && <Sidebar />}
                {/* Main */}
                <div className='w-full'>
                    <Topbar navigasi={setIsSidebar} />
                    <Card/>
                    <div>
                        <Grafik />
                        <Transaksi/>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Dashboard