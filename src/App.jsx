import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <h1 className='text-5xl'>Home Page</h1>
      <Outlet />
      <Footer />
    </>
  )
}

export default App
