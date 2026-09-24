import { Album, Cuboid, Download, Home, House, Icon, Layers, MapIcon, RotateCcwClock, Settings, Upload, User, User2, UserRoundCog, Warehouse } from 'lucide-react'
import Menu from './sidebar/Menu'
import ItemMenu from './sidebar/Menu'
import { Link, Links } from 'react-router-dom'
const Sidebar = () => {

    return (
        <div>
            <div className='sticky top-0 z-50 gap-2 flex bg-warehouse-sidebar-dark text-white w-80 p-4
                6 shadow'>
                <img src="/warehouse2.png" alt="Gudang App" className='w-15 h-9 object-contain' />
                {/* <Warehouse size={34} /> */}
                <h1 className='font-bold text-3xl'>Gudang APP</h1>
            </div>
            <div className='gap-6 flex flex-col bg-warehouse-sidebar-dark text-white h-full w-80 p-4
                6 shadow'>


                <ItemMenu title='Dashboard' icon={<House />} to="/" />


                <h2>Master Data</h2>
                <ItemMenu title='Products' icon={<Cuboid className='text-[#a0a9bb] ' />} to="/databarang" />
                <ItemMenu title='Categories' icon={<Album className='text-[#a0a9bb]' />} to="/kategori" />
                <ItemMenu title='Locations' icon={<MapIcon className='text-[#a0a9bb]' />} to="/lokasi" />
                <ItemMenu title='Suppliers' icon={<User2 className='text-[#a0a9bb]' />} to="/suplier" />

                <h2>Transaksi</h2>
                <ItemMenu title='Stock In' icon={<Download className='text-[#5ec17b]'  />} to="/barangmasuk" />
                <ItemMenu title='Stock Out' icon={<Upload className='text-[#ee5f55]' />} to="/barangkeluar"  />

                <h2>Laporan</h2>
                <ItemMenu title='Inventory' icon={<Layers className='text-[#a0a9bb]' />} to="/stokbarang" />
                <ItemMenu title='Transaction History' icon={<RotateCcwClock className='text-[#a0a9bb]' />} to="riwayattransaksi" />

                <h2>Pengaturan</h2>
                <ItemMenu title='Users' icon={<UserRoundCog className='text-[#a0a9bb]' />} to="pengguna"/>
                <ItemMenu title='Settings' icon={<Settings className='text-[#a0a9bb]' />} to="pengaturan"/>
            </div>
        </div>

    )
}

export default Sidebar