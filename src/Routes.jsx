import { Route, Routes } from 'react-router-dom'

//components
import MainPage from './pages/MainPage'
import Health from './pages/Health'
import Politics from './pages/Politics'
import Entertainment from './pages/Entertainment'
import Sport from './pages/Sports'




const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/Health' element={<Health />} />
      <Route path='/Politics' element={<Politics />} />
      <Route path='/Entertainment' element={<Entertainment />} />
      <Route path='/Sport' element={<Sport />} />
    </Routes>
  )
}

export default AppRoutes
