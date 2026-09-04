import { Box, Download, MoveDown, MoveUp, Server, Square, TriangleAlert, Upload } from "lucide-react"
import ItemCard from "./itemcard/ItemCard"

const Card = () => {
    return (
        <div className="flex mt-20 ">
        <ItemCard tittle="Total Barang" nominal={128} description="Jenis Barang" icon={<Box className="text-white" size={30}/>} bgColor= "#7b99f2"  />
        <ItemCard tittle="Total Stok" nominal={1248} description="Total Semua Stok" icon={<Server className="text-white" size={30}/>} bgColor="#84d598"/>
        <ItemCard tittle="Barang Masuk" nominal={56} description="Hari Ini" icon={<MoveUp className="text-[#1d93de]" size={30}/>} bgColor="#d6f0fb" />
        <ItemCard tittle="Barang Keluar" nominal={32} description="Hari Ini" icon={<MoveDown className="text-[#f96a33]" size={30}/>} bgColor="#fdeedd"/>
        <ItemCard tittle="Stok Menipis" nominal={8} description="Barang" icon={<TriangleAlert className="text-[#f14e4a]" size={30}/>} bgColor="#fde2e4" />
        </div>
    )
}

export default Card