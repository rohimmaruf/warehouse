

const Itemstok = ({ item }) => {
    const { nama, kategori, lokasi, stok, minimum, icon:Icon, } = item

    return (
        <div className="flex justify-between px-4 h-14 mb-4 border-b-2 border-slate-200 ">
            <div className="flex items-center ">

                <Icon className="p-2 rounded-xl bg-[#edeff4] mr-6" size={45}/>
                <div>
                    <h3 className="font-semibold">{nama}</h3>
                    <p></p>
                    <p>{kategori} . {lokasi} </p>
                </div>
            </div>
            <div className=" w-25">
                <h3 className="px-3 py-1 justify-center flex text-[#ee3133] bg-[#fef1f2] rounded-xl font-semibold">Stok : {stok}</h3>
                <p className="justify-center flex">Min. {minimum}</p>
            </div>
        </div>
    )

}

export default Itemstok