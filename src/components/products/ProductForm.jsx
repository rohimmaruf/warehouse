import { Save } from "lucide-react"
import Button from "../ui/Button"
import TitleForm from "../ui/TitleForm"
import { useState } from "react"

const ProductForm = ({ onCancel = () => { }, onAddProduct=()=>{}  }) => {


    const [detailProduct, setDetailProduct] = useState({})


    const onInput = (e) => {
        const { value, name } = e.target

        setDetailProduct((prev) =>
            ({ ...prev, [name]: value })
        )
        // console.log(detailProduct);


    }

    const onSaveProduct = () => { 
        const newProdact = {
            ...detailProduct,
            id: Date.now()
        }
       console.log(newProdact);
        onAddProduct(newProdact)
        onCancel()
        
        
    }
    return (
        <div className="  fixed bg-black/30 inset-0 z-50  justify-center items-center flex flex-col">
            <div className="bg-white shadow-2xl  p-4 gap-4 items-start flex flex-col w-fit h rounded-2xl">
                {/* Title Form */}
                <h1 className="font-bold text-2xl">Add Product</h1>
                <p className="text-gray-500 border-b-2 border-gray-200 w-full" >Add new Product on system</p>
                <p className="text-text-green font-bold">Informasi Product</p>
                {/* Form */}
                <div className="flex gap-4">
                    <div>
                        <TitleForm title="Kode Product" />
                        {/* Bikin Handler */}
                        <input
                            className="border-gray-300 border-2 w-full p-2 ro"
                            type="text"
                            placeholder="Contoh: BRG-001"
                            name="code"
                            onChange={onInput}
                        />
                        <TitleForm title="Categori" />
                        <select
                            className="border-gray-300 border-2 w-full p-2"
                            name="category"
                            id=""
                            onChange={onInput}
                        >

                            <option value="Select">Pilih</option>
                            <option value="elektronik">Elektronik</option>
                            <option value="aksesoris">aksesoris</option>
                        </select>
                        <TitleForm title="Location" />
                        <select
                            className="border-gray-300 border-2 w-full p-2"
                            name="location"
                            id=""
                            onChange={onInput}
                        >
                            <option value="Select">Pilih</option>
                            <option value="A001">A001</option>
                            <option value="A002">A002</option>
                        </select>
                        <TitleForm title="Stock Minimum" />
                        <input
                            className="border-gray-300 border-2 w-full p-2 ro"
                            type="text"
                            placeholder="0"
                            name="minimumStock"
                            onChange={onInput}
                        />
                    </div>
                    <div>
                        <TitleForm title="Prodect Name" />
                        {/* Bikin Handler */}
                        <input
                            className="border-gray-300 border-2 w-full p-2 ro"
                            type="text"
                            placeholder="Contoh : Laptop"
                            name="name"
                            onChange={onInput}
                        />
                        <TitleForm title="Unit" />
                        <select
                            // onChange={inputChange}
                            className="border-gray-300 border-2 w-full p-2"
                            name="unit"
                            id=""
                            onChange={onInput}
                        >
                            <option value="Select">Select Unit</option>
                            <option value="pcs">PCS</option>
                            <option value="unit">Unit</option>
                        </select>
                        <TitleForm title="Stock" />
                        {/* Bikin Handler */}
                        <input
                            className="border-gray-300 border-2 w-full p-2 ro"
                            type="text"
                            placeholder="0"
                            name="stock"
                            onChange={onInput}
                        />

                    </div>
                </div>


                <div className="flex gap-2">
                    <Button title="Batal"
                        varian="secondary"
                        onClick={onCancel}
                    />
                    <Button title="Simpan"
                        onClick={onSaveProduct}
                        icon={<Save />} />
                </div>
            </div>

        </div>
    )
}

export default ProductForm