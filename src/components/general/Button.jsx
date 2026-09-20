import { Plus, PlusCircle, PlusCircleIcon } from "lucide-react"
import { Children } from "react"

const Button = ({onClick = () => {}, title='', icon = {}}) => {   
    
    return (
        <button className="text-white font-bold bg-[#145ad4] rounded-xl h-10 px-4 flex items-center cursor-pointer" onClick={onClick}><span>{icon}</span>{title}</button>
    )
}

export default Button