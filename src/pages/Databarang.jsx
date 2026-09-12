import { useState } from "react"
// import ProductForm from "./Productform"
import Sidebar from '../components/dashboard/Sidebar'
import Topbar from '../components/dashboard/Topbar'

const Databarang = () => {

  // const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSidebar, setIsSidebar] = useState(true)

  return (
    <>
        <div className='flex  bg-[#f8f9fc]'>
          {isSidebar && <Sidebar/>}
          <div>
            <Topbar title='Data Barang'/>
          </div>
        </div>
    </>
  )


}

export default Databarang