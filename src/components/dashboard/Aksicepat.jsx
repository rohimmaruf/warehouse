import Itemaksicepat from "./itemaksi/Itemaksicepat"
import TitleGrid from "./Titlegrid"

const Aksicepat = () => {
    return (
        <div>
            <TitleGrid title="Aksi Cepat" 
                childer={
                    <Itemaksicepat/>
                }
            />
        </div>
    )
}

export default Aksicepat