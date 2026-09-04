import { Mouse} from "lucide-react"

const Itemaksicepat = ({ icon = null, menu = "", className, }) => {
    return (
        <div className={ `flex justify-start items-center gap-4 px-10 rounded-2xl w-full h-20 cursor-pointer text-xl ${className}`}>
            {icon}
            <h1>
                {menu}
            </h1>

        </div>
    )
}
export default Itemaksicepat