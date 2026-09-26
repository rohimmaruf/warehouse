import { Save } from "lucide-react"
import Button from "../ui/Button"
import TitleForm from "../ui/TitleForm"

const ProductForm = ({onCancel = () => {}}) => {

    return(
         <div className="  fixed bg-black/30 inset-0 z-50  justify-center items-center flex flex-col">
            <div className="bg-white shadow-2xl  p-4 gap-4 items-start flex flex-col w-fit h rounded-2xl">
                {/* Title Form */}
                <h1 className="font-bold text-2xl">Tambah Kategori</h1>
                <p className="text-gray-500">Tambahkan kategori barang baru ke dalam sistem.</p>
                {/* Form */}
                <TitleForm title="Kode Kategori" />
                {/* Bikin Handler */}
                <input 
                className="border-gray-300 border-2 w-full p-2" 
                type="text" 
                placeholder=""
                name="kode"
                    // onChange={inputChange}
                />
                <TitleForm title="Nama Kategori" />
                <input 
                className="border-gray-300 border-2 w-full p-2" 
                type="text" 
                name="nama" 
                id="" 
                placeholder="Contoh: elektronik"
                    // onChange={inputChange}
                />
                <TitleForm title="Deskripsi" />
                <textarea 
                className="border-gray-300 border-2 w-full p-2 " 
                name="deskripsi" 
                id="">
                </textarea>
                <TitleForm title="Status" />
                <select 
                // onChange={inputChange}
                className="border-gray-300 border-2 w-full p-2" 
                name="status" 
                id="">
                    <option value="pilih">Pilih</option>
                    <option value="aktif">Aktif</option>
                    <option value="nonaktif">Nonaktif</option>
                </select>
                <div className="flex gap-2">
                    <Button title="Batal" 
                    varian="secondary" 
                    onClick={onCancel} 
                    />
                    <Button title="Simpan"
                    //  onClick={onSubmit} 
                     icon={<Save />} />
                </div>
            </div>

        </div>
    )
}

export default ProductForm