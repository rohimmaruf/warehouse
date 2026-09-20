import { Plus } from "lucide-react"
import Button from "./Button"

const Titlebox = ({onClick = () => {}}) => {
    return (
        <div className="bg-white flex p-4  shadow rounded-xl justify-between gap-5 ">
            <div className="flex-col gap-5">
                <h1 className="text-3xl font-bold">Kategori</h1>
                <p className="text-gray-600">kelola Kategori barang yang tersedia di gudang</p>
            </div>
            <Button onClick={onClick} title="Tambah Kategori" icon={<Plus/>}/>
        </div>
    )
}

export default Titlebox