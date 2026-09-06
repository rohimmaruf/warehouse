
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
                    <Aksicepat/>
                    <div className='flex m-4 '>
                        <div className=' mr-4'>
                            {/* <p>https://vscode.dev/editor/liveshare/FAF1F4EEF7287B63E1782008755A20C9C7C8?vscode-lang=id-id</p> */}
                        <Grafik  />
                        <Stokmenipis/>
                        <Transaksi/>
                    </div>
                    <div className=' '>
                        
                        
                    </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Dashboard