import { Box, Square } from "lucide-react"

const ItemCard = ({tittle="", nominal=Number, description="", icon=null, bgColor}) => {
    


    return (
        <div className="bg-white w-55 p-4 flex ml-6 shadow rounded-2xl items-center justify-between">
            <div>
                <h2 className="text-lg font-medium ">{tittle}</h2>
                    <h1 className="text-3xl font-semibold">{nominal}</h1>
                <p className="text-s font-medium">{description}</p>
            </div>
            <div style={{backgroundColor:bgColor}} className=" p-3 rounded-xl">{icon}</div>
        </div>
    )
}

export default ItemCard