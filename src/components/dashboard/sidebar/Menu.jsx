import { icons } from "lucide-react"
import { Album, Cuboid, House, MapIcon, User, Warehouse } from 'lucide-react'
import { NavLink } from "react-router-dom"

const ItemMenu = ({ title = "", icon, to }) => {
    return (
        <NavLink
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
                `flex items-center gap-4 rounded-md px-6 py-2 font-semibold
                ${isActive
                    ? "bg-[#123b84] text-white"
                    : "text-white hover:bg-[#123b84]"
                }
            `
            }


        >
            {icon}
            <h3>{title}</h3>
            {/* <button className="hover:bg-[#123b84] cursor-pointer p-2 rounded-md">
                <div className='flex font-semibold gap-4 px-4' >
                    {icon}
                    <h3>{title}</h3>
                </div>
            </button> */}
        </NavLink>

    )
}

export default ItemMenu