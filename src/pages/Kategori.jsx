import { Pen, PenBox, PenBoxIcon, Trash, Trash2 } from "lucide-react"
import Titlebox from "../components/general/Titlebox"
import kategori from "../data/kategori"

const Kategori = () => {
    // console.log(kategori);
    
    return (
        <div className="bg-[#f8f9fc] gap-5 flex-col ">
            <Titlebox />
            <table className="w-full table-fixed">
                <thead >
                    <tr className="border-b border-slate-200">
                        <th className="px-2 py-3 text-center font-semibold">NO</th>
                        <th className="px-2 py-3 text-center font-semibold">Kode Kategotri</th>
                        <th className="px-2 py-3 text-center font-semibold">Nama Kategori</th>
                        <th className="px-2 py-3 text-center font-semibold">Jumlah Barnag</th>
                        <th className="px-2 py-3 text-center font-semibold">Status</th>
                        <th className="px-2 py-3 text-center font-semibold">Aksi</th>
                    </tr>
                </thead>
                <tbody className="font-medium">
                    {kategori.map((e) => {
                        const {id, kode, nama, jumlahBarang, status} = e
                        
                        return (
                        <tr key={id} className="px-4 py-3 text-center text-slate-500">
                            <td className="px-4 py-3">{id}</td>
                            <td className="px-4 py-3">{kode}</td>
                            <td className="px-4 py-3">{nama}</td>
                            <td className="px-4 py-3">{jumlahBarang}</td>
                            <td className={status === "Aktif" ? "text-center font-normal text-[#51bb70]" :  "text-center font-normal text-[#ec625e]" }>{status}</td>
                            <td className="px-4 py-3  justify-center flex"><PenBoxIcon className="text-[#1451d7]"/><span><Trash2 className="text-[#d22c30]"/></span></td>
                        </tr>)
                    })}                    
                    
                </tbody>
            </table>
        </div>
    )
}

export default Kategori