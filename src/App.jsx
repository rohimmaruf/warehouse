import { Route, Routes } from 'react-router-dom'
import './index.css'
import Dashboard from './pages/Dashboard'
import Databarang from './pages/Databarang'
import Layout from './layout/Layout'
import Kategori from './pages/Kategori'
import Product from './pages/Product'


function App() {

  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<Dashboard />} />
        <Route path='/databarang' element={<Product />} />
        <Route path='/kategori' element={<Kategori/>} />
      </Route>
    </Routes>

  )
}

export default App
