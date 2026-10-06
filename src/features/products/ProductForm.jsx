import { Box, Save } from "lucide-react"
import Button from "@/components/Button"
import TitleForm from "@/components/TitleForm"
import { useState } from "react"
import HelperText from "@/components/HelperText"
import InformationText from "@/components/InfomationText"
import Modal from "@/components/Modal"

const ProductForm = ({ onCancel = () => { }, onAddProduct = () => { } }) => {


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
        // console.log(newProdact);
        onAddProduct(newProdact)
        onCancel()


    }
    return <Modal><div className="w-full flex  items-center gap-4  border-gray-200">
        <Box className="bg-amber-500  p-2 rounded-xl" size={60} />
        <div>
            <h1 className="font-bold text-2xl">Add Product</h1>
            <p className="text-gray-500  w-full font-semibold" >Add new Product on system</p>
        </div>

    </div>
        <InformationText>Product Information</InformationText>
        {/* Form */}
        <div className="flex gap-4  border-amber-400 w-full ">

            <div className=" border-blue-700 w-full gap-4 flex flex-col">

                {/* Kode Product */}
                <div>
                    <TitleForm>Kode Product *</TitleForm>
                    <input
                        className="border-gray-300 border-2 px-2 py-1 rounded-lg w-full "
                        type="text"
                        placeholder="Contoh: BRG-001"
                        name="code"
                        onChange={onInput}
                    />
                    <HelperText>Kode unik untuk identifikasi produk</HelperText>
                </div>


                {/* Categori */}
                <TitleForm >Categori</TitleForm>
                <select
                    className="border-gray-300 border-2 w-full px-2 py-1 rounded-lg"
                    name="category"
                    id=""
                    onChange={onInput}
                >

                    <option value="Select">Pilih</option>
                    <option value="elektronik">Elektronik</option>
                    <option value="aksesoris">aksesoris</option>
                </select>

                {/* Location */}
                <div>
                    <TitleForm>Location</TitleForm>
                    <select
                        className="border-gray-300 border-2 w-full px-2 py-1 rounded-lg"
                        name="location"
                        id=""
                        onChange={onInput}
                    >
                        <option value="Select">Pilih</option>
                        <option value="A001">A001</option>
                        <option value="A002">A002</option>
                    </select>
                    <HelperText>Location Product</HelperText>
                </div>

                {/* Stock Minimum */}
                <div>
                    <TitleForm>Stock Minimum</TitleForm>
                    <input
                        className="border-gray-300 border-2 w-full px-2 py-1 rounded-lg"
                        type="text"
                        placeholder="0"
                        name="minimumStock"
                        onChange={onInput}
                    />
                    <HelperText>Minimum stok level </HelperText>
                </div>
            </div>
            <div className="w-full flex flex-col gap-4">

                {/* Product Name */}
                <div>
                    <TitleForm>Prodect Name</TitleForm>                            <input
                        className="border-gray-300 border-2 w-full px-2 py-1 rounded-lg"
                        type="text"
                        placeholder="Contoh : Laptop"
                        name="name"
                        onChange={onInput}
                    />
                    <HelperText>Product name</HelperText>
                </div>

                {/* Unit */}
                <div>
                    <TitleForm>Unit</TitleForm>
                    <select
                        // onChange={inputChange}
                        className="border-gray-300 border-2 w-full px-2 py-1 rounded-lg"
                        name="unit"
                        id=""
                        onChange={onInput}
                    >
                        <option value="Select">Select Unit</option>
                        <option value="pcs">PCS</option>
                        <option value="unit">Unit</option>
                    </select>
                    <HelperText>Exampel: pcs, unit</HelperText>
                </div>

                <div>
                    {/* Stock */}
                    <TitleForm>Stock</TitleForm>
                    {/* Bikin Handler */}
                    <input
                        className="border-gray-300 border-2 w-full px-2 py-1 rounded-lg"
                        type="text"
                        placeholder="0"
                        name="stock"
                        onChange={onInput}
                    />
                    <HelperText>Jumlah stock saat ini</HelperText>
                </div>
            </div>
        </div>
        <div>
            <InformationText>Additional Infomation</InformationText>
            <div className="flex justify-between">
                <div>
                    <TitleForm>Description (Opsional)</TitleForm>
                    <textarea
                        className="border-gray-300 border-2"
                        name=""
                        placeholder="Input description Product ....."
                    >
                    </textarea>
                </div>
                <div>
                    <TitleForm>Picture Prodect</TitleForm>
                    <input type="image" />
                </div>
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
        </div></Modal>
}

export default ProductForm