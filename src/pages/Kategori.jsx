import { Pen, PenBox, PenBoxIcon, Trash, Trash2 } from "lucide-react"
import Titlebox from "../components/general/Titlebox"
// import kategori from "../data/kategori"
import { useState } from "react"
import Formkategori from "../components/kategori/Formkategori"

const Kategori = () => {
    // console.log(kategori);
    const [isTambahbarang, setIsTambahbarang] = useState(false)

    const [kategori, setKategori] = useState([])

    const onAddSimpan = (data) => {
        console.log("Kategerori",data);
        // Sama dengan saat tambah file Cuman Beda kurung siku
        setKategori((prev) => ([...prev,data]))
    
    }

    return (
        <div className="bg-[#f8f9fc] gap-5 flex-col flex">
            <Titlebox onClick={() => {
                setIsTambahbarang(true)
                console.log("tambah kategori");

            }} />
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
                    {kategori.map(({id, kode, nama, jumlahBarang, status}) => {

                        return (
                            <tr key={id} className="px-4 py-3 text-center text-slate-500">
                                <td className="px-4 py-3">{id}</td>
                                <td className="px-4 py-3">{kode}</td>
                                <td className="px-4 py-3">{nama}</td>
                                <td className="px-4 py-3">{jumlahBarang}</td>
                                <td className={status === "Aktif" ? "text-center font-normal text-[#51bb70]" : "text-center font-normal text-[#ec625e]"}>{status}</td>
                                <td className="px-4 py-3  justify-center flex"><PenBoxIcon className="text-[#1451d7]" /><span><Trash2 className="text-[#d22c30]" /></span></td>
                            </tr>)
                    })}

                </tbody>
            </table>
            {isTambahbarang && <Formkategori 
            onCancel={() => {
                setIsTambahbarang(false)
                console.log("TUtup");
            }}
            onSimpan={onAddSimpan}
            />}
        </div>
    )
}

export default Kategori