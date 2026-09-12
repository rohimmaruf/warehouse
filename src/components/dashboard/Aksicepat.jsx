import { ArrowDown, ArrowUp, ChartColumnBig, ClipboardCheck, Cuboid, FileClock } from "lucide-react"
import Itemaksicepat from "./itemaksi/Itemaksicepat"
import TitleGrid from "./Titlegrid"
import { Link } from "react-router-dom"

const Aksicepat = () => {
    return (
        <div className="flex gap-4" >
            <TitleGrid title="Aksi Cepat"
                childer={
                    <div className=" flex grid grid-cols-3 gap-4">
                        <Itemaksicepat icon={<ArrowDown size={30} />} menu="Barang Masuk" className="text-[#0c7723] font-bold shadow flex px-2  rounded-xl bg-[#ecfaf0]" />
                        <Link
                            to="/barang"
                        >
                            <Itemaksicepat icon={<Cuboid size={30} />} menu="Tambah Barang" className="text-[#4982e3] font-bold shadow flex px-2  rounded-xl bg-[#edf4fd] " />
                        </Link>

                        <Itemaksicepat icon={<FileClock size={30} />} menu="Riwayat Transaksi" className="text-[#723ecd] font-bold shadow flex px-2  rounded-xl bg-[#f6f0fc] " />
                        <Itemaksicepat icon={<ArrowUp size={30} />} menu="Barang Keluat" className="text-[#f06c6e] font-bold shadow flex px-2  rounded-xl bg-[#fdefef]" />
                        <Itemaksicepat icon={<ClipboardCheck size={30} />} menu="Tambah Kategori" className="text-[#f79f1f] font-bold shadow flex px-2  rounded-xl bg-[#fef7e9] " />
                        <Itemaksicepat icon={<ChartColumnBig size={30} />} menu="Laporan" className="text-[#19b7c2] font-bold shadow flex px-2  rounded-xl bg-[#eaf9f8] " />
                    </div>



                }
            />
        </div>
    )
}

export default Aksicepat