
import transaksi from "../../data/transaksi";
import TitleGrid from "./Titlegrid"

const Transaksi = () => {

    // console.log(transaksi);


    return (
        <div className="overflow-x-auto w-2xl">
            <TitleGrid title="Transaksi Baru" sidetitle="Lihat Semua" childer={
                <table className="w-full border-collapse text-xm">
                    <thead className="">
                        <tr className="border-b border-slate-200">
                            <th className="px-4 py-3 text-center font-semibold text-slate-500">Tanggal</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-500">Jenis</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-500">Barang</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-500">Jumlah</th>
                            <th className="px-4 py-3 text-center font-semibold text-slate-500">Keterangan</th>
                        </tr>
                    </thead>
                    <tbody className="font-medium">
                        {transaksi.map((item) => {
                            const { id, tanggal, barang, jenis, jumlah, keterangan } = item

                            return (
                                <tr className="border-b border-slate-200" key={id}>
                                    <td className="px-4 py-3 text-center font-normal text-slate-500">{tanggal}</td>
                                    <td className="px-4 py-3 ">
                                        <span className={jenis === "Masuk" ? " text-center font-normal text-[#51bb70] bg-[#e4f9ea] rounded-xl p-2" : "text-center font-normal text-[#ec625e] bg-[#fef5f4] rounded-xl p-2" }>
                                            {jenis}
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-center font-normal text-slate-500">{barang}</td>
                                    <td className="px-2 py-3 text-center font-normal text-slate-500">  
                                        <span className={jenis === "Masuk" ? " text-center font-semibold text-[#51bb70]  rounded-xl p-2  " : "text-center font-semibokd text-[#ec625e] rounded-xl p-2" }>{jumlah}</span></td>
                                    <td className="px-4 py-3 text-center font-normal text-slate-500">{keterangan}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            } />


        </div>
    )
}

export default Transaksi