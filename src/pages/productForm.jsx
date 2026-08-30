import { useState } from "react"

const ProductForm = () => {

    const [formData, SetFormData] = useState(
        {
            kode: "",
            nama: "",
            kategori: "",
            satuan: "",
            stok: "",
            stokMinimum: "",
            lokasi: ""
        }
    )

    // formData = {
    //     kode: "BRG-001",
    //     nama: "Mouse",
    //     kategori: "atk",
    //     satuan: "pcs",
    //     stok: "10",
    //     stokMinimum: "5",
    //     lokasi: "A1"
    // }
    const hasilInput = (e) => {
        const { name, value } = e.target

        SetFormData(
            {
                ...formData,
                [name]: value,
            }
        )
        console.log(formData);
        

    }

    return (
        <>
            <section>
                <div>
                    <h2>Tambah Barang</h2>
                    <p>Masukan Barang</p>
                </div>
            </section>
            <form action="">
                <div>
                    {/* ID Barang */}
                    <label htmlFor="kode">Kode Barang</label>
                    <input
                        type="text"
                        id="kode"
                        name="kode"
                        placeholder="contoh : BRG-001"
                        onChange={hasilInput}
                    />
                    <br />
                </div>
                <div>
                    {/* Nama Barang */}
                    <label htmlFor="namaBarang">Nama Barang</label>
                    <input
                        type="text"
                        id="namaBarang"
                        name="nama"
                        placeholder="contoh : CPU I3 gen 11"
                        onChange={hasilInput}
                    />
                    <br />
                </div>
                <div>
                    {/* Kategori */}
                    <label htmlFor="kategori">Kategori</label>
                    <select
                        id="kategori"
                        name="kategori"
                        onInput={hasilInput}
                    >
                        <option value="">Pilih Kategori</option>
                        <option value="elektronik">Elektronik</option>
                        <option value="atk">ATK</option>
                        <option value="bahan">Bahan</option>
                        <option value="material">Material</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="satuan">Satuan</label>
                    <select
                        id="satuan"
                        name="satuan"
                        onInput={hasilInput}
                    >
                        <option value="">Pilih Satuan</option>
                        <option value="pcs">Pcs</option>
                        <option value="box">Box</option>
                        <option value="rim">Rim</option>
                        <option value="botol">Botol</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="stok">Stok</label>
                    <input
                        onInput={hasilInput}
                        type="number"
                        id="stok"
                        name="stok"
                        placeholder="Masukan Jumlah Stok"
                    />
                </div>
                <div>
                    <label htmlFor="stokMinimum">Stok Minimum</label>
                    <input
                        onInput={hasilInput}
                        type="number"
                        id="stokMinimum"
                        name="stokMinimum"
                        placeholder="Masukan Stok minumum"
                    />
                </div>
                <div>
                    <label htmlFor="lokasi">Lokasi</label>
                    <select name="lokasi" id="lokasi" nama="lokasi" onInput={hasilInput}>
                        <option value="raka">Rak A</option>
                        <option value="rakb">Rak B</option>
                        <option value="rakc">Rak C</option>
                        <option value="rakd">Rak D</option>
                        <option value="rake">Rak E</option>
                    </select>
                </div>
                <button type="submit">Sinpan Barang</button>
            </form>
        </>


    )
}

export default ProductForm