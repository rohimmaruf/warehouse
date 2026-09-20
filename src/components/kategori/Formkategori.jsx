import { Circle, CircleAlert, Save } from "lucide-react"
import Button from "../general/Button"
import TitleFormKategori from "./TitleFormKategori"
import { useState } from "react"

const Formkategori = ({ onCancel = () => { }, }) => {

    const [kategori, SetKategoti] = useState([

    ])
    const [listkategori, SetListkategori] = useState({

        kode: "",
        nama: "",
        jumlahBarang: 24,
        status: "",
        deskripsi : "",

    })
    // const [kode, SetKode] = useState({})
    const inputChange = (e) => {
       const {name, value} = e.target
       console.log(name, value);
       SetListkategori((reff) => ({...reff, [name] : value}))
       console.log(listkategori);
       
       
    }

    // const inputKode = (e) => {
    //     // console.log(e.target.value);
    //     // console.log(e.target.name);
        
    //     const value = e.target.value
    //     SetListkategori((prev) => {
    //         const result = { ...prev,kode:value }
    //         return (result)
    //     })

    //     console.log(listkategori);   
    // }
    // const inputTitle = (e) => {
    //     const value = e.target.value
    //     SetListkategori((prev) => ({...prev, nama:value}))
        
    //     console.log(listkategori);
        
        
    // }
    // console.log(kategori);


    return (
        <div className="  fixed bg-black/30 inset-0 z-50  justify-center items-center flex flex-col">
            <div className="bg-white shadow-2xl  p-4 gap-4 items-start flex flex-col w-fit h rounded-2xl">
                {/* Title Form */}
                <h1 className="font-bold text-2xl">Tambah Kategori</h1>
                <p className="text-gray-500">Tambahkan kategori barang baru ke dalam sistem.</p>
                {/* Form */}
                <TitleFormKategori title="Kode Kategori" />
                {/* Bikin Handler */}
                <input 
                className="border-gray-300 border-2 w-full p-2" 
                type="text" 
                placeholder=""
                name="kode"
                    onChange={inputChange}
                />
                <TitleFormKategori title="Nama Kategori" />
                <input 
                className="border-gray-300 border-2 w-full p-2" 
                type="text" 
                name="nama" 
                id="" 
                placeholder="Contoh: elektronik"
                    onChange={inputChange}
                />
                <TitleFormKategori title="Deskripsi" />
                <textarea 
                className="border-gray-300 border-2 w-full p-2 " 
                name="deskripsi" 
                id="">
                </textarea>
                <TitleFormKategori title="Status" />
                <select 
                onChange={inputChange}
                className="border-gray-300 border-2 w-full p-2" 
                name="status" 
                id="">
                    <option value="pilih">Pilih</option>
                    <option value="aktif">Aktif</option>
                    <option value="nonaktif">Nonaktif</option>
                </select>
                <div className="flex gap-2">
                    <Button title="Batal" varian="secondary" onClick={onCancel} />
                    <Button title="Simpan" icon={<Save />} />
                </div>
            </div>

        </div>
    )
}

export default Formkategori