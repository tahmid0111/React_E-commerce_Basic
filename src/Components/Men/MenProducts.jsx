import { useState, useEffect } from 'react'
import SingleProduct from './SingleProduct'

const MenProducts = () => {
    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
        .then(res => res.json())
        .then(data => setDatas(data))
    }, [])
  return (
    <>
    <div className='grid lg:md:grid-cols-3 grid-cols-1 gap-4'>
        {
            datas.map((product) => <SingleProduct key={product.id} product={product} />)
        }
    </div>

    </>
  )
}

export default MenProducts
