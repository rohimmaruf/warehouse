import { Box, Download, Server, Upload } from "lucide-react"
import ItemCard from "../dashboard/itemcard/ItemCard"
import StatCardItem from "./StatCardItem"

const StatCard = () => {
    return (
        <div className="flex gap-4 ">
            <StatCardItem tittle="Total Prouduct" nominal={128} description="12%" icon={<Box className="text-white" size={30} />} bgColor="#7b99f2" />
            <StatCardItem tittle="Total Stock" nominal={1248} description="8.3%" icon={<Server className="text-white" size={30} />} bgColor="#84d598" />
            <StatCardItem tittle="Stok In" nominal={56} description="25%" icon={<Download className="text-text-green" size={30} />} bgColor="#daf7e7" />
            <StatCardItem tittle="Stock Oout" nominal={32} description="5%" icon={<Upload className="text-[#f96a33]" size={30} />} bgColor="#fdeedd" />
            {/* <ItemCard tittle="Low Stock" nominal={8} description="10%" icon={<TriangleAlert className="text-[#f14e4a]" size={50} />} bgColor="#fde2e4" /> */}
        </div>
    )
}

export default StatCard