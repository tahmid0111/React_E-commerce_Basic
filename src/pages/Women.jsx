import { useState, useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import WomenProducts from '../Components/Women/WomenProducts'

const Women = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category')
  }, [])
  return (
    <>
              <div className="grid grid-cols-12 container mx-auto">

              <div className="nav-area col-span-2">
                  <Navbar />
              </div>

              <div className="user-area col-span-10">
                  <WomenProducts />
              </div>

              </div>
    </>
  )
}

export default Women
