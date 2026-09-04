import { ArrowDown, ArrowUp, ChartColumnBig, ClipboardCheck, Cuboid, FileClock } from "lucide-react"
import Itemaksicepat from "./itemaksi/Itemaksicepat"
import TitleGrid from "./Titlegrid"

const Aksicepat = () => {
    return (
        <div >
            <TitleGrid title="Aksi Cepat"
                childer={
                    <div className="flex grid grid-cols-2 gap-3 mt-4">
                            <Itemaksicepat icon={<ArrowDown  size={40}/>} menu="Barang Masuk" className="text-[#0c7723] font-normal shadow flex px-2 w-40 p-4 rounded-xs bg-[#ecfaf0] " />
                            <Itemaksicepat icon={<Cuboid size={40} />} menu="Tambah Barang" className="text-[#4982e3] font-normal shadow flex px-2 w-40 p-4 rounded-xs bg-[#edf4fd] " />
                            <Itemaksicepat icon={<FileClock size={40} />} menu="Riwayat Transaksi" className="text-[#723ecd] font-normal shadow flex px-1 w-40 p-4 rounded-xs bg-[#f6f0fc] " />
                            <Itemaksicepat icon={<ArrowUp size={40} />} menu="Barang Keluat" className="text-[#f06c6e] font-normal shadow flex px-2 w-40 p-4 rounded-xs bg-[#fdefef]" />
                            <Itemaksicepat icon={<ClipboardCheck size={40}/>} menu="Tambah Kategori" className="text-[#f79f1f] font-normal shadow flex px-2 w-40 p-4 rounded-xs bg-[#fef7e9] " />
                            <Itemaksicepat icon={<ChartColumnBig size={40}/>} menu="Laporan" className="text-[#19b7c2] font-normal shadow flex px-2 w-40 p-4 rounded-xs bg-[#eaf9f8] " />                      
                    </div>



                }
            />
        </div>
    )
}

export default Aksicepat