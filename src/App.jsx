// import DataBarang from './pages/Databarang'
// import ProductForm from './pages/Productform'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import Dashboard from './pages/Dashboard'
import DataBarang from './pages/Databarang'

function App() {

  return (
    <Routes>
     
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/barang' element={<DataBarang/>} />
    </Routes>
  )
}

export default App
