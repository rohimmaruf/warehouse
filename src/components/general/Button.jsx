import { Plus } from "lucide-react"

const Button = ({isOpen=""}) => {

    const open = (e) => {
        console.log("INi tombol tambah");
        
    }

    return (
        <button className="text-white font-bold bg-[#145ad4] rounded-xl px-4 flex items-center cursor-pointer" onClick={open}><span><Plus/></span>Tambah Kategori</button>
    )
}

export default Button