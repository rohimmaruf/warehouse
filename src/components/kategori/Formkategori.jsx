import { Circle } from "lucide-react"
import Button from "../general/Button"

const Formkategori = () => {
    return (
        <div className="fixed bg-black/30 w-full h-full justify-center items-center flex flex-col">
            <div className="bg-white  justify-center items-center flex flex-col w-[30%] h-[50%] rounded-2xl">
                {/* Title Form */}
                <h1>Tambah Kategori</h1>
                <p>Tambahkan kategori barang baru ke dalam sistem.</p>
                {/* Form */}
                <h2>Kode Kategori</h2>
                <input type="text" placeholder="" />
                <h2>Nama Kategori*</h2>
                <input type="text" name="" id="" placeholder="Contoh: elektronik" />
                <h2>Deskripsi</h2>
                <input type="textarea" name="" id="" />
                <h2>Status*</h2>
                <select name="" id="">
                    <option value="pilih">Pilih</option>
                    <option value="aktif">Aktif</option>
                    <option value="nonaktif">Nonaktif</option>
                </select>
                <div className="flex">
                    <Button title='Tambah kategori'/>
                </div>
            </div>

        </div>
    )
}

export default Formkategori