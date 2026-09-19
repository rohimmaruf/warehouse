import Button from "./Button"

const Titlebox = () => {
    return (
        <div className="bg-white flex p-4  shadow rounded-xl justify-between gap-5 ">
            <div className="flex-col gap-5">
                <h1 className="text-3xl font-bold">Kategori</h1>
                <p className="text-gray-600">kelola Kategori barang yang tersedia di gudang</p>
            </div>
            <Button/>
        </div>
    )
}

export default Titlebox