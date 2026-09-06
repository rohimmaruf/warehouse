import { Route, Routes } from 'react-router-dom'
import './index.css'
import Dashboard from './pages/Dashboard'
import Databarang from './pages/Databarang'


function App() {

  return (
    <Routes>
     
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/barang' element={<Databarang/>} />
    </Routes>
  )
}

export default App
