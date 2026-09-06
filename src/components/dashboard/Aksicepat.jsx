import { ArrowDown, ArrowUp, ChartColumnBig, ClipboardCheck, Cuboid, FileClock } from "lucide-react"
import Itemaksicepat from "./itemaksi/Itemaksicepat"
import TitleGrid from "./Titlegrid"

const Aksicepat = () => {
    return (
        <div className="mt-4" >
            <TitleGrid title="Aksi Cepat"
                childer={
                    <div className="flex grid grid-cols-3 gap-2">
                            <Itemaksicepat icon={<ArrowDown  size={20}/>} menu="Barang Masuk" className="text-[#0c7723] font-normal shadow flex px-2  rounded-xl bg-[#ecfaf0]" />
                            <Itemaksicepat icon={<Cuboid size={20} />} menu="Tambah Barang" className="text-[#4982e3] font-normal shadow flex px-2  rounded-xl bg-[#edf4fd] " />
                            <Itemaksicepat icon={<FileClock size={20} />} menu="Riwayat Transaksi" className="text-[#723ecd] font-normal shadow flex px-2  rounded-xl bg-[#f6f0fc] " />
                            <Itemaksicepat icon={<ArrowUp size={20} />} menu="Barang Keluat" className="text-[#f06c6e] font-normal shadow flex px-2  rounded-xl bg-[#fdefef]" />
                            <Itemaksicepat icon={<ClipboardCheck size={20}/>} menu="Tambah Kategori" className="text-[#f79f1f] font-normal shadow flex px-2  rounded-xl bg-[#fef7e9] " />
                            <Itemaksicepat icon={<ChartColumnBig size={20}/>} menu="Laporan" className="text-[#19b7c2] font-normal shadow flex px-2  rounded-xl bg-[#eaf9f8] " />                      
                    </div>



                }
            />
        </div>
    )
}

export default Aksicepat