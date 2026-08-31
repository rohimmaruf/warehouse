
import transaksi from "../../data/transaksi";
import TitleGrid from "./Titlegrid"

const Transaksi = () => {

    // console.log(transaksi);


    return (
        <div className="overflow">
            <TitleGrid title="Transaksi Baru" sidetitle="Lihat Semua" childer={
                <table className="">
                    <thead className="">
                        <tr>
                            <th>Tanggal</th>
                            <th>Jenis</th>
                            <th>Barang</th>
                            <th>Jumlah</th>
                            <th>Keterangan</th>
                        </tr>
                    </thead>
                    <tbody className="font-medium">
                        {transaksi.map( (item) => {
                            const{id,tanggal,barang,jenis,jumlah,keterangan} = item

                            return(
                            <tr key={id}>
                                <td>{tanggal}</td>
                                <td>{jenis}</td>
                                <td>{barang}</td>
                                <td>{jumlah}</td>
                                <td>{keterangan}</td>
                            </tr>
                            )
                        } )}
                    </tbody>
                </table>
            } />


        </div>
    )
}

export default Transaksi