import stok from "../../data/stok";
import stokmenipis from "../../data/stok"
import Itemstok from "./stok/Itemstok"
import TitleGrid from "./Titlegrid"

const Stokmenipis = () => {

    console.log(stokmenipis);
    

    return(
        <div className="flex ">
            <TitleGrid title="Stok Menipis" sidetitle="Lihat Semua" 
            childer={
                stok.map((item) => (
                    <Itemstok
                        key={item.id}
                        item={item}
                    />
                ))
            }

            />
            
        </div>
    )
}

export default Stokmenipis