import LineGrafik from "./grafik/Linegrafik"

const Grafik = () => {
    return (
        <div className="p-4 bg-white  shadow w-4xl rounded-2xl h-2xl">
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
            <LineGrafik />
        </div>
    )
}

export default Grafik