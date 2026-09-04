import { Bell, CircleUser, Menu } from "lucide-react"

const Topbar = ({navigasi}) => {

    const buttonTop = () => {
        console.log("Berhasil");
        navigasi(prev => !prev)
    }

    return (
        <div className="flex justify-between p-8 bg-white w-full h-4 items-center  shadow fixed" >
            <div className="flex">
                <button className="cursor-pointer hover:bg-blue-50" onClick={buttonTop}>
                    <Menu size={30} />
                </button>
                <h1 className="text-2xl px-4 font-black">Dashboard</h1>
            </div>
            <div className="flex gap-4">
                <Bell size={30} />
                <CircleUser size={30} />
                <p>Admin Gudang</p>
            </div>
        </div>
    )
}

export default Topbar