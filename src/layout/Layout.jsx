import { Outlet, useLocation } from "react-router-dom"
import Sidebar from "../components/dashboard/Sidebar"
import Topbar from "../components/dashboard/Topbar"
import { useState } from "react"

const Layout = () => {

    const location = useLocation()
    const titles = {
        "/": "Dashboard",
        "/databarang": "Data Barang",
        "/kategori": "Kategori",
        "/lokasi": "Lokasi",
        "/supplier": "Supplier",
        "/barang/tambah": "Tambah Barang",
    }

    const [isSidebar, setIsSidebar] = useState(true)
    const judul = titles[location.pathname] || "Gudang APP"
    return (
        <div className="flex">
            {isSidebar && <Sidebar />}
            <div className="flex-1 min-w-0">
                <Topbar navigasi={setIsSidebar} title={judul} />
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout