import PageTitle from "../ui/PageTitle"

const ProductHeader = ({onAddProduct}) => {
    return(
        <div>
            <PageTitle onAdd={onAddProduct}/>
        </div>
    )
}

export default ProductHeader