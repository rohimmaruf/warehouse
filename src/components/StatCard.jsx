import { Box, CircleX, ClosedCaption, Download, Server, TriangleAlert, Upload } from "lucide-react"
// import ItemCard from "../dashboard/itemcard/ItemCard"
import StatCardItem from "@/components/StatCardItem"

const StatCard = () => {
    return (
        <div className="flex gap-4 ">
            <StatCardItem tittle="Total Prouduct" nominal={128} description="Category" icon={<Box className="text-white" size={30} />} bgColor="#7b99f2" />
            <StatCardItem tittle="Total Stock" nominal={1248} description="Total All Stock" icon={<Server className="text-white" size={30} />} bgColor="#84d598" />
            <StatCardItem tittle="Low Stock" nominal={56} description="Under Minimum" icon={<TriangleAlert className="text-warehouse-gold" size={30} />} bgColor="#fdf1dc" />
            <StatCardItem tittle="Out Stock" nominal={32} description="Stock Empety" icon={<CircleX className="text-red-500" size={30} />} bgColor="#fdeedd" />
            {/* <ItemCard tittle="Low Stock" nominal={8} description="10%" icon={<TriangleAlert className="text-[#f14e4a]" size={50} />} bgColor="#fde2e4" /> */}
        </div>
    )
}

export default StatCard