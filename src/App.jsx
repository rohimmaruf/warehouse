import { Route, Routes } from 'react-router-dom'
import '@/index.css'
import Kategori from '@/pages/Kategori'
import MainLayout from '@/layouts/main/MainLayout'
import DashboardPage from '@/pages/dashboard/DashboardPage'
import ProductPage from '@/pages/products/ProductPage'
import CategoryPage from './pages/categories/CategotryPage'
import LocationPage from './pages/locations/LocationPage'
import SupplierPage from './pages/supplier/SupplierPage'
import StockinPage from './pages/stockin/StockinPage'
import StockoutPage from './pages/stockout/StockoutPage'


function App() {

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/product' element={<ProductPage/>} />
        <Route path='/category' element={<CategoryPage/>} />
        <Route path='/location' element={<LocationPage/>}/>
        <Route path='/supplier' element={<SupplierPage/>}/>
        <Route path='/stockin' element={<StockinPage/>}/>
        <Route path='/stockout' element={<StockoutPage/>}/>
      </Route>
    </Routes>

  )
}

export default App
