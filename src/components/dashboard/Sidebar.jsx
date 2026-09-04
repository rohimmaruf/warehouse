import { Album, Cuboid, Download, Home, House, Icon, Layers, MapIcon, RotateCcwClock, Settings, Upload, User, User2, UserRoundCog, Warehouse } from 'lucide-react'
import Menu from './sidebar/Menu'
import ItemMenu from './sidebar/Menu'
const Sidebar = () => {

    return (
        <div>
            <div className=' mb-1 fixed gap-2 flex bg-[#0c1e3b] text-white w-80 p-4
                6 shadow'>
                    <img src="/logowarehouse.png" alt="Gudang App" className='w-15 h-9 object-contain' />
                {/* <Warehouse size={34} /> */}
                <h1 className='font-bold text-3xl'>Gudang APP</h1>
            </div>
            <div className=' gap-6 flex flex-col bg-[#0c1e3b] text-white h-full w-80 p-4
                6 shadow'>
            
            <div className='flex font-semibold gap-4 hover:bg-[#123b84] cursor-pointer p-2 rounded-md mt-20' >
                <House />
                <h3>Dahboard</h3>
            </div>
            <h2>Master Data</h2>
            <ItemMenu title='Barang' icon={<Cuboid className='text-[#a0a9bb]'/>} />
            <ItemMenu title='Kategori' icon={<Album  className='text-[#a0a9bb]'/>} />
            <ItemMenu title='Lokasi' icon={<MapIcon  className='text-[#a0a9bb]'/>} />
            <ItemMenu title='Suplier' icon={<User2  className='text-[#a0a9bb]'/>} />
            <h2>Transaksi</h2>
            <ItemMenu title='Barang Masuk' icon={<Download className='text-[#5ec17b]'/>} />
            <ItemMenu title='Barang Kategori' icon={<Upload className='text-[#ee5f55]'/>} />

            <h2>Laporan</h2>
            <ItemMenu title='Stok Barang' icon={<Layers  className='text-[#a0a9bb]'/>} />
            <ItemMenu title='Riwayat Transaksi' icon={<RotateCcwClock  className='text-[#a0a9bb]'/>} />

            <h2>Pengaturan</h2>
            <ItemMenu title='Pengguna' icon={<UserRoundCog  className='text-[#a0a9bb]'/>} />
            <ItemMenu title='Pengaturan' icon={<Settings  className='text-[#a0a9bb]'/>} />
        </div>
        </div>
        
    )
}

export default Sidebar