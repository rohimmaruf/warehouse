import { ArrowDown } from "lucide-react"

const Itemaksicepat = ({ icon = null, menu = "", className, }) => {
    return (
        <div className={className}>
            {icon}
            <h1>
                {menu}
            </h1>

        </div>
    )
}
export default Itemaksicepat