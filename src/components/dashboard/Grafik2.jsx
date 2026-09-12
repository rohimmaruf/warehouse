import LineGrafik from "./grafik/Linegrafik"
import Piegrafik from "./grafik/Piegrafik"

const Grafik2 = () => {
    return (
        <div className="p-4 bg-white  shadow  rounded-2xl flex flex-col gap-10">
            <div className="flex justify-between items-center text-lg font-bold">
                <h1>Grafik Barang Masuk & Keluar</h1>
                <select className="border-amber-100 rounded p-1 font-semibold">
                    <option value="">7 Hari terakhir</option>
                    <option value="">30 Hari terakhir</option>
                    <option value="">60 Hari terakhir</option>
                    <option value="">90 Hari terakhir</option>
                </select>
                {/* Grafik */}
                {/* <Bar /> */}

            </div>
            <Piegrafik  />
        </div>
    )
}

export default Grafik2