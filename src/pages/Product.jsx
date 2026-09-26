import { useState } from "react"
import ProductFilter from "../components/products/ProductFilter"
import ProductHeader from "../components/products/ProductHeader"
import ProductStats from "../components/products/ProductStats"
import ProductTable from "../components/products/ProductTable"
import ProductForm from "../components/products/ProductForm"

const Product = () => {

    const [isOpen, setIsOpen] = useState(false)
     const [listProduct, setListProduct] = useState(
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

    const onAddListProdact = (e) => {
        console.log(e);
        setListProduct(
            (prev) => ([...prev, e])
        )
        
    }

    return(
        <div className="bg-warehouse-bg">
            <ProductHeader onAddProduct={() => (setIsOpen(true))} />
            <ProductStats/>
            <ProductFilter/>
            <ProductTable product={listProduct}/>
            {isOpen && <ProductForm onCancel={() => {setIsOpen(false)}} onAddProduct={onAddListProdact} />}
        </div>
    )
}

export default Product