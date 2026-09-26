import PageTitle from "../ui/PageTitle"

const ProductHeader = ({onAddProduct}) => {
    return(
        <div>
            <PageTitle 
            onAdd={onAddProduct} 
            title={"Products"}
            subtitle="managing product data, checking inventory, and organizing product details in a warehouse"
            />
        </div>
    )
}

export default ProductHeader