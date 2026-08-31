import stokmenipis from "../../data/stokmenipis"
import Itemstok from "./stok/Itemstok"
import TitleGrid from "./Titlegrid"

const Stokmenipis = () => {

    console.log(stokmenipis);
    

    return(
        <div className="flex w-2xl ">
            <TitleGrid title="Stok Menipis" sidetitle="Lihat Semua" 
            childer={
                stokmenipis.map((item) => (
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