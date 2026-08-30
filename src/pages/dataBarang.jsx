import { useState } from "react"
import ProductForm from "./Productform"

const DataBarang = () => {

    const [isFormOpen, setIsFormOpen] = useState (false);

    return(
        <>
      {/* header */}
      <section>
        <div>
          <div>
            <h2>Data Barang</h2>
            <p>Kelola semua data barang yang tesedia di gudang</p>
          </div>
          <div>
            <button>Export Excel</button>
            <button onClick={() => setIsFormOpen(true)}>+ Tambah Barang</button>
          </div>
        </div>
        {/* filter */}
        <div className='filter'>
          <input type="search" name="" id="" />
          <div>
            <select>
              <option value="">Semua Kategori</option>
              <option value="">Eletronik</option>
              <option value="">ATK</option>
              <option value="">Bahan</option>
            </select>
            <select>
              <option value="">Semua Satuan</option>
              <option value="">Pcs</option>
              <option value="">Rim</option>
              <option value="">Botol</option>
            </select>
            <button>Filter</button>
          </div>
        </div>
      </section>
      {/* Tabel */}
      <section>
        <table className='table_data'>
          <thead className='table_header'>
            <tr>
              <th>NO</th>
              <th>Kode Barang</th>
              <th>Nama Barang</th>
              <th>Kategori</th>
              <th>Satuan</th>
              <th>Stock</th>
              <th>Stock Minimum</th>
              <th>Lokasi</th>
              <th>Aksi</th>
            </tr>

          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>BG-01</td>
              <td>CPU</td>
              <td>Elektronik</td>
              <td>Pcs</td>
              <td>15</td>
              <td>5</td>
              <td>Rak A1</td>
              <td>
                <button>Edit</button>
                <button>Hapus</button>
              </td>
            </tr>

          </tbody>
        </table>
      </section>
      {isFormOpen && <ProductForm/>}
    </>
    )

    
}

export default DataBarang