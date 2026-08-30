import { Square } from "lucide-react"

const Card = () => {
    return (
        <div className="bg-white w-45 p-4 flex ml-6 shadow">
            <div>
                <h2>Total Barang</h2>
                <h1>128</h1>
                <p>Jenis Barang</p>
            </div>
            <div><Square/></div>
        </div>
    )
}

export default Card