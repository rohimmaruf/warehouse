import { Plus, PlusCircle, PlusCircleIcon } from "lucide-react"
import { Children } from "react"

const Button = ({onClick = () => {}, title='', icon = null, varian="primary"}) => {   
    
    const buttonVarian = {
        primary : 'text-white font-bold bg-[#145ad4]   hover:bg-[#0c1e3b]',
        secondary : 'text font-bold bg-white border-2 border-gray-400 hover:bg-gray-500'
    }

    return (
        <button className={`rounded-xl h-10 px-4 flex items-center cursor-pointer  ${buttonVarian[varian]}`} onClick={onClick}>{icon}{title}</button>
    )
}

export default Button