import { Route, Routes } from 'react-router-dom'

//components
import Food from './pages/Food'
import Politics from './pages/Politics'
import Entertainment from './pages/Entertainment'



const AppRoutes = () => {
  
  return (
    <Routes>
      <Route path='/' element={<Food />} />
      <Route path='/Politics' element={<Politics />} />
      <Route path='/Entertainment' element={<Entertainment />} />

    </Routes>
  )
}

export default AppRoutes
