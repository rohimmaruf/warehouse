import { Plus } from "lucide-react"
import Button from "./Button"

const PageTitle = ({onAdd, title="", subtitle="" }) => {
    return (
        <div className="flex justify-between items-center ">
            <div>
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="text-x text-text-secondary ">{subtitle}</p>
            </div>
            <Button title="Add Product"  icon={<Plus/>} onClick={onAdd}/>
        </div>
    )
}

export default PageTitle