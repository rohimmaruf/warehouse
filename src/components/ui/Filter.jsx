import { RefreshCcwDot } from "lucide-react"
import Button from "./Button"

const Filter = () => {
    return (
        <div className="flex gap-4 w-full">
            <input type="search" className="border-2 w-[30%]" placeholder="Search Products by name, code, or Category..." />
            <div className="flex flex-col">
                <label htmlFor="">Category</label>
                <select name="" id="" className="border-2">
                    <option value="">All Categories</option>
                    <option value="">Elektronik</option>
                    <option value="">Aksesoris</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label htmlFor="">Status</label>
                <select name="" id="" className="border-2">
                    <option value="">All Status</option>
                    <option value="">Elektronik</option>
                    <option value="">Aksesoris</option>
                </select>
            </div>
            <Button title="Reset" icon={<RefreshCcwDot />} varian="secondary" />
        </div>
    )
}

export default Filter