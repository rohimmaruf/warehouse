import { useState } from "react"

const ProductTable = () => {

    const [product, setProduct] = useState(
        [
            {
                id: 1,
                code: "PRD-001",
                name: "Wireless Mouse Logitech",
                category: "Accessories",
                location: "Rack A1",
                unit: "Pcs",
                stock: 25,
                minimumStock: 10,
                status: "Normal",
            },
            {
                id: 2,
                code: "PRD-002",
                name: "Keyboard Wireless",
                category: "Accessories",
                location: "Rack A1",
                unit: "Pcs",
                stock: 8,
                minimumStock: 10,
                status: "Low Stock",
            },
            {
                id: 3,
                code: "PRD-003",
                name: "USB Type-C Cable",
                category: "Cables",
                location: "Rack A2",
                unit: "Pcs",
                stock: 45,
                minimumStock: 15,
                status: "Normal",
            },
            {
                id: 4,
                code: "PRD-004",
                name: "HDMI Cable 2 Meter",
                category: "Cables",
                location: "Rack A2",
                unit: "Pcs",
                stock: 32,
                minimumStock: 10,
                status: "Normal",
            },
            {
                id: 5,
                code: "PRD-005",
                name: "LAN Cable Cat6",
                category: "Cables",
                location: "Rack A3",
                unit: "Roll",
                stock: 6,
                minimumStock: 10,
                status: "Low Stock",
            },
        ]
    )

    return (
        <div className="border-2">
            <thead className="flex gap-4 border-8" >
                <tr className="border-2 flex gap-10">
                    <th>Code</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Stock</th>
                    <th>Min.Stock</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody className="gap-4 border-8" >
                {product.map(({id,code,name, category, location, unit, stock, minimumStock, status}) => {
                    return (
                        <tr className="border-2 flex gap-10" key={id}>
                            <th>{code}</th>
                            <th>{name}</th>
                            <th>{category}</th>
                            <th>{location}</th>
                            <th>{unit}</th>
                            <th>{stock}</th>
                            <th>{minimumStock}</th>
                            <th>{status}</th>
                        </tr>
                    )
                })}
            </tbody>
        </div>
    )
}

export default ProductTable