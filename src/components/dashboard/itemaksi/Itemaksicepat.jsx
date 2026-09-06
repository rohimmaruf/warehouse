import { Mouse} from "lucide-react"

const Itemaksicepat = ({ icon = null, menu = "", className, }) => {
    return (
        <div className={ `flex justify-items-start items-center gap-4 px-2 rounded-2xl w- h-10 cursor-pointer text-xl ${className}`}>
            {icon}
            <h1>
                {menu}
            </h1>

        </div>
    )
}
export default Itemaksicepat