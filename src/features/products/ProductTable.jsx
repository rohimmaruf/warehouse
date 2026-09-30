import { PenBoxIcon, Trash2 } from "lucide-react"
import { useState } from "react";

const ProductTable = ({ product }) => {

    const [listProduct, setListProduct] = useState(product)

    const onEdit = (id) => {
        return console.log(id);
    }

    const onDelete = (id) => {

        return setListProduct((prev) => prev.filter((e) => e.id !== id))

    }

    return (
        <div className="w-full overflow-x-auto bg-warehouse-surface shadow rounded-xl p-4">

            <table className="w-full">

                <thead className="border-b-2 border-gray-300 bg-warehouse-bg">
                    <tr>
                        <th className="px-4 py-3 text-left ">Code</th>
                        <th className="px-4 py-3 text-left">Product Name</th>
                        <th className="px-4 py-3 text-left">Category</th>
                        <th className="px-4 py-3 text-left">Location</th>
                        <th className="px-4 py-3 text-left">Unit</th>
                        <th className="px-4 py-3 text-center">Stock</th>
                        <th className="px-4 py-3 text-center">Min.Stock</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-center">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {listProduct.length === 0 ? (
                        <tr>
                            <td
                                colSpan="9"
                                className="px-4 py-10 text-center text-gray-500"
                            >
                                Data Kosong
                            </td>
                        </tr>
                    ) : listProduct.map(
                        ({
                            id,
                            code,
                            name,
                            category,
                            location,
                            unit,
                            stock,
                            minimumStock,
                            status
                        }) => {
                            return (

                                <tr
                                    key={id}
                                    className="border-b border-gray-300 text-text-secondary "
                                >
                                    <td className="px-4 py-3">{code}</td>
                                    <td className="px-4 py-3 text-black font-semibold">{name}</td>
                                    <td className="px-4 py-3">{category}</td>
                                    <td className="px-4 py-3">{location}</td>
                                    <td className="px-4 py-3">{unit}</td>
                                    <td
                                        className={`px-4 py-3 font-bold  ${stock < 10 ? "text-red-500 text-center" : "text-green-500 text-center"}`}
                                    >{stock}</td>
                                    <td className="px-4 py-3 text-center">{minimumStock}</td>
                                    <td className="p-4 ">
                                        <span className={`px-4 py-1 text-center rounded-xl w-fit ${status === "normal" ? "bg-green-200 text-text-green font-bold" : "bg-red-200 text-red-500 font-bold"}`}>{status}</span>
                                    </td>
                                    <td className="px-4 py-3  justify-center flex items-center">
                                        <PenBoxIcon
                                            className="text-[#1451d7] 
                                        cursor-pointer"
                                            onClick={() => (onEdit(id))} /><span>
                                            <Trash2
                                                className="text-[#d22c30] cursor-pointer"
                                                onClick={() => (onDelete(id))} /></span></td>
                                </tr>
                            )
                        }
                    )
                    }
                </tbody>

            </table>

        </div>
    )
}

export default ProductTable