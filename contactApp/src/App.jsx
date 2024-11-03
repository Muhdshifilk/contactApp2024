import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import {Route,Routes} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Home from './Pages/Home'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
      <ToastContainer />
    </>
  )
}

export default App
