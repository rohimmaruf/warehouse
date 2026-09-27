import { FileWarningIcon, Triangle, TriangleAlert } from "lucide-react";
import stok from "../../data/stok";
import stokmenipis from "../../data/stok"
import Itemstok from "./stok/Itemstok"
import TitleGrid from "./Titlegrid"

const Stokmenipis = () => {

    // console.log(stokmenipis);
    

    return(
        <div className="flex bg-warehouse-surface shadow rounded-2xl p-4">
            <TitleGrid 
            title="Stok Menipis" 
            sidetitle="View All"
            subtitle="Products that need attention"
            icon={<TriangleAlert size={35} className="text-orange-400"/>}
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