
import '../index.css'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import { useState } from 'react'
import Card from '../components/Card'

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
                    <Card /></div>
            </div>
        </>
    )

}

export default Dashboard