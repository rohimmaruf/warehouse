import { useState } from "react"
import ProductFilter from "@/features/products/ProductFilter"
import ProductHeader from "@/features/products/ProductHeader"
import ProductStats from "@/features/products/ProductStats"
import ProductTable from "@/features/products/ProductTable"
import ProductForm from "@/features/products/ProductForm"
import product from "@/data/product"

const ProductPage = () => {

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

export default ProductPage