import { ArrowDown, ArrowUp, ChartColumnBig, ClipboardCheck, Cuboid, FileClock } from "lucide-react"
import Itemaksicepat from "./itemaksi/Itemaksicepat"
import TitleGrid from "./Titlegrid"

const Aksicepat = () => {
    return (
        <div>
            <TitleGrid title="Aksi Cepat"
                childer={
                    <div className="flex">
                        <div>
                            <Itemaksicepat icon={<ArrowDown />} menu="Barang Masuk" className="text-[#0c7723] font-semibold shadow flex px-2 w-40 p-4 rounded-xs bg-[#ecfaf0] "/>
                            <Itemaksicepat icon={<Cuboid  />} menu="Tambah Barang" className="text-[#4982e3] font-semibold shadow flex px-2 w-40 p-4 rounded-xs bg-[#edf4fd] "/>
                            <Itemaksicepat icon={<FileClock />} menu="Riwayat Transaksi" className="text-[#723ecd] font-semibold shadow flex px-2 w-40 p-4 rounded-xs bg-[#f6f0fc] " />
                        </div>
                        <div>
                            <Itemaksicepat icon={<ArrowUp />} menu="Barang Keluat" className="text-[#f06c6e] font-semibold shadow flex px-2 w-40 p-4 rounded-xs bg-[#fdefef]" />
                            <Itemaksicepat icon={<ClipboardCheck />} menu="Tambah Kategori"  className="text-[#f79f1f] font-semibold shadow flex px-2 w-40 p-4 rounded-xs bg-[#fef7e9] " />
                            <Itemaksicepat icon={<ChartColumnBig />} menu="Laporan" className="text-[#19b7c2] font-semibold shadow flex px-2 w-40 p-4 rounded-xs bg-[#eaf9f8] " />
                        </div>
                    </div>



                }
            />
        </div>
    )
}

export default Aksicepat