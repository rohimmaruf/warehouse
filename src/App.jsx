import { Route, Routes } from 'react-router-dom'
import '@/index.css'
import Kategori from '@/pages/Kategori'
import MainLayout from '@/layouts/main/MainLayout'
import DashboardPage from '@/pages/dashboard/DashboardPage'
import ProductPage from '@/pages/products/ProductPage'


function App() {

  return (
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/product' element={<ProductPage/>} />
        <Route path='/kategori' element={<Kategori/>} />
      </Route>
    </Routes>

  )
}

export default App
