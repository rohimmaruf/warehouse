import { useState } from "react"
import ProductFilter from "@/features/products/ProductFilter"
import ProductHeader from "@/features/products/ProductHeader"
import ProductStats from "@/features/products/ProductStats"
import ProductTable from "@/features/products/ProductTable"
import ProductForm from "@/features/products/ProductForm"
import product from "@/data/product"
import ModalDelete from "@/features/products/Modal/ModalDelete"

const ProductPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [listProduct, setListProduct] = useState(product)
    const [selectProductId, setSelectProduct] = useState(null)

    const selectId = (id) => {
        console.log("Tombolberhasil");
        console.log("id >>" + id);
        setSelectProduct(id)

    }

    const deleteProduct = () => {
        // console.log(selectProductId);
        console.log(listProduct);

        setListProduct(() => {
            const hasil = listProduct.filter((prev) => {
                if (prev.id !== selectProductId) {
                    return true
                } else {
                    return false
                }
            }
            )
            return hasil

        })
        setIsModalOpen(false)

    }


    const onAddListProdact = (e) => {
        console.log(e);
        // setListProduct(
        //     (prev) => ([...prev, e])
        // )
        setListProduct((prev) => ([...prev, e]))
        console.log(listProduct);




    }

    return (
        <div className="bg-warehouse-bg gap-4 flex flex-col p-4">
            <ProductHeader onAddProduct={() => (setIsOpen(true))} />
            <ProductStats />
            <ProductFilter />
            <ProductTable
                onDelete={(id) => selectId(id)}
                product={listProduct}
                onModal={() => (setIsModalOpen(true))} />
            {isOpen && <ProductForm
                onCancel={() => { setIsOpen(false) }}
                onAddProduct={onAddListProdact} />}
            {isModalOpen && <ModalDelete
                onKeep={() => (setIsModalOpen(false))}
                onDelete={deleteProduct}
            />}

        </div>
    )
}

export default ProductPage