import { useState } from "react"
import ProductFilter from "../components/products/ProductFilter"
import ProductHeader from "../components/products/ProductHeader"
import ProductStats from "../components/products/ProductStats"
import ProductTable from "../components/products/ProductTable"
import ProductForm from "../components/products/ProductForm"
import product from "../data/product"

const Product = () => {

    const [isOpen, setIsOpen] = useState(false)
     const [listProduct, setListProduct] = useState(product)

    const onAddListProdact = (e) => {
        console.log(e);
        setListProduct(
            (prev) => ([...prev, e])
        )
        
    }

    return(
        <div className="bg-warehouse-bg gap-4 flex flex-col p-4">
            <ProductHeader onAddProduct={() => (setIsOpen(true))} />
            <ProductStats/>
            <ProductFilter/>
            <ProductTable product={listProduct}/>
            {isOpen && <ProductForm onCancel={() => {setIsOpen(false)}} onAddProduct={onAddListProdact} />}
        </div>
    )
}

export default Product