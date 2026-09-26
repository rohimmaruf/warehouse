import { PenBoxIcon, Trash2 } from "lucide-react"

const ProductTable = ({ product }) => {
    return (
        <div className="w-full overflow-x-auto border-2">

            <table className="w-full">

                <thead className="border-b-2">
                    <tr>
                        <th className="px-4 py-3 text-left">Code</th>
                        <th className="px-4 py-3 text-left">Product Name</th>
                        <th className="px-4 py-3 text-left">Category</th>
                        <th className="px-4 py-3 text-left">Location</th>
                        <th className="px-4 py-3 text-left">Unit</th>
                        <th className="px-4 py-3 text-left">Stock</th>
                        <th className="px-4 py-3 text-left">Min.Stock</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Action</th>
                    </tr>
                </thead>

                <tbody>
                    {product.map(
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
                                    className="border-b"
                                >
                                    <td className="px-4 py-3">{code}</td>
                                    <td className="px-4 py-3">{name}</td>
                                    <td className="px-4 py-3">{category}</td>
                                    <td className="px-4 py-3">{location}</td>
                                    <td className="px-4 py-3">{unit}</td>
                                    <td className="px-4 py-3">{stock}</td>
                                    <td className="px-4 py-3">{minimumStock}</td>
                                    <td className="px-4 py-3">{status}</td>
                                    <td className="px-4 py-3  justify-center flex">
                                        <PenBoxIcon className="text-[#1451d7]" /><span>
                                        <Trash2 className="text-[#d22c30]" /></span></td>
                                </tr>
                            )
                        }
                    )}
                </tbody>

            </table>

        </div>
    )
}

export default ProductTable