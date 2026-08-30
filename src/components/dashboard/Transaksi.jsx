
import transaksi from "../../data/transaksi";
import TitleGrid from "./Titlegrid"

const Transaksi = () => {

    console.log(transaksi);


    return (
        <div>
            <TitleGrid title="Transaksi Baru" childer={
                <table className="">
                    <thead className="decori">
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