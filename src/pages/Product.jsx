import { useState } from "react"
import ProductFilter from "../components/products/ProductFilter"
import ProductHeader from "../components/products/ProductHeader"
import ProductStats from "../components/products/ProductStats"
import ProductTable from "../components/products/ProductTable"
import ProductForm from "../components/products/ProductForm"

const Product = () => {

    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <ProductHeader onAddProduct={() => (setIsOpen(true))} />
            <ProductStats/>
            <ProductFilter/>
            <ProductTable/>
            {isOpen && <ProductForm onCancel={() => {setIsOpen(false)}}/>}
        </>
    )
}

export default Product