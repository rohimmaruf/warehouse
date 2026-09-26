import { Box, Download, MoveDown, MoveUp, Server, Square, TriangleAlert, Upload } from "lucide-react"
import ItemCard from "./itemcard/ItemCard"

const Card = () => {
    return (
        <div className="flex gap-4 ">
            <ItemCard tittle="Total Prouduct" nominal={128} description="12%" icon={<Box className="text-white" size={30} />} bgColor="#7b99f2" />
            <ItemCard tittle="Total Stock" nominal={1248} description="8.3%" icon={<Server className="text-white" size={30} />} bgColor="#84d598" />
            <ItemCard tittle="Stok In" nominal={56} description="25%" icon={<Download className="text-text-green" size={30} />} bgColor="#daf7e7" />
            <ItemCard tittle="Stock Oout" nominal={32} description="5%" icon={<Upload className="text-[#f96a33]" size={30} />} bgColor="#fdeedd" />
            {/* <ItemCard tittle="Low Stock" nominal={8} description="10%" icon={<TriangleAlert className="text-[#f14e4a]" size={50} />} bgColor="#fde2e4" /> */}
        </div>
    )
}

export default Card