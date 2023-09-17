import { useState, useEffect } from 'react'
import AllSingleProduct from './AllSingleProduct'

const AllProducts = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json())
        .then(data => setDatas(data))
    }, [])
  return (
    <>
          <div className='grid lg:md:grid-cols-3 grid-cols-1 gap-4'>
        {
            datas.map((product) => <AllSingleProduct key={product.id} product={product} />)
        }
    </div>
    </>
  )
}

export default AllProducts
