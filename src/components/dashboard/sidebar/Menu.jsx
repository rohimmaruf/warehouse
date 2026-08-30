import { icons } from "lucide-react"
import { Album, Cuboid, House, MapIcon, User, Warehouse } from 'lucide-react'

const ItemMenu = ({ title = "", icon }) => {
    return (
        <button className="hover:bg-[#123b84] cursor-pointer p-2 rounded-md">
            <div className='flex font-semibold gap-4 px-4' >
                {icon}
                <h3>{title}</h3>
            </div>
        </button>

    )
}

export default ItemMenu