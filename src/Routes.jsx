import { Route, Routes } from 'react-router-dom'

//components
import MainPage from './pages/MainPage'
import Food from './pages/Food'
import Politics from './pages/Politics'
import Entertainment from './pages/Entertainment'
import Sport from './pages/Sports'




const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Food />} />
      <Route path='/Food' element={<MainPage />} />
      <Route path='/Politics' element={<Politics />} />
      <Route path='/Entertainment' element={<Entertainment />} />
      <Route path='/Sport' element={<Sport />} />
    </Routes>
  )
}

export default AppRoutes
