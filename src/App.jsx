import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './Routes'
import './App.css'
import Navbar from './layOut/Navbar'
import Footer from './layOut/Footer'


function App() {


  return (
    <>
      <Router>
        <Navbar/>
        <AppRoutes />
        <Footer/>
      </Router>
    </>
  )
}

export default App
