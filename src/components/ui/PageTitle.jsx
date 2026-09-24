import { Plus } from "lucide-react"
import Button from "./Button"

const PageTitle = () => {
    return (
        <div className="flex justify-between items-center border-2">
            <div>
                <h1 className="text-2xl font-bold">Judul</h1>
                <p className="text-x text-text-secondary ">Kelola data produk, lihat stok, dan atur informasi produk di gudang</p>
            </div>
            <Button title="Add Product"  icon={<Plus/>}/>
        </div>
    )
}

export default PageTitle