import { Bell, CircleUser, Menu } from "lucide-react"

const Topbar = ({navigasi}) => {

    const buttonTop = () => {
        console.log("Berhasil");
        navigasi(prev => !prev)
    }

    return (
        <div className="flex justify-between w-full p-4 bg-white w-full  h-16 items-center  shadow sticky top-0 z-50" >
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