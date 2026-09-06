import { Mouse} from "lucide-react"

const Itemaksicepat = ({ icon = null, menu = "", className, }) => {
    return (
        <div className={ `flex justify-center items-center gap-2 px-2 rounded-2xl w-[100%] h-10 cursor-pointer text-xl ${className}`}>
            {icon}
            <h1>
                {menu}
            </h1>

        </div>
    )
}
export default Itemaksicepat