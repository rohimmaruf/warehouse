import { RefreshCcwDot } from "lucide-react"
import Button from "./Button"

const Filter = () => {
    return (
        <div className="flex gap-4 w-full p-4 justify-between items-center">
            <input 
            type="search" 
            className="border-1 w-2xl rounded-lg p-2 h-7 border-gray-300" 
            placeholder="Search Products by name, code, or Category..." />
            <div className="flex flex-col">
                <label className="text-text-secondary font-medium">Category</label>
                <select 
                name="" id="" 
                className="border-1 w-xs rounded-lg border-gray-300"
                >
                    <option value="">All Categories</option>
                    <option value="">Elektronik</option>
                    <option value="">Aksesoris</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-text-secondary font-medium">Status</label>
                <select 
                name="" id="" 
                className="border-1 w-xs rounded-lg border-gray-300"
                >
                    <option value="">All Status</option>
                    <option value="">Elektronik</option>
                    <option value="">Aksesoris</option>
                </select>
            </div>
            <Button  title="Reset" icon={<RefreshCcwDot />} varian="secondary" />
        </div>
    )
}

export default Filter