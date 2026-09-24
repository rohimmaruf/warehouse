import { ArrowUp, Box, EllipsisVertical, Square } from "lucide-react"

const StatCardItem = ({ tittle = "", nominal = Number, description = "", icon = null, bgColor }) => {



    return (
        <div className="bg-white w-[25%] justify-start  flex shadow rounded-2xl items-start gap-4 p-4">
            <div className=" justify-center  flex  items-center gap-4 ">
                <div style={{ backgroundColor: bgColor }} className=" p-3 rounded-xl">
                    {icon}
                </div>
                <div className="">
                    <h2 className="text-lg font-bold ">{tittle}</h2>
                    <h1 className="text-3xl font-extrabold">{nominal}</h1>
                    <div className="flex gap-2">
                        <p className="text-s font-bold text-text-green flex">{description}</p>
                        <p className="font-medium text-x text-text-secondary">from last month</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-start text-text-secondary">
                <EllipsisVertical />
            </div>
        </div>
    )
}

export default StatCardItem